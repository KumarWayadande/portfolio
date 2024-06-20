import ToolDate from "./ToolDate";
import ToolInformation from "./ToolInformation";
import ToolInformationContainer from "./ToolInformationContainer";
import ToolsContainer from "./ToolsContainer";

const Tool = (prop) => {
  return (
    <ToolsContainer>
      <ToolDate toolDate={prop.toolDate} />
      <ToolInformationContainer>
        <ToolInformation toolName={prop.toolName} toolDescription={prop.toolDescription} />
      </ToolInformationContainer>
    </ToolsContainer>
  );
};

export default Tool;
