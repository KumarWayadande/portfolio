import CodeEditor from "../article-components/single-article/CodeEditor";
import Contents from "../article-components/single-article/Contents";
import Heading from "../article-components/single-article/Heading";
import SubHeading from "../article-components/single-article/SubHeading";

// Utility Function that returns an array of react elements which created by converting
// standard html elements using parser
export const getFormattedText = (parsedValues) => {
  // Parse standard html contents (string form) to array form of html elements

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
