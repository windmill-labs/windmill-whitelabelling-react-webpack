import { ScriptEditor as CScriptEditor } from "@windmill-labs/windmill-react-sdk";
import { useState } from "react";

export default function ScriptEditor() {
  const code = `def main(x: str):
    print("Hello, world!" + x)`;
  const [codeAndSchema, setCodeAndSchema] = useState({ code, schema: {} });
  const [lang, setLang] = useState("python3");
  return (
    <>
      <div>
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="python3">Python 3</option>
          <option value="bun">Bun</option>
          <option value="deno">Deno</option>
          <option value="go">Go</option>
          <option value="bash">Bash</option>
          <option value="powershell">Powershell</option>
          <option value="postgresql">PostgreSQL</option>
          <option value="mysql">MySQL</option>
          <option value="bigquery">BigQuery</option>
          <option value="snowflake">Snowflake</option>
          <option value="mssql">MSSQL</option>
          <option value="graphql">GraphQL</option>
          <option value="nativets">NativeTS</option>
          <option value="php">PHP</option>
        </select>
      </div>
      <div className="h-screen grid grid-cols-3">
        <div className="col-span-2 h-full">
          <CScriptEditor
            code={codeAndSchema.code}
            lang={lang}
            path="u/admin/foo"
            onChange={(code, schema) => {
              console.log("onChange", code, schema);
              setCodeAndSchema({ code, schema });
            }}
          />
        </div>
        <div>
          <h1>Code</h1>
          <pre>{codeAndSchema.code}</pre>

          <h1 className="mt-8">Schema</h1>
          <pre>{JSON.stringify(codeAndSchema.schema, null, 2)}</pre>
        </div>
      </div>
    </>
  );
}
