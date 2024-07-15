// rename the export anonymous function with whatever
import nextMdx from "@next/mdx";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
const withMdx = nextMdx({
  providerImportSource: "@mdx-js/react",
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkMath, remarkParse, remarkRehype],
    rehypePlugins: [rehypeMathjax, rehypeKatex, rehypeStringify],
  },
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  transpilePackages: ["next-mdx-remote"],
  // Optionally, add any other Next.js config below
};

export default withMdx(nextConfig);
