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
import Editor from "../editor/Editor.jsx";
import ArticleRootLayout from "./ArticleRootLayout.jsx";
import EditorRootLayout from "./EditorRootLayout.jsx";
import ArticleDescriptionPage from "../editor/ArticleDescriptionPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "", element: <LandingPage /> },
      {
        path: "articles",
        element: <ArticleRootLayout />,
        children: [
          {
            index: true,
            element: <ArticleContainer />,
            loader: articlesLoader,
          },
          {
            path: ":id",
            element: <SingleArticle />,
            loader: articleLoader,
          },
        ],
      },
      { path: "projects", element: <ProjectContainer /> },
      { path: "speaking", element: <Speaking /> },
      { path: "uses", element: <Uses /> },
      { path: "error", element: <Error /> },
      {
        path: "create",
        element: <EditorRootLayout />,
        children: [
          {
            index: true,
            element: <ArticleDescriptionPage />,
          },
          {
            path: "write",
            element: <Editor />,
          },
        ],
      },
    ],
  },
]);

export default router;
