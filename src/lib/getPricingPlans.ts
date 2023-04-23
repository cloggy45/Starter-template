import { stripe } from "@server/stripe/client";
import {
  PricingFeatures,
  PricingPlan,
} from "@component/pricing/PricingPlanFeatures";

type PricingPageProps = {
  props: {
    plans: PricingPlan[];
  };
};

/**
 * Get Stripe product prices at build time
 */
export async function getStaticProps(): Promise<PricingPageProps> {
  const { data: prices } = await stripe.prices.list({ active: true });

  const productPromises = prices.map(async (price) => {
    const product = await stripe.products.retrieve(price.product.toString());
    const features = PricingFeatures.get(product.name);
    return {
      id: price.id,
      name: product.name,
      price: price.unit_amount,
      currency: price.currency,
      ...features,
    };
  });

  const plans = await Promise.all(productPromises);

  const filteredAndSortedPlans = plans
    .filter((p) => PricingFeatures.has(p.name))
    .sort((a, b) => {
      // @ts-ignore
      return a.position - b.position;
    });

  return {
    props: {
      plans: filteredAndSortedPlans,
    },
  };
}
