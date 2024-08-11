import { Outlet, redirect } from "react-router-dom";
import { EditorContextProvider } from "../../store/EditorContext";
import axios from "axios";

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
    console.log(token);

    // const res = await axios.post("http://localhost:3000/auth/authcheck", {
    //   withCredentials: true,
    //   credentials: "include",
    //   headers: {
    //     "Authorization": `Bearer ${token}`,
    //   },
    // });

    const res = await fetch("http://localhost:3000/auth/authcheck", {
      // withCredentials: true,
      // credentials: "include",
      method:"post",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    console.log(res);
    

    if(!res.ok || res.status === 401){
      alert("Login please");
      return redirect("/");
    }

    return null;
  } catch (err) {
    throw new Error(err.message, { status: err.status });
  }
}
