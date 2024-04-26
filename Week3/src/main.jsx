import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "../styles/GlobalStyle.js";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>
);
