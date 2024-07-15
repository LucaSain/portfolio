import { serialize } from "next-mdx-remote/serialize";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import remarkParse from "remark-parse";
import rehypeStringify from "rehype-stringify";
//@ts-expect-error
import rehypePrism from "@mapbox/rehype-prism";
import remarkRehype from "remark-rehype";

const processMdx = async (data: string) => {
  return await serialize(data as string, {
    scope: {},
    mdxOptions: {
      remarkPlugins: [remarkRehype, remarkMath, remarkParse],
      rehypePlugins: [rehypeMathjax, rehypeStringify, rehypePrism],
      format: "mdx",
      development: process.env.NODE_ENV === "development",
    },
    parseFrontmatter: false,
  });
};
export default processMdx;
