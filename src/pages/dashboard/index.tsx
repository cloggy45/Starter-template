import { DashboardLayout } from "@component/layout/dashboardLayout";
import { SectionHeader } from "@component/section/SectionHeader";
import { requireAuthRoute } from "@utils/requireAuthRoute";

export default function DashboardPage() {
  return (
    <>
      <SectionHeader header={"Overview"} />
    </>
  );
}

DashboardPage.getLayout = function getLayout(page: JSX.Element) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export async function getServerSideProps(context: any) {
  return requireAuthRoute(context);
}
