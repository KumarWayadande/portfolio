import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {NavbarContextProvider} from "./store/NavbarContext.jsx";
// import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <NavbarContextProvider>
    <App />
  </NavbarContextProvider>
  // </React.StrictMode>
);
