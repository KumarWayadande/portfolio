import HeadingContainer from "./HeadingContainer";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import SpeakingInfo from "./SpeakingInfo";
const Speaking = () => {
  return (
    <div className="speaking-container ">
      <HeadingContainer>
        <Heading heading="I’ve spoken at events all around the world and been interviewed for many podcasts." />
        <SubHeading subHeading="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions." />
      </HeadingContainer>

      <div className="article-card-container flex flex-col border-l-[1px] border-b-gray-50 md:w-[80%] sm:pl-5 dark:border-gray-700 ">
        {/* All articles */}
        <SpeakingInfo
          buttonText="Watch Video"
          timeStamp="September 5, 2024"
          speakingInfoHeader="Crafting a design system for a multiplanetary future"
          speakingInfoContent="Most companies try to stay ahead of the curve when it comes to
            visual design, but for Planetaria we needed to create a brand that
            would still inspire us 100 years from now when humanity has spread
            across our entire solar system."
        />
        <SpeakingInfo
          buttonText="Watch Video"
          timeStamp="September 5, 2024"
          speakingInfoHeader="Crafting a design system for a multiplanetary future"
          speakingInfoContent="Most companies try to stay ahead of the curve when it comes to
            visual design, but for Planetaria we needed to create a brand that
            would still inspire us 100 years from now when humanity has spread
            across our entire solar system."
        />
        <SpeakingInfo
          buttonText="Watch Video"
          timeStamp="September 5, 2024"
          speakingInfoHeader="Crafting a design system for a multiplanetary future"
          speakingInfoContent="Most companies try to stay ahead of the curve when it comes to
            visual design, but for Planetaria we needed to create a brand that
            would still inspire us 100 years from now when humanity has spread
            across our entire solar system."
        />
        <SpeakingInfo
          buttonText="Watch Video"
          timeStamp="September 5, 2024"
          speakingInfoHeader="Crafting a design system for a multiplanetary future"
          speakingInfoContent="Most companies try to stay ahead of the curve when it comes to
            visual design, but for Planetaria we needed to create a brand that
            would still inspire us 100 years from now when humanity has spread
            across our entire solar system."
        />
        
        {/* End of all articles */}
      </div>
    </div>
  );
};

export default Speaking;
