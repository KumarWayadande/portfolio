import { createBrowserRouter } from "react-router-dom";
import ArticleContainer from "../article-components/ArticleContainer";
import ProjectContainer from "../project-components/ProjectContainer";
import Speaking from "../speaking-components/Speaking";
import Uses from "../tools-components/ToolContainer";
import LandingPage from "../utility components/LandingPage";
import RootLayout from "./RootLayout";
import Error from "../utility components/Error.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        { path: "", element: <LandingPage /> },
        { path: "articles", element: <ArticleContainer /> },
        { path: "projects", element: <ProjectContainer /> },
        { path: "speaking", element: <Speaking /> },
        { path: "uses", element: <Uses /> },
      ],
    },
  ]);

  export default router;