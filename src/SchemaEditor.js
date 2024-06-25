import { SchemaEditor as CSchemaEditor } from "@windmill-labs/windmill-react-sdk";

export default function SchemaEditor() {
  const schema = {
    type: "object",
    properties: {
      foo: {
        type: "string",
      },
    },
  };
  return (
    <>
      <div className="h-full">
        <CSchemaEditor
          schema={schema}
          // onChange={(s) => console.log(JSON.stringify(s, null, 2))}
          onChange={(e) => {
            console.log("onChange", schema);
          }}
        ></CSchemaEditor>
      </div>
    </>
  );
}
