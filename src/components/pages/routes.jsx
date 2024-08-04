import { createBrowserRouter } from "react-router-dom";
import ArticleContainer, {
  loader as articlesLoader,
} from "../article-components/ArticleContainer";
import ProjectContainer from "../project-components/ProjectContainer";
import Main from "../editor/Main.jsx";
import Speaking from "../speaking-components/Speaking";
import Uses from "../tools-components/ToolContainer";
import LandingPage from "../utility components/LandingPage";
import RootLayout from "./RootLayout";
import Error from "../utility components/Error.jsx";
import SingleArticle, {
  loader as articleLoader,
} from "../article-components/single-article/SingleArticle.jsx";
import Editor from "../editor/Main.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "", element: <LandingPage /> },
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
      { path: "create", element: <Editor /> }
    ],
  },
  {
    path:"/create",
    element:<Main />
  }
]);

export default router;
