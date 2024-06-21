import ArticleContainer from "../components/article-components/ArticleContainer";
import ProjectContainer from "../components/project-components/ProjectContainer";
import Speaking from "../components/speaking-components/Speaking";
import Uses from "../components/tools-components/ToolContainer";
import LandingPage from "../components/utility components/LandingPage";

export const NAV_ITEM_INFO = [
  {
    id:"NAV_ITEM_01",
    content: "About",
    component: LandingPage,
    isBottomBorder: true,
  },
  {
    id:"NAV_ITEM_02",
    content: "Articles",
    component: ArticleContainer,
    isBottomBorder: true,
  },
  {
    id:"NAV_ITEM_03",
    content: "Projects",
    component: ProjectContainer,
    isBottomBorder: true,
  },
  {
    id:"NAV_ITEM_04",
    content: "Speaking",
    component: Speaking,
    isBottomBorder: true,
  },
  {
    id:"NAV_ITEM_05",
    content: "Uses",
    component: Uses,
    isBottomBorder: false,
  },
];
