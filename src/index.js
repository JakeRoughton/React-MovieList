

//Import React Components
import React from "react";
import ReactDOM from "react-dom/client";

//Import main App to render
import App from "./App";

//Import CSS file for this file.
import "./index.css";

//Attach and render App to root in main index.html
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);