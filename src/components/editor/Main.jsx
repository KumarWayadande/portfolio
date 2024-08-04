import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Parser from "html-react-parser";
import classes from "./styles.module.css";
import Contents from "../article-components/single-article/Contents";
import Heading from "../article-components/single-article/Heading";
import SubHeading from "../article-components/single-article/SubHeading";
import CodeEditor from "../article-components/single-article/CodeEditor";
import ExtLink from "../article-components/single-article/ExtLink";
import Image from "../article-components/single-article/Image";
import banner from "../../assets/aero_function_banner-3.png";
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "code-block"],
    [{ list: "bullet" }],
    ["link"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "code-block",
  "list",
  "bullet",
  "link",
];

export default function Write() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("Demo Title will look like this");
  const parsedValues = Parser(value);
  let contents = "";

  const handleSubmitDraft = () => {

  }

  if (parsedValues && !parsedValues.length) {
    contents = parsedValues;
  }

  if (parsedValues && parsedValues.length > 0) {
    contents = [parsedValues.map((tag) => {
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
    })];
  }


  console.log(contents);
  

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  return (
    <div className="editor-preview-container flex flex-col h-full md:h-[36rem] md:flex-row">
      <div className="editor-container w-[100%] md:w-[500px] mr-[20px] basis-1/2">
        <input type="text" onChange={handleChangeTitle} className="w-[100%] border my-3 py-1 px-2 border-gray-300" placeholder="Title of the Article" name="title" id="title" />
        <label htmlFor="bannerImg" className="underline py-5">Upload an banner image</label>
        <input type="file" name="bannerImg" className="hidden" id="bannerImg" />
        <div className="editor-container">
          <ReactQuill
            className={classes.quillEditor}
            theme="snow"
            value={value}
            onChange={setValue}
            modules={modules}
            formats={formats}
          />
        </div>
      </div>
        <div className="preview-container basis-1/2 overflow-y-scroll ">
          <div className="single-article-container overflow-hidden">
            <div className="article-contents-container">
              <Heading>{title || "Put Demo title of your article"}</Heading>
              <Image src={banner} className="rounded-xl my-10" />
              {contents}
            </div>
          </div>
        </div>
      </div>
  );
}
