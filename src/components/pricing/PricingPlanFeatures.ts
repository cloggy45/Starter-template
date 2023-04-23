/**
 * Ensure the pricing plan names match your Stripe product names.
 */
const PricingPlan = {
  BASIC: "Basic plan",
  STARTUP: "Startup plan",
  ENTERPRISE: "Enterprise plan",
};

export type PricingPlan = {
  id: string;
  name: string;
  price: number | null;
  description?: string;
  currency: string;
  position?: number;
  isMostPopular?: boolean;
  features?: string[];
};

export const PricingFeatures = new Map<
  string,
  Pick<PricingPlan, "isMostPopular" | "features" | "description" | "position">
>();

PricingFeatures.set(PricingPlan.BASIC, {
  position: 0,
  isMostPopular: false,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  features: [
    "Curabitur faucibus",
    "massa ut pretium maximus",
    "Sed posuere nisi",
    "Pellentesque eu nibh et neque",
    "Suspendisse a leo",
    "Praesent quis venenatis ipsum",
    "Duis non diam vel tortor",
  ],
});

PricingFeatures.set(PricingPlan.STARTUP, {
  position: 1,
  isMostPopular: true,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  features: [
    "Curabitur faucibus",
    "massa ut pretium maximus",
    "Sed posuere nisi",
    "Pellentesque eu nibh et neque",
    "Suspendisse a leo",
    "Praesent quis venenatis ipsum",
    "Duis non diam vel tortor",
  ],
});

PricingFeatures.set(PricingPlan.ENTERPRISE, {
  position: 2,
  isMostPopular: false,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  features: [
    "Curabitur faucibus",
    "massa ut pretium maximus",
    "Sed posuere nisi",
    "Pellentesque eu nibh et neque",
    "Suspendisse a leo",
    "Praesent quis venenatis ipsum",
    "Duis non diam vel tortor",
  ],
});
