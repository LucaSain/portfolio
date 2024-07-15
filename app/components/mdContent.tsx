"use client";
import { useEffect, useState } from "react";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

export function MdxContent({ source }: MdxContentProps) {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  return <MDXRemote {...source} />;
}
