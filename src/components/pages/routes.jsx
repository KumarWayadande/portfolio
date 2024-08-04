import { createBrowserRouter } from "react-router-dom";
import ArticleContainer, {
  loader as articlesLoader,
} from "../article-components/ArticleContainer";
import ProjectContainer from "../project-components/ProjectContainer";
import Speaking from "../speaking-components/Speaking";
import Uses from "../tools-components/ToolContainer";
import LandingPage from "../utility components/LandingPage";
import RootLayout from "./RootLayout";
import Error from "../utility components/Error.jsx";
import SingleArticle, {
  loader as articleLoader,
} from "../article-components/single-article/SingleArticle.jsx";
// import Demo from "./Demo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "", element: <LandingPage /> },
      // { path: "/demo", element: <Demo /> },
      {
        path: "articles",
        element: <ArticleContainer />,
        loader: articlesLoader,
      },
      {
        path: "articles/:id",
        element: <SingleArticle />,
        loader: articleLoader,
      },
      { path: "projects", element: <ProjectContainer /> },
      { path: "speaking", element: <Speaking /> },
      { path: "uses", element: <Uses /> },
      { path: "error", element: <Error /> },
    ],
  },
]);

export default router;
