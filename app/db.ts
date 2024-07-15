import pg from "pg";
import * as Minio from "minio";

// Make sure we DO NOT "prerender" this function to allow the ENV variables to update on the fly
export const prerender = false;
const minioClient = new Minio.Client({
  endPoint: process.env.S3_URL || "",
  accessKey: process.env.S3_ACCESS_KEY || "",
  secretKey: process.env.S3_SECRET_KEY || "",
  useSSL: process.env.S3_SSL === "true" ? true : false,
  port: parseInt(process.env.S3_PORT || "9000"),
});
const client = new pg.Client({
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT || "5432"),
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});
client.connect();
export { client as db };
export { minioClient as s3 };
