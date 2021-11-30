import React from "react";
// import { MDXProvider, mdx } from "@mdx-js/react";
// import Hello from "./mdx/hello.mdx";
import MdxLayout from "./MdxLayout"

const App: React.VFC<{}> = ({}) => {
  return (
    <div>
        <h2>Hello, React</h2>
        <MdxLayout mdxText={`# User hogehoge
        ## testtest aaaaa
        aiueo`}/>
    </div>
  );
};

export default App;
