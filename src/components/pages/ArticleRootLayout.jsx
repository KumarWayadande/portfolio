import { Outlet } from "react-router-dom";
import { EditorContextProvider } from "../../store/EditorContext";

export default function ArticleRootLayout() {
  return (
    <EditorContextProvider>
      <Outlet />
    </EditorContextProvider>
  );
}
