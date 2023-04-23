import { DashboardLayout } from "@component/layout/dashboardLayout";
import { LoggedInPlans } from "@component/pricing/LoggedInPlans";
import { SectionHeader } from "@component/section/SectionHeader";
import { PricingPlan } from "@component/pricing/PricingPlanFeatures";

type PlansPageProps = {
  plans: Required<PricingPlan>[];
};

export default function PlansPage({ plans }: PlansPageProps) {
  return (
    <div>
      <SectionHeader header={"Plans"} />
      <LoggedInPlans pricingPlans={plans} />
    </div>
  );
}

PlansPage.getLayout = function getLayout(page: JSX.Element) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export { getStaticProps } from "@lib/getPricingPlans";
