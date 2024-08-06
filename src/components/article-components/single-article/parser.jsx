import CodeEditor from "./CodeEditor";
import Contents from "./Contents";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import Parser from "html-react-parser";

export const getFormattedText = (rawContents) => {
  const parsedValues = Parser(rawContents);
  if(!parsedValues.length)
      return parsedValues;
    
  let contents = parsedValues.map((tag) => {
        switch (tag.type) {
          case "p":
            return <Contents key={tag.key}>{tag.props.children}</Contents>;
          case "h2":
            return <SubHeading key={tag.key}>{tag.props.children}</SubHeading>;
          case "h1":
            return <Heading key={tag.key}>{tag.props.children}</Heading>;
          case "pre":
            return <CodeEditor key={tag.key}>{tag.props.children}</CodeEditor>;
          default:
            return tag.props.children;
        }
      });
  
    return contents;
  };