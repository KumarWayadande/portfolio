import Heading from "../utility components/Heading";
import HeadingContainer from "../utility components/HeadingContainer";
import Project from "./Project";
import SubHeading from "../utility components/SubHeading";
import projectInfo from "../../contents/project-information.js";

const ProjectContainer = () => {
  return (
    <div>
      <HeadingContainer>
        <Heading
          heading="Things I’ve made trying to put my dent in the universe.
"
        />
        <SubHeading
          subHeading="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.

"
        />
      </HeadingContainer>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:-translate-x-5">
        {projectInfo.map((item, index) => {
          return (<Project
            key={index}
            buttonText="github.com"
            {...item}
          />)
        })}
      </div>
    </div>
  );
};

export default ProjectContainer;
