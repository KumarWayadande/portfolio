import { Outlet } from "react-router-dom";
import { EditorContextProvider } from "../../store/EditorContext";


export default function EditorRootLayout() {
  return (
    <EditorContextProvider>
      <Outlet />
    </EditorContextProvider>
  );
}
