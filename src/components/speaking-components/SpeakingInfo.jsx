import CompanyName from "./CompanyName";
import SpeakingContentContainer from "./SpeakingContentContainer";
import SpeakingInfoContent from "./SpeakingInfoContent";
import SpeakingInfoHeader from "./SpeakingInfoHeader";
import BlueButton from "../../components/utility components/BlueButton";
import Timestamp from "./Timestamp";

const SpeakingInfo = (prop) => {
  return (
    <div className="article-row flex flex-col md:flex-row ">
      <Timestamp timeStamp={prop.timeStamp} />
      <SpeakingContentContainer>
        <CompanyName companyName={prop.companyName} />
        <SpeakingInfoHeader speakingInfoHeader={prop.speakingInfoHeader} />
        <SpeakingInfoContent speakingInfoContent={prop.speakingInfoContent} />
        <BlueButton buttonText={prop.buttonText} />
      </SpeakingContentContainer>
    </div>
  );
};

export default SpeakingInfo;
