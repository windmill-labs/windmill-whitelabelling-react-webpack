import { FlowBuilder } from "@windmill-labs/windmill-react-sdk";
import { UserService } from "windmill-client";

UserService.login({
  requestBody: { email: "admin@windmill.dev", password: "changeme" },
}).then(() => {
  console.log("Logged in as");
});
export default function App() {
  return (
    <div className="p-2 border border-black embedded">
      <FlowBuilder
        workspace="admins"
        initialPath="u/user/example_path"
        user="user"
      />
    </div>
  );
}
