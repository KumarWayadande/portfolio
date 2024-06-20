import HeadingContainer from "../utility components/HeadingContainer";
import Heading from "../utility components/Heading";
import SubHeading from "../utility components/SubHeading";
import SpeakingInfo from "./SpeakingInfo";
import SPEAKING_INFO from "../../contents/speaking-info";
const Speaking = () => {
  return (
    <div className="speaking-container">
      <HeadingContainer>
        <Heading heading="I’ve spoken at events all around the world and been interviewed for many podcasts." />
        <SubHeading subHeading="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions." />
      </HeadingContainer>

      <div className="article-card-container flex flex-col border-l-[1px] border-b-gray-50 md:w-[80%] sm:pl-5 dark:border-gray-700 ">
        {/* All articles */}

        {SPEAKING_INFO.map((item) => {
          return <SpeakingInfo key={item.id} {...item} />;
        })}

        {/* End of all articles */}
      </div>
    </div>
  );
};

export default Speaking;
