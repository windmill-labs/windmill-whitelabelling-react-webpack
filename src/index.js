import "@windmill-labs/windmill-react-sdk/styles";
import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { WMFlowBuilder } from "@windmill-labs/windmill-react-sdk";

import { OpenAPI as ClientOpenAPI, UserService } from "windmill-client";
import { OpenAPI as ComponentsOpenAPI } from "windmill-components/gen/core/OpenAPI";

ClientOpenAPI.BASE = "/api";
ClientOpenAPI.CREDENTIALS = "include";
ClientOpenAPI.WITH_CREDENTIALS = true;
ComponentsOpenAPI.BASE = "/api";
ComponentsOpenAPI.CREDENTIALS = "include";
ComponentsOpenAPI.WITH_CREDENTIALS = true;

UserService.login({
  requestBody: { email: "admin@windmill.dev", password: "changeme" },
}).then(() => {
  let react = ReactDOM.createRoot(document.getElementById("root"));
  react.render(
    <React.StrictMode>
      <div className="p-2 border border-black embedded">
        <WMFlowBuilder
          workspace="admins"
          initialPath="u/user/example_path"
          user="user"
        />
      </div>
    </React.StrictMode>
  );
});
