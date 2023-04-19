import { DefaultLayout } from "@component/layout/DefaultLayout";
import { Login } from "@component/authentication/Login";

export default function GetStarted() {
  return (
    <DefaultLayout>
      <Login />
    </DefaultLayout>
  );
}
