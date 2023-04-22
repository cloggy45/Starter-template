import { DefaultLayout } from "@component/layout/defaultLayout";
import { SignUpWithLeftBackground } from "@component/authentication/SignUpWithLeftBackground";

export default function GetStartedPage() {
  return (
    <DefaultLayout showNavbar={false}>
      <SignUpWithLeftBackground />
    </DefaultLayout>
  );
}
