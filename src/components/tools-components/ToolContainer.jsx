import TOOLS_INFO from "../../contents/tools-info";
import Heading from "../utility components/Heading";
import HeadingContainer from "../utility components/HeadingContainer";
import SubHeading from "../utility components/SubHeading";
import Tool from "./Tools";

const Uses = () => {
  return (
    <div className="uses-container">
      <HeadingContainer>
        <Heading heading="Software I use, gadgets I love, and other things I recommend." />
        <SubHeading subHeading="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff." />
      </HeadingContainer>

      <div className="tool-container flex flex-col border-l-[1px] border-b-gray-50 md:w-[80%] sm:pl-5 dark:border-gray-700">
        {TOOLS_INFO.map((item) => {
          return (
            <Tool
              key={item.id}
              toolDate="Productivity"
              toolName={item.toolName}
              toolDescription={item.toolDescription}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Uses;
