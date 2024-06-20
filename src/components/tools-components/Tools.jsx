import ToolDate from "./ToolDate";
import ToolInformation from "./ToolInformation";
import ToolInformationContainer from "./ToolInformationContainer";

const Use = () => {
  return (
    <div className="article-row flex flex-col md:flex-row ">
      <ToolDate  />
      <ToolInformationContainer>
        <ToolInformation />
      </ToolInformationContainer>
    </div>
  );
};

export default Use;
