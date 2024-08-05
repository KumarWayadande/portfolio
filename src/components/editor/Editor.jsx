import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Parser from "html-react-parser";
import Contents from "../article-components/single-article/Contents";
import Heading from "../article-components/single-article/Heading";
import SubHeading from "../article-components/single-article/SubHeading";
import CodeEditor from "../article-components/single-article/CodeEditor";
import Image from "../article-components/single-article/Image";
import banner from "../../assets/aero_function_banner-3.png";
import axios from "axios";
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

const getFormattedText = (parsedValues) => {
  let contents = [
    parsedValues.map((tag) => {
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
    }),
  ];

  return contents;
};

export default function Editor() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("Demo Title will look like this");
  const [file, setFile] = useState(null);
  const parsedValues = Parser(value);
  let contents = "";
  if (parsedValues && !parsedValues.length) {
    contents = parsedValues;
  }
  if (parsedValues && parsedValues.length > 0) {
    contents = getFormattedText(parsedValues);
  }
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // console.log(file);
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file || null);
      const res = await axios.post(
        "http://localhost:3000/api/upload",
        formData
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async () => {
    const imgUrl = file ? await upload() : "";
    // console.log(imgUrl);

    console.log({
      title: title,
      file: imgUrl,
      content: contents,
    });

    try {
      const res = await axios.post(`http://localhost:3000/articles`, {
        title,
        contents: contents,
        articleImg: file ? imgUrl : "",
        articleDate: new Date()
      });
      // navigate("/")
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="editor-preview-container flex flex-col h-full md:h-[36rem] md:flex-row">
      <div className="editor-container w-[100%] md:w-[500px] mr-[20px] basis-1/2">
        <input
          type="text"
          onChange={handleChangeTitle}
          className="outline-none focus:border-[#1fb9a7] dark:text-stone-200 dark:border-gray-700 dark:shadow-[#252529] dark:bg-[#252529] w-[100%] rounded-md shadow-md shadow-slate-300 py-2 border my-3 px-2 border-gray-300"
          placeholder="Title of the Article"
          name="title"
          id="title"
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="outline-none focus:border-[#1fb9a7] dark:text-stone-200 dark:border-gray-700 dark:shadow-[#252529] dark:bg-[#252529] w-[100%] rounded-md shadow-md shadow-slate-300 py-2 border my-3 px-2 border-gray-300"
          name="file"
          id="file"
        />
        <button onClick={handleSubmit}>Submit</button>
        <div className="editor-container">
          <ReactQuill
            className=" dark:[&_div:nth-child(1)]:border-gray-700 [&_div:nth-child(1)]:rounded-t-md dark:[&_div:nth-child(1)]:bg-[#252529]  &_div:nth-child(1)]:rounded-t-lg rounded-lg [&_div:nth-child(2)]:rounded-b-lg  dark:[&_div:nth-child(2)]:border-gray-700 [&_div:nth-child(2)]:h-[25rem] shadow-md dark:text-gray-100 dark:bg-gray-900"
            theme="snow"
            value={value}
            onChange={setValue}
            modules={modules}
            formats={formats}
          />
        </div>
      </div>
      <div className="dark:bg-[#252529] rounded-lg p-4 preview-container basis-1/2 overflow-y-scroll ">
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
