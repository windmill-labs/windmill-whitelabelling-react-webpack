import "@windmill-labs/windmill-react-sdk/styles";
import "./style.css";
import React from "react";
// react 18
// import ReactDOM from "react-dom/client";
//react 17
import ReactDOM from "react-dom";
// react 19
// import { createRoot } from 'react-dom/client';
import { OpenAPI as ClientOpenAPI } from "windmill-client";
import { OpenAPI as ComponentsOpenAPI } from "@windmill-labs/windmill-react-sdk";
import App from "./App";

async function initializeClients() {
  ClientOpenAPI.BASE = "./api";
  ClientOpenAPI.CREDENTIALS = "include";
  ClientOpenAPI.WITH_CREDENTIALS = true;

  ComponentsOpenAPI.BASE = ClientOpenAPI.BASE;
  ComponentsOpenAPI.CREDENTIALS = ClientOpenAPI.CREDENTIALS;
  ComponentsOpenAPI.WITH_CREDENTIALS = ClientOpenAPI.WITH_CREDENTIALS;
}

await initializeClients();

// react 19
// const root = createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

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
