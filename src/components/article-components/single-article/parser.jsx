import CodeEditor from "./CodeEditor";
import Contents from "./Contents";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import Parser from "html-react-parser"; // To convert an html string into an array of tags

// Utility Function that returns an array of react elements which created by converting
// standard html elements using parser
export const getFormattedText = (rawContents) => {
  // Parse standard html contents (string form) to array form of html elements
  const parsedValues = Parser(rawContents);

  // Check
  // If parsedValues is an array then convert every tag to react elements
  // If parsedValues is an object (single element) then return the same object itself
  if (!parsedValues.length) return parsedValues;

  // Convert array of html element to an array of react elements and return
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
