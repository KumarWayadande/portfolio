import ToolDescription from "./ToolDescription";
import ToolName from "./ToolName";

const ToolInformation = (prop) => {
  return (
    <div className="second-col p-7 rounded-xl">
      <ToolName toolName={prop.toolName} />
      <ToolDescription toolDescription={prop.toolDescription} />
    </div>
  );
};

export default ToolInformation;
