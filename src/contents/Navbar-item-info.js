import ArticleContainer from "../components/article-components/ArticleContainer";
import ProjectContainer from "../components/project-components/ProjectContainer";
import Speaking from "../components/speaking-components/Speaking";
import Uses from "../components/tools-components/ToolContainer";
import LandingPage from "../components/utility components/LandingPage";

export const NAVBAR_ITEM_INFO = [
  {
    id:"NAVBAR_ITEM_01",
    component: LandingPage,
    navbarHeading: "About",
    componentName: "LandingPage",
  },
  {
    id:"NAVBAR_ITEM_02",
    component: ArticleContainer,
    navbarHeading: "Articles",
    componentName: "ArticleContainer",
  },
  {
    id:"NAVBAR_ITEM_03",
    component: ProjectContainer,
    navbarHeading: "Projects",
    componentName: "ProjectContainer",
  },
  {
    id:"NAVBAR_ITEM_04",
    component: Speaking,
    navbarHeading: "Speaking",
    componentName: "Speaking",
  },
  {
    id:"NAVBAR_ITEM_05",
    component: Uses,
    navbarHeading: "Uses",
    componentName: "Uses",
  },
];
