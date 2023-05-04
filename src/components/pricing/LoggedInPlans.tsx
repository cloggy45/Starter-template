import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { api } from "@utils/api";
import { Route } from "@component/layout/defaultLayout";
import { PricingPlan } from "@component/pricing/PricingPlanFeatures";
import CurrencyDisplay from "@component/CurrencyDisplay";
import { Button } from "@component/buttons/Button";

type LoggedInPlansProps = {
  pricingPlans: Required<PricingPlan>[];
};

export function LoggedInPlans({ pricingPlans }: LoggedInPlansProps) {
  const { status } = useSession();
  const { push } = useRouter();

  const { mutateAsync: createCheckoutSession, isLoading } =
    api.stripe.createCheckoutSession.useMutation();

  async function handleUpgrade(priceId: string) {
    // TODO investigate redirect to checkout after logging in
    if (status === "authenticated") {
      const { checkoutUrl } = await createCheckoutSession({ priceId });
      if (checkoutUrl && status === "authenticated") {
        void push(checkoutUrl);
      }
    } else {
      void push(Route.SIGNUP);
    }
  }

  return (
    <section className="py-14">
      <div className="mx-auto max-w-screen-xl px-4 text-gray-600 md:px-8">
        <div className="relative mx-auto max-w-xl sm:text-center">
          <h3 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
            Pricing for all sizes
          </h3>
          <div className="mt-3 max-w-xl">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              efficitur consequat nunc.
            </p>
          </div>
        </div>
        <div className="mt-16 justify-center gap-6 space-y-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {pricingPlans.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-1 flex-col items-stretch rounded-xl border-2 p-8"
            >
              <div>
                <span className="font-medium text-indigo-600">{item.name}</span>
                <div className="mt-4 text-3xl font-semibold text-gray-800">
                  <CurrencyDisplay
                    value={item.price ?? 0}
                    currency={item.currency}
                  />
                  <span className="text-xl font-normal text-gray-600">/mo</span>
                </div>
              </div>
              <ul className="space-y-3 py-8">
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
              <div className="flex flex-1 items-end"></div>
              <Button
                isLoading={isLoading}
                handleClick={() => handleUpgrade(item.id)}
                label={"Get Started"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
