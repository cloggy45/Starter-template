import { DashboardLayout } from "@component/layout/dashboardLayout";
import { LoggedInPlans } from "@component/pricing/LoggedInPlans";
import { SectionHeader } from "@component/section/SectionHeader";
import { PricingPlan } from "@component/pricing/PricingPlanFeatures";
import { useSession } from "next-auth/react";

type PlansPageProps = {
  plans: Required<PricingPlan>[];
};

export default function PlansPage({ plans }: PlansPageProps) {
  const { status } = useSession();

  return status === "authenticated" ? (
    <div>
      <SectionHeader header={"Plans"} />
      <LoggedInPlans pricingPlans={plans} />
    </div>
  ) : null;
}

PlansPage.getLayout = function getLayout(page: JSX.Element) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export { getStaticProps } from "@lib/getPricingPlans";
