import { DefaultLayout } from "@component/layout/DefaultLayout";
import { SignUpWithLeftBackground } from "@component/authentication/SignUpWithLeftBackground";

export default function GetStarted() {
  return (
    <DefaultLayout hideNavBar={true}>
      <SignUpWithLeftBackground />
    </DefaultLayout>
  );
}
