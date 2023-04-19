export function PricingTwoPanels() {
  const plans = [
    {
      name: "Startup",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 12,
      isMostPop: false,
      features: [
        "Curabitur faucibus",
        "massa ut pretium maximus",
        "Sed posuere nisi",
        "Pellentesque eu nibh et neque",
        "Suspendisse a leo",
        "Praesent quis venenatis ipsum",
        "Duis non diam vel tortor",
      ],
    },
    {
      name: "Enterprise",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 32,
      isMostPop: true,
      features: [
        "Curabitur faucibus",
        "massa ut pretium maximus",
        "Sed posuere nisi",
        "Pellentesque eu nibh et neque",
        "Suspendisse a leo",
        "Praesent quis venenatis ipsum",
        "Duis non diam vel tortor",
      ],
    },
  ];

  return (
    <section className="relative py-14">
      <div
        className="absolute top-0 h-[521px] w-full"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      ></div>
      <div className="mx-auto max-w-screen-xl text-gray-600 sm:px-4 md:px-8">
        <div className="relative mx-auto max-w-xl space-y-3 px-4 sm:px-0 sm:text-center">
          <h3 className="font-semibold text-indigo-600">Pricing</h3>
          <p className="text-3xl font-semibold text-gray-800 sm:text-4xl">
            Pay as you grow
          </p>
          <div className="max-w-xl">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              efficitur consequat nunc.
            </p>
          </div>
        </div>
        <div className="mt-16 justify-center sm:flex">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={`relative mt-6 flex flex-1 flex-col items-stretch sm:mt-0 sm:max-w-md sm:rounded-xl ${
                item.isMostPop ? "bg-white shadow-lg sm:border" : ""
              }`}
            >
              <div className="space-y-4 border-b p-4 py-8 md:p-8">
                <span className="font-medium text-indigo-600">{item.name}</span>
                <div className="text-3xl font-semibold text-gray-800">
                  ${item.price}{" "}
                  <span className="text-xl font-normal text-gray-600">/mo</span>
                </div>
                <p>{item.desc}</p>
                <button className="w-full rounded-lg bg-indigo-600 px-3 py-3 text-sm font-semibold text-white duration-150 hover:bg-indigo-500 active:bg-indigo-700">
                  Get Started
                </button>
              </div>
              <ul className="space-y-3 p-4 py-8 md:p-8">
                <li className="pb-2 font-medium text-gray-800">
                  <p>Features</p>
                </li>
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
