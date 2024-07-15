import pg from "pg";
import * as Minio from "minio";
export const prerender = false;

export type Row = { data: string; id: number; parent_id: number };
export interface Node extends Row {
  isLeaf: boolean;
}

const s3 = new Minio.Client({
  endPoint: process.env.S3_URL || "",
  accessKey: process.env.S3_ACCESS_KEY || "",
  secretKey: process.env.S3_SECRET_KEY || "",
  useSSL: process.env.S3_SSL === "true" ? true : false,
  port: parseInt(process.env.S3_PORT || "9000"),
});
const sql = new pg.Client({
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT || "5432"),
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});
sql.connect();

export default class Database {
  getChildren = async (id: number) => {
    return (
      await sql.query({
        text: "SELECT * FROM node WHERE parent_id = $1",
        values: [id],
      })
    ).rows as Array<Row>;
  };

  getChild = async (id: number, name: string) => {
    const decoded = decodeURIComponent(name);
    return (
      await sql.query({
        text: "SELECT * FROM node WHERE parent_id = $1 AND data = $2",
        values: [id, decoded],
      })
    ).rows[0];
  };

  getNode = async (id: number) => {
    const node = (
      await sql.query({
        text: "SELECT * FROM node WHERE id = $1",
        values: [id],
      })
    ).rows[0];
    return { ...node, isLeaf: await this.isLeaf(id) };
  };

  findId = async (path: Array<string>) => {
    if (path.length === 0) return -1;
    if (path.length === 1) return 1;
    const parentPath = path.slice(0, -1);
    const name = path.slice(-1)[0];
    const parentId = await this.findId(parentPath);
    const child = await this.getChild(parentId, name);
    if (!child) return -1;
    return child.id;
  };

  isLeaf = async (id: number) => {
    const children = await this.getChildren(id);
    if (children.length === 1) {
      return (await this.getChildren(children[0].id)).length === 0;
    }
    return false;
  };

  getObject = async (objName: string) => {
    return new Promise<string>(async (resolve, reject) => {
      let data = "";
      const dataStream = await s3.getObject(
        process.env.S3_BUCKET || "",
        objName
      );
      dataStream.on("data", (chunk) => {
        data += chunk.toString();
      });
      dataStream.on("end", () => {
        resolve(data);
      });
    });
  };
}
