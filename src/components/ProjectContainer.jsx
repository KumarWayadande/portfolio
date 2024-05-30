import projectInfo from "../../public/contents/project-information";
import Heading from "./Heading";
import HeadingContainer from "./HeadingContainer";
import Project from "./Project";
import SubHeading from "./SubHeading";

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
        {/* <Project
          buttonText="github.com"
          projectHeader="Mariyan Restaurant"
          projectDescription="Elegant ambiance, gourmet cuisine, online reservations, special events, exceptional service."
        />
        <Project
          buttonText="github.com"
          projectHeader="Toggl"
          projectDescription="Time tracking applications to track our daily activity and get insights about them."
        />
        <Project
          buttonText="github.com"
          projectHeader="Airbnb clone"
          projectDescription="Unique stays worldwide, local hosts, affordable rates, easy booking, authentic experiences."
        />
        <Project
          buttonText="github.com"
          projectHeader="OrderKaro"
          projectDescription="Convenient online shopping, fresh groceries, quick delivery, easy payment, reliable service."
        />
        <Project
          buttonText="github.com"
          projectHeader="Tindog"
          projectDescription="A digital world where dog owners can enjoy shopping and various plans for their dogs."
        />
        <Project
          buttonText="github.com"
          projectHeader="Old portfolio"
          projectDescription="Showcasing skills, projects, experience, contact information, professional online presence."
        /> */}

        {projectInfo.map((item, index) => {
          return (<Project
            key={index}
            buttonText="github.com"
            projectHeader={item.projectHeader}
            projectDescription={item.projectDescription}
            projectLink={item.projectLink}
          />)
        })}
      </div>
    </div>
  );
};

export default ProjectContainer;
