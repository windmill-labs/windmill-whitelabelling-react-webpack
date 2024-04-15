import "@windmill-labs/windmill-react-sdk/styles";
import "./style.css";
import React from "react";
//react 18
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";

import { OpenAPI as ComponentsOpenAPI } from "windmill-components/gen/core/OpenAPI";
import App from "./App";

async function initializeClients() {
  ComponentsOpenAPI.BASE = "./api";
  ComponentsOpenAPI.CREDENTIALS = "include";
  ComponentsOpenAPI.WITH_CREDENTIALS = true;
}

await initializeClients();

// react 18
// let react = ReactDOM.createRoot(document.getElementById("root"));
// react.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// react 17
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
