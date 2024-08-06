import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as dark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Component function for displaying code in an article
export default function CodeEditor(prop) {
  const editorStyle = dark; // react-syntax-highlighter theme mode

  // Custome style for output terminal
  const customStyle = {
    fontColor: "black",
    backgroundColor: "#1d1f21",
    borderRadius: "10px",
    padding: "10px",
    overflowX: "auto",
  };
  return (
    <SyntaxHighlighter
      useInlineStyles={prop.isOutput && false} // Add inline styles when output mode is true
      language="javascript"
      customStyle={prop.isOutput && customStyle} // custom  styles to be applied when output mode is true
      style={editorStyle}
    >
      {prop.children}
    </SyntaxHighlighter>
  );
}
