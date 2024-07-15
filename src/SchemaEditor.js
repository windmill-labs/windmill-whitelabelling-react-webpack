import { SchemaEditor as CSchemaEditor } from "@windmill-labs/windmill-react-sdk";
import { useState } from "react";

export default function SchemaEditor() {
  const schema = {
    type: "object",
    properties: {
      foo: {
        type: "string",
      },
    },
  };

  const [schemaToSave, setSchema] = useState(schema);

  return (
    <>
      <div className="grid grid-cols-2">
        <div className="h-full">
          <CSchemaEditor
            schema={schemaToSave}
            // onChange={(s) => console.log(JSON.stringify(s, null, 2))}
            onChange={(newSchema) => {
              setSchema(structuredClone(newSchema));
              console.log("onChange", schema);
            }}
          ></CSchemaEditor>
        </div>
        <div>
          <h1>Schema</h1>
          <pre className="text-xs">{JSON.stringify(schemaToSave, null, 2)}</pre>
        </div>
      </div>
    </>
  );
}
