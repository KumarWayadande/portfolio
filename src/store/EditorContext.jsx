// Context for handling all operations related to article writing, updation, deletion
import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CodeEditor from "../components/article-components/single-article/CodeEditor";
import Contents from "../components/article-components/single-article/Contents";
import Heading from "../components/article-components/single-article/Heading";
import SubHeading from "../components/article-components/single-article/SubHeading";

export const EditorContext = createContext({
  title: "",
  description: "",
  file: null,
  value: "",
  onDescriptionChangeHandler: () => {},
  onTitleChangeHandler: () => {},
  onFileChangeHandler: () => {},
  onClickHandler: () => {},
  setFile: () => {},
  uploadImage: () => {},
  handleSubmit: () => {},
  validateData: () => {},
  getFormattedText: () => {},
});

export function EditorContextProvider(prop) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(""); // contents
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const onDescriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };
  const onTitleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const onFileChangeHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const validateData = () => {
    let error = {};
    error.status = false;
    if (!title || title.trim().length === 0) {
      error.title = "Please enter proper title";
      error.status = true;
    }
    if (!description || description.trim().length === 0) {
      error.description = "Please enter proper description";
      error.status = true;
    }
    if (!file) {
      error.file = "Please choose proper image";
      error.status = true;
    }

    return error;
  };

  // Function triggered when we click next button on first page of blog
  // It then checks for validation, if everything is ok then call next
  // component that is Editor.jsx
  const onClickHandler = () => {
    const error = validateData();
    if (error.status)
      return alert(error.title || error.file || error.description);
    else navigate("write");
  };

  // Function to upload an image to the server
  const uploadImage = async (file) => {
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

  const getCurrentDate = () => {
    const tempDate = new Date();
    const day = tempDate.getDay() + 1;
    const month = tempDate.getMonth() + 1;
    const year = tempDate.getFullYear();
    const finalDate = month + "/" + day + "/" + year;

    return finalDate;
  };

  // On submit this function sends data to the server
  const handleSubmit = async () => {
    const finalDate = getCurrentDate();
    const imgUrl = file ? await uploadImage(file) : "";

    try {
      const res = await fetch("http://localhost:3000/articles", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          title,
          description,
          contents: JSON.stringify(value),
          articleImg: file ? imgUrl : "",
          articleDate: finalDate,
        }),
      });

      if(!res.ok || res.status === 401){
        alert("You logged out of the system!!! Dont do this please");
        navigate("/login"); // navigate to articles page  
      }

      navigate("/articles"); // navigate to articles page
    } catch (err) {
      console.log(err);
    }
  };

  // Utility Function that returns an array of react elements which created by converting
  // standard html elements using parser
  const getFormattedText = (parsedValues) => {
    // Parse standard html contents (string form) to array form of html elements

    // Check
    // If parsedValues is an array then convert every tag to react elements
    // If parsedValues is an object (single element) then return the same object itself
    if (!parsedValues.length) return parsedValues;

    // Convert array of html element to an array of react elements and return
    // console.log(parsedValues);

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

  const valueCtx = {
    title,
    description,
    file,
    onDescriptionChangeHandler,
    onTitleChangeHandler,
    onFileChangeHandler,
    onClickHandler,
    setFile,
    value,
    setValue,
    uploadImage,
    handleSubmit,
    validateData,
    getFormattedText,
  };

  return (
    <EditorContext.Provider value={valueCtx}>
      {prop.children}
    </EditorContext.Provider>
  );
}
