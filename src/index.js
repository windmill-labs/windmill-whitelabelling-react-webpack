import "@windmill-labs/windmill-react-sdk/styles";
import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";

import { OpenAPI as ClientOpenAPI } from "windmill-client";
import { OpenAPI as ComponentsOpenAPI } from "windmill-components/gen/core/OpenAPI";
import App from "./App";

ClientOpenAPI.BASE = "/api";
ClientOpenAPI.CREDENTIALS = "include";
ClientOpenAPI.WITH_CREDENTIALS = true;
ComponentsOpenAPI.BASE = "/api";
ComponentsOpenAPI.CREDENTIALS = "include";
ComponentsOpenAPI.WITH_CREDENTIALS = true;

let react = ReactDOM.createRoot(document.getElementById("root"));
react.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
