import { redirect } from "next/navigation";
import AnimatedDot from "../components/animatedDot";
import Database, { Node, Row } from "../ultil/db";
import { MdxContent } from "../components/mdxContent";
import { Suspense } from "react";
import processMdx from "../ultil/processMdx";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

interface MarkdownPageParams {
  source: MDXRemoteSerializeResult<any> | null;
  title: JSX.Element | null;
}

interface FSPageParams {
  node: Node;
  children: Array<Row>;
  path: Array<string>;
}

export default async function Page({
  params,
}: {
  params: { coursePath: Array<string> };
}) {
  const db = new Database();
  const path = params.coursePath;
  const id = path.length === 1 ? 1 : await db.findId(path);

  if (id === -1) {
    redirect("/");
  }

  const node: Node = await db.getNode(id);

  const getRawMarkdown = async (node: Node) => {
    if (!node.isLeaf) {
      return { source: null, title: null };
    }
    const children = await db.getChildren(id);
    const data = await db.getObject(children[0].data);
    const source = (await processMdx(data)) || " ";
    const title = (
      <>
        {node.data.split(".")[0]} <AnimatedDot /> {node.data.split(".")[1]}{" "}
      </>
    );
    return { source, title };
  };

  if (node.isLeaf) {
    return await markdownPage(await getRawMarkdown(node));
  } else {
    const children = await db.getChildren(id);
    return await FSPage({ node, children, path });
  }
}

const markdownPage = async ({ source, title }: MarkdownPageParams) => {
  if (!source) return null;
  return (
    <div className="prose mx-auto px-2 min-h-screen h-max w-screen">
      <h1 className="flex flex-row mb-0 text-center text-6xl font-bold lg:text-7xl">
        {title}
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <MdxContent source={source} />
      </Suspense>
    </div>
  );
};

async function FSPage({ node, children, path }: FSPageParams) {
  return (
    <div className="prose mx-auto px-2 min-h-screen h-max w-screen">
      <h1 className="flex flex-row mb-0 text-center text-6xl font-bold lg:text-7xl">
        {node.data}
        <AnimatedDot />
      </h1>
      {children.map((el) => (
        <h2 key={el.data}>
          <a href={"/" + path.join("/") + "/" + el.data}>{el.data}</a>
        </h2>
      ))}
    </div>
  );
}
