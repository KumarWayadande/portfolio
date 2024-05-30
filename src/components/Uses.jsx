import Heading from "./Heading";
import HeadingContainer from "./HeadingContainer";
import SubHeading from "./SubHeading";
import Use from "./Use";

const Uses = () => {
  return (
    <div className="uses-container">
      <HeadingContainer>
        <Heading heading="Software I use, gadgets I love, and other things I recommend." />
        <SubHeading subHeading="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff." />
      </HeadingContainer>

      {/* <div className="tools-container flex flex-row">
        <div className="tool-name"></div>
        <div className="tool-info"></div>
      </div>     */}

      <div className="tool-container flex flex-col border-l-[1px] border-b-gray-50 md:w-[80%] sm:pl-5 dark:border-gray-700">
        {/* All articles */}
        <Use />
        <Use />
        {/* <Use /> */}
        {/* <Use /> */}
        {/* End of all articles */}
      </div>

    </div>
  );
};

export default Uses;
