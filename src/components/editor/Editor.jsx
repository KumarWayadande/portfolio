import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { getFormattedText } from "../utility components/Parser";
import Heading from "../article-components/single-article/Heading";
import Image from "../article-components/single-article/Image";
import banner from "../../assets/aero_function_banner-3.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Parser from "html-react-parser";

// Custom modules for Quill Editor
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "code-block"],
    [{ list: "bullet" }],
    ["link"],
  ],
};

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

const getCurrentDate = () => {
  const tempDate = new Date();
  const day = tempDate.getDay();
  const month = tempDate.getMonth() + 1;
  const year = tempDate.getFullYear();
  const finalDate = month + "/" + day + "/" + year;

  return finalDate;
};

// Function to upload an image to the server
const uploadImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file || null);
    const res = await axios.post("http://localhost:3000/api/upload", formData);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// Article Editor to create an article
export default function Editor() {
  const [value, setValue] = useState(""); // contetns
  const [title, setTitle] = useState("Demo Title will look like this"); // heading
  const [file, setFile] = useState(null); // image file
  const navigate = useNavigate();
  let contents = ""; // holds contents

  // Parsed array of html elements
  const parsedValues = Parser(value);

  if (parsedValues && !parsedValues.length) {
    contents = parsedValues;
  }
  if (parsedValues && parsedValues.length > 0) {
    // Parsed array of react elements
    contents = getFormattedText(parsedValues);
  }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // On submit this function sends data to the server
  const handleSubmit = async () => {
    const finalDate = getCurrentDate();
    const imgUrl = file ? await uploadImage(file) : "";

    try {
      await axios.post(`http://localhost:3000/articles`, {
        title,
        contents: value,
        articleImg: file ? imgUrl : "",
        articleDate: finalDate,
      });

      navigate("/articles"); // navigate to articles page
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
