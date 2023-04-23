import { LoggedOutPlans } from "@component/pricing/LoggedOutPlans";
import { DefaultLayout } from "@component/layout/defaultLayout";
import { PricingPlan } from "@component/pricing/PricingPlanFeatures";

type PricingPageProps = {
  plans: Required<PricingPlan>[];
};

export default function PricingPage({ plans }: PricingPageProps) {
  return (
    <DefaultLayout>
      <LoggedOutPlans pricingPlans={plans} />
    </DefaultLayout>
  );
}

export { getStaticProps } from "@lib/getPricingPlans";
