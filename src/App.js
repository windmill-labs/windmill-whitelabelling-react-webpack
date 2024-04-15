//foobar
import { useState } from "react";

import {
  AppViewer,
  FlowBuilder,
  switchWorkspace,
} from "@windmill-labs/windmill-react-sdk";

import {
  UserService,
  WorkspaceService,
  FlowService,
  AppService,
} from "windmill-client";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [workspace, setWorkspace] = useState("");

  const [componentType, setComponentType] = useState("flowbuilder");
  const [whoami, setWhoami] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [allWorkspaces, setAllworkspaces] = useState([]); // ...state variable to store the list of workspaces...

  const [allPaths, setAllPaths] = useState([]); // ...state variable to store the list of paths...
  const [path, setPath] = useState("");

  async function getPaths(typ, workspace) {
    if (typ === "flowbuilder") {
      let paths = await FlowService.listFlowPaths({
        workspace: workspace,
      });
      setAllPaths(paths);
    } else {
      let paths = (
        await AppService.listSearchApp({
          workspace: workspace,
        })
      ).map((a) => a.path);
      setAllPaths(paths);
    }
  }
  return (
    <>
      <div className="flex gap-4 text-sm p-2 items-center">
        <label>
          email:
          <input
            value={email} // ...force the input's value to match the state variable...
            onChange={(e) => setEmail(e.target.value)} // ... and update the state variable on any edits!
          />
        </label>
        <label>
          password:
          <input
            type="password"
            value={password} // ...force the input's value to match the state variable...
            onChange={(e) => setPassword(e.target.value)} // ... and update the state variable on any edits!
          />
        </label>
        <button
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
      </div>
      <div className="flex gap-4 pb-4 text-sm p-2">
        <label>
          <div className="w-full max-w-[600px]">
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
        <div className="w-full max-w-[150px]">
          component:
          <select
            value={componentType}
            onChange={async (e) => {
              setComponentType(e.target.value);
              await getPaths(e.target.value, workspace);
            }}
          >
            <option value="flowbuilder">Flow Builder</option>
            <option value="appviewer">App viewer</option>
          </select>
        </div>
        <label>
          <div className="w-full max-w-[600px]">
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
