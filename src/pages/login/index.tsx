import { DefaultLayout } from "@component/layout/defaultLayout";
import { Login } from "@component/authentication/Login";

export default function LoginPage() {
  return (
    <DefaultLayout>
      <Login />
    </DefaultLayout>
  );
}
