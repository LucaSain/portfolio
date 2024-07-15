import { redirect } from "next/navigation";
import AnimatedDot from "../components/animatedDot";
import { serialize } from "next-mdx-remote/serialize";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import remarkParse from "remark-parse";
import rehypeStringify from "rehype-stringify";
//@ts-expect-error
import rehypePrism from "@mapbox/rehype-prism";
// import Layout from "../layouts/Layout.astro";
// import PostLayout from "../layouts/PostLayout.astro";
import { db, s3 } from "../db";
import { MdxContent } from "../components/mdContent";
import { Suspense } from "react";
import remarkRehype from "remark-rehype";

const getChildren = async (id: number) => {
  return (
    await db.query({
      text: "SELECT * FROM node WHERE parent_id = $1",
      values: [id],
    })
  ).rows as Array<{ data: string; id: number; parent_id: number }>;
};

const getChild = async (id: number, name: string) => {
  const decoded = decodeURIComponent(name);
  return (
    await db.query({
      text: "SELECT * FROM node WHERE parent_id = $1 AND data = $2",
      values: [id, decoded],
    })
  ).rows[0];
};

const getNode = async (id: number) => {
  return (
    await db.query({ text: "SELECT * FROM node WHERE id = $1", values: [id] })
  ).rows[0];
};

const findId = async (path: Array<string>) => {
  if (path.length === 0) return -1;
  if (path.length === 1 || path.length === 0) return 1;
  const parentPath = path.slice(0, -1);
  const parentId = await findId(parentPath);
  const name = path.slice(-1)[0];
  const child = await getChild(parentId, name);
  return child.id;
};

const isLeaf = async (id: number) => {
  //if the child of id is not a parent, then it is a leaf
  const children = await getChildren(id);
  if (children.length === 1) {
    return (await getChildren(children[0].id)).length === 0;
  }
  return false;
};

export default async function Page({
  params,
}: {
  params: { coursePath: Array<string> };
}) {
  const coursePath = params.coursePath;
  const currentId = coursePath.length === 1 ? 1 : await findId(coursePath);

  if (currentId === -1) {
    redirect("/");
  }

  const node = await getNode(currentId);

  const leaf = await isLeaf(currentId);

  const child = await getChildren(currentId);
  if (leaf) {
    const streamData = new Promise(async (resolve, reject) => {
      let data = "";
      const dataStream = await s3.getObject(
        process.env.S3_BUCKET || "",
        child[0].data
      );
      dataStream.on("data", (chunk) => {
        data += chunk.toString();
      });
      dataStream.on("end", () => {
        console.log("End of stream");
        resolve(data);
      });
    });
    const data = await streamData;
    const source = await serialize(data as string, {
      scope: {},
      mdxOptions: {
        remarkPlugins: [remarkRehype, remarkMath, remarkParse],
        rehypePlugins: [rehypeMathjax, rehypeStringify, rehypePrism],
        format: "mdx",
        development: process.env.NODE_ENV === "development",
      },
      parseFrontmatter: false,
    });
    let title = (
      <>
        {node.data.split(".")[0]} <AnimatedDot /> {node.data.split(".")[1]}{" "}
      </>
    );
    return (
      // <PostLayout title={node.data}>
      <div className="prose mx-auto px-2 min-h-screen h-max w-screen py-10 pb-28">
        <h1 className="flex flex-row mb-0 text-center text-6xl font-bold lg:text-7xl">
          {title}
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <MdxContent source={source} />
        </Suspense>
      </div>
    );
  }

  return (
    // </PostLayout>
    // <Layout title="Welcome to Astro.">
    <div className="prose mx-auto px-2 min-h-screen h-max w-screen">
      <h1 className="flex flex-row mb-0 text-center text-6xl font-bold lg:text-7xl">
        {node.data}
        <AnimatedDot />
      </h1>
      {child.map((el) => (
        <h2 key={el.data}>
          <a href={"/" + coursePath.join("/") + "/" + el.data}>{el.data}</a>
        </h2>
      ))}
    </div>
    // </Layout>
  );
}
