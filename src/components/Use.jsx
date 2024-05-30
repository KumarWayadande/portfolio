import ToolInformation from "./ToolInformation";

const Use = () => {
  return (
    <div className="article-row flex flex-col md:flex-row ">
      <p className="text-gray-950 dark:text-white font-semibold px-7 md:p-7 md:px-0 my-3 w-[90%]">
        September 5, 2024
      </p>
      <div className="use-flex-box flex flex-col">
        <ToolInformation />
        <ToolInformation />
      </div>
    </div>
  );
};

export default Use;
