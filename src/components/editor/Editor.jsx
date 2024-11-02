import { useContext, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Heading from "../article-components/single-article/Heading";
import Image from "../article-components/single-article/Image";
import { Link, useNavigate } from "react-router-dom";
import Parser from "html-react-parser";
import { EditorContext } from "../../store/EditorContext";
import CustomButton from "./CustomButton";
import { NavbarContext } from "../../store/NavbarContext";
// import { getFormattedText } from "../utility components/Parser";
// Custom modules for Quill Editor


// Custom formats for Quill Editor
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

// Article Editor to create an article
export default function Editor() {
  const {
    title,
    file,
    value,
    setValue,
    handleSet,
    handleSubmit,
    validateData,
    getFormattedText,
  } = useContext(EditorContext);
  const { currentUser } = useContext(NavbarContext);
  const navigate = useNavigate();
  const quillRef = useRef();
  function imageHandler() {
    console.log("custom image handler");
    // const editor = quillRef.current.getEditor();

    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      console.log(file);
      
      // try {
      //   const link = IMAGE_LINK_HERE;
      //   editor.insertEmbed(editor.getSelection(), "image", link);
      // } catch (err) {
      //   console.log("upload err:", err);
      // }
    };
  }

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "code-block"],
        [{ list: "bullet" }],
        ["image", "link"],
      ],
      handlers: {
        image: imageHandler,
      },
    },
  };

  // If some input fields are missing then return to the previous page
  useEffect(() => {
    if (validateData().status) navigate("..");
  }, []);

  useEffect(() => {
    if (!currentUser) navigate("/login");
  }, [currentUser]);

  let contents = ""; // holds contents

  // file object used to create an url object to use as a src for <img />
  let url = null;
  if (file) url = URL.createObjectURL(file);

  // Parsed array of html elements
  const parsedValues = Parser(value);

  if (parsedValues && !parsedValues.length) {
    contents = parsedValues;
  }

  // Check of value is an object or not
  // if its object then return as it is
  // if its an array then parse it to an array
  if (parsedValues && parsedValues.length > 0) {
    // Parsed array of react elements
    contents = getFormattedText(parsedValues);
  }

  return (
    <div className="editor-preview-container flex flex-col h-full md:h-[36rem] md:flex-row">
      <div className="editor-container w-[100%] md:w-[500px] mr-[20px] basis-1/2">
        <div className="buttons-container flex flex-row justify-between mb-5">
          <Link to="..">
            <CustomButton label="Back" />
          </Link>
          <CustomButton onClick={handleSubmit} label="Publish" />
        </div>
        <div className="editor-container">
          <ReactQuill
            className=" dark:[&_div:nth-child(1)]:border-gray-700 [&_div:nth-child(1)]:rounded-t-md dark:[&_div:nth-child(1)]:bg-[#252529]  &_div:nth-child(1)]:rounded-t-lg rounded-lg [&_div:nth-child(2)]:rounded-b-lg  dark:[&_div:nth-child(2)]:border-gray-700 [&_div:nth-child(2)]:h-[25rem] shadow-md dark:text-gray-100 dark:bg-gray-900"
            theme="snow"
            value={value}
            onChange={setValue}
            modules={modules}
            formats={formats}
            ref={quillRef}
          />
        </div>
      </div>
      <div className="dark:bg-[#252529] rounded-lg p-4 preview-container basis-1/2 overflow-y-scroll ">
        <div className="single-article-container overflow-hidden">
          <div className="article-contents-container">
            <Heading>{title || "Put Demo title of your article"}</Heading>
            <Image src={url ? url : ""} className="rounded-xl my-10" />
            {contents}
          </div>
        </div>
      </div>
    </div>
  );
}
