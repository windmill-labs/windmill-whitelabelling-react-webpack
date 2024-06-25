import { ResourceEditor as CResourceEditor } from "@windmill-labs/windmill-react-sdk";
import { useState } from "react";

export default function ResourceEditor({ path }) {
  const [resource, setResource] = useState({});
  const [createResource, setCreateResource] = useState(true);
  const [resource_type, setResourceType] = useState("postgresql");
  function createResourceProps(createResource, resource_type, path) {
    if (createResource) {
      return {
        resource_type: resource_type,
        newResource: true,
      };
    } else {
      return {
        path,
        newResource: false,
      };
    }
  }
  return (
    <>
      <div class="flex gap-4 w-full items-baseline">
        <div className="w-[200px]">
          <label>Create/Update</label>
          <select
            value={createResource}
            onChange={(e) => setCreateResource(e.target.value == "true")}
          >
            <option value={true}>Create Resource</option>
            <option value={false}>Update Resource</option>
          </select>
        </div>
        <div>
          <label>Resource Type</label>
          <input
            value={resource_type}
            onChange={(e) => setResourceType(e.target.value)}
            disabled={!createResource}
          />
        </div>
      </div>
      <div className="h-screen grid grid-cols-3">
        <div
          key={path + createResource.toString() + resource_type}
          className="col-span-2 h-full"
        >
          <CResourceEditor
            key={path + createResource.toString() + resource_type}
            {...createResourceProps(createResource, resource_type, path)}
            hidePath={true}
            onChange={(e) => {
              console.log(e);
              setResource(e);
            }}
          ></CResourceEditor>
        </div>
        <div>
          <h1>Resource</h1>
          <pre>{JSON.stringify(resource, null, 2)}</pre>
        </div>
      </div>
    </>
  );
}
