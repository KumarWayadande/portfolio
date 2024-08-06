import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as dark } from "react-syntax-highlighter/dist/esm/styles/prism";
export default function CodeEditor(prop) {
  const editorStyle = dark;
  const customStyle = {
    fontColor: "black",
    backgroundColor: "#1d1f21",
    borderRadius: "10px",
    padding: "10px",
    overflowX: "auto",
  };
  return (
    <SyntaxHighlighter
      useInlineStyles={prop.isOutput && false}
      language="javascript"
      customStyle={prop.isOutput && customStyle}
      style={editorStyle}
    >
      {prop.children}
    </SyntaxHighlighter>
  );
}
