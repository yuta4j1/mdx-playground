import React from "react";
import { MDXProvider } from "@mdx-js/react";
import mdx from "@mdx-js/mdx";
import Heading from "./md-components/heading";
import Code from "./md-components/code";
import Pre from "./md-components/pre";

const MdxLayout: React.VFC<{ mdxText: string }> = ({ mdxText }) => {
  return (
    <MDXProvider
      components={{
        h2: Heading,
        pre: Pre,
      }}
    >
      {mdx(mdxText).then(v => Promise.resolve(v))}
    </MDXProvider>
  );
};

export default MdxLayout;
