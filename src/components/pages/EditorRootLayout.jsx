import { Outlet, redirect } from "react-router-dom";
import { EditorContextProvider } from "../../store/EditorContext";

export default function EditorRootLayout() {
  return (
    <EditorContextProvider>
      <Outlet />
    </EditorContextProvider>
  );
}

export async function loader() {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:3000/auth/authcheck", {
      method:"post",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    console.log(res);
    
    if(!res.ok || res.status === 401){
      // alert("Login please");
      return redirect("/login");
    }

    return null;
  } catch (err) {
    throw new Error(err.message, { status: err.status });
  }
}
