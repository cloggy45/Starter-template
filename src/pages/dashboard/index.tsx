import { DefaultLayout } from "@component/layout/DefaultLayout";
import Sidebar from "@component/sidebar/Sidebar";

export default function PricingPage() {
  return (
    <DefaultLayout hideNavBar={true} hideFooter={true}>
      <Sidebar />
    </DefaultLayout>
  );
}
