import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./styles/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRouter />
    <ToastContainer />
  </React.StrictMode>
);
