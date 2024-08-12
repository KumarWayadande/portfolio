import Heading from "../utility components/Heading";
import CustomFileInput from "./CustomFileInput";
import CustomInput from "./CustomInput";
import CustomTextArea from "./CustomTextArea";
import CustomButton from "./CustomButton";
import FileUpload from "./FileUpload";
import { EditorContext } from "../../store/EditorContext";
import { useContext, useEffect } from "react";
import { NavbarContext } from "../../store/NavbarContext";
import { useNavigate } from "react-router-dom";

export default function ArticleDescriptionPage() {
  const {
    title,
    description,
    file,
    onDescriptionChangeHandler,
    onTitleChangeHandler,
    onFileChangeHandler,
    onClickHandler,
    setFile,
  } = useContext(EditorContext);

  const navigate = useNavigate();
  const {currentUser} = useContext(NavbarContext);


  useEffect(() => {
    if(!currentUser){
      navigate("/login");
    }
  }, [currentUser]);

  return (
    <div className="flex flex-col my-10 gap-2 items-center">
      <Heading extraClasses="text-center" heading="Welcome to Your Blog Hub!" />
      <Heading
        extraClasses="text-center"
        heading="Start Your Blogging Journey Here"
      />
      <h2 className="dark:#9ca3af text-stone-500 mt-5">
        Share Your Thoughts, Stories, and Ideas with the World
      </h2>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700" />

      <div className="flex flex-col w-[100%] md:w-[50%] gap-10">
        <CustomInput
          value={title}
          label="Article Title"
          onChangeHandler={onTitleChangeHandler}
        />
        <CustomTextArea
          value={description}
          label="Article Description"
          onChangeHandler={onDescriptionChangeHandler}
        />
        {!file && (
          <CustomFileInput
            file={file}
            label="Article Banner Image"
            onFileChangeHandler={onFileChangeHandler}
          />
        )}
        {file && (
          <FileUpload
            file={file || "image.ext"}
            onFileChangeHandler={setFile}
          />
        )}
        <CustomButton label="Next" onClick={onClickHandler} />
      </div>
    </div>
  );
}


export async function loader(){
  
}