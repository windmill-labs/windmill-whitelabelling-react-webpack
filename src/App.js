//foobar
import { useState } from "react";

import {
  AppViewer,
  FlowBuilder,
  ScriptBuilder,
  switchWorkspace,
} from "@windmill-labs/windmill-react-sdk";

import {
  UserService,
  WorkspaceService,
  FlowService,
  AppService,
  ScriptService,
} from "windmill-client";

export default function App() {
  const [email, setEmail] = useState("whitelabel@windmill-test.com");
  const [password, setPassword] = useState("changeme");
  const [workspace, setWorkspace] = useState("");

  const [componentType, setComponentType] = useState("flowbuilder");
  const [whoami, setWhoami] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [allWorkspaces, setAllworkspaces] = useState([]); // ...state variable to store the list of workspaces...

  const [allPaths, setAllPaths] = useState([]); // ...state variable to store the list of paths...
  const [path, setPath] = useState("");

  async function getPaths(typ, workspace) {
    console.log("getPaths", typ, workspace);
    if (typ === "flowbuilder") {
      let paths = (
        await FlowService.listFlowPaths({
          workspace: workspace,
        })
      ).sort();
      setAllPaths(paths);
    } else if (typ === "appviewer") {
      let paths = (
        await AppService.listSearchApp({
          workspace: workspace,
        })
      )
        .map((a) => a.path)
        .sort();
      setAllPaths(paths);
    } else if (typ === "scriptbuilder") {
      let paths = (
        await ScriptService.listScriptPaths({
          workspace: workspace,
        })
      ).sort();
      setAllPaths(paths);
    }
  }
  return (
    <>
      <div className="flex gap-4 text-sm p-2 items-center w-full">
        <label className="w-[500px]">
          email:
          <input
            className="w-full"
            type="email"
            value={email} // ...force the input's value to match the state variable...
            onChange={(e) => setEmail(e.target.value)} // ... and update the state variable on any edits!
          />
        </label>
        <label className="w-[500px]">
          password:
          <input
            type="password"
            value={password} // ...force the input's value to match the state variable...
            onChange={(e) => setPassword(e.target.value)} // ... and update the state variable on any edits!
          />
        </label>
        <button
          autoFocus
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-8 mt-4"
          onClick={async () => {
            try {
              await UserService.login({
                requestBody: { email, password },
              });
              let whoami = await UserService.globalWhoami();
              const workspaces = await WorkspaceService.listWorkspaces();
              setAllworkspaces(workspaces.map((w) => w.name));
              setWhoami(whoami);
              setError(undefined);
            } catch (e) {
              setWhoami(undefined);
              setError(e);
            }
          }}
        >
          Login
        </button>
        <div className="text-xs whitespace-pre overflow-auto h-14">
          {whoami && JSON.stringify(whoami, null, 2)}
        </div>
        <div className="text-xs text-red-600">
          {error && error?.body ? error?.body?.toString() : error?.toString()}
        </div>
        <div className="text-xs">
          Example of using the Windmill SDK backed by app.windmill.dev to
          whitelabel Windmill's Flow Builder and App Viewer in a React app using
          the default create-react-app template. The sources are available{" "}
          <a href="https://github.com/windmill-labs/windmill-whitelabelling-react-webpack">
            here
          </a>
          {" ."}
          The account used has limits, so if no runs are available, contact us
          at sales@windmill.dev and we will provide you with another test
          account. The SDK is not open-source and requires a whitelabel license
          to install and use (private npm package).
        </div>
      </div>
      <div className="flex gap-4 pb-4 text-sm p-2">
        <label className="w-full max-w-[200px]">
          <div>
            workspace:
            <select
              className="w-full"
              disabled={!whoami}
              value={workspace}
              onChange={async (e) => {
                setPath("");
                setWorkspace(e.target.value);
                switchWorkspace(e.target.value);
                await getPaths(componentType, e.target.value);
              }}
            >
              <option value="">Select a workspace</option>
              {allWorkspaces.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
        </label>
        <div className="w-full max-w-[200px]">
          component:
          <select
            disabled={!workspace}
            value={componentType}
            onChange={async (e) => {
              setComponentType(e.target.value);
              await getPaths(e.target.value, workspace);
            }}
          >
            <option value="flowbuilder">Flow Builder</option>
            <option value="appviewer">App Viewer</option>
            <option value="scriptbuilder">Script Builder</option>
          </select>
        </div>
        <label className="w-full max-w-[700px]">
          <div className="w-full">
            path:
            <select
              className="w-full"
              disabled={!workspace}
              value={path}
              onChange={(e) => setPath(e.target.value)}
            >
              <option value="">Select a path</option>
              {allPaths.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
        </label>
      </div>

      <div className="p-2 h-full border embedded">
        {workspace ? (
          <>
            {componentType === "flowbuilder" && (
              <FlowBuilder
                onDeploy={async (path) => {
                  setPath(path);
                  await getPaths(componentType, workspace);
                }}
                onDetails={async (path) => {
                  console.log("details", path);
                }}
                onSaveDraftOnlyAtNewPath={async (path, selectedId) => {
                  setPath(path);
                  await getPaths(componentType, workspace);
                }}
                onSaveInitial={async (path) => {
                  setPath(path);
                  await getPaths(componentType, workspace);
                }}
                newFlow={path === ""}
                initialPath={path}
                key={path}
              />
            )}
            {componentType === "scriptbuilder" && (
              <ScriptBuilder
                onDeploy={async (hash) => {
                  let sc = await ScriptService.getScriptByHash({
                    workspace,
                    hash,
                  });
                  setPath(sc.path);
                  await getPaths(componentType, workspace);
                }}
                onDetails={async (path) => {
                  console.log("details", path);
                }}
                onSaveInitial={async (hash) => {
                  let sc = await ScriptService.getScriptByHash({
                    workspace,
                    hash,
                  });
                  setPath(sc.path);

                  await getPaths(componentType, workspace);
                }}
                initialPath={path}
                key={path}
              />
            )}
            {componentType === "appviewer" && (
              <>
                {path ? (
                  <AppViewer key={path} appPath={path} workspace={workspace} />
                ) : (
                  <p>No app loaded, select an app and click "Load"</p>
                )}
              </>
            )}
          </>
        ) : (
          <p>Login to load components</p>
        )}
        {/* <AppViewer /> */}
      </div>
    </>
  );
}
