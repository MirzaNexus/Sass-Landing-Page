import Check from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="w-full flex flex-col gap-5 lg:pb-20 lg:pt-12 md:pt-10 pt-6 pb-16 md:px-14 ">
      <div className="flex flex-col gap-4 items-center justify-center py-5  ">
        <span className="tag lg:w-[16%] md:w-[30%] w-[40%]">
          Boost your productivity
        </span>
        <div className="px-2 md:px-0">
          <h1 className=" w-[510px] md:w-[570px] h-[140px] tracking-tighter md:text-[60px] text-[53px] text-center font-bold bg-[linear-gradient(to_bottom,#000_25%,#001354)] text-transparent bg-clip-text leading-[65px]">
            A more effective way to track progress
          </h1>
        </div>
        <p className="w-full md:w-[570px] md:h-[110px] h-[168px]  md:text-[24px] text-[26px] leading-tighter font-semibold text-center">
          Effortlessly turn your ideas into a fully functional, responsive,
          no-code SaaS website in just minutes with the set of free components
          for Framer.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col lg:items-end items-center justify-center gap-10 lg:py-5 py-10">
        {pricingTiers.map(
          ({ title, monthlyPrice, buttonText, features, popular }, index) => {
            return (
              <div
                key={index}
                className={twMerge(
                  "lg:w-[26%] md:w-[55%] w-[80%] lg:py-8 lg:px-6 px-10 py-14 flex flex-col items-start lg:gap-4 gap-6 rounded-3xl bg-white shadow-lg",
                  popular === true && "bg-black"
                )}
              >
                <span className="w-full inline-flex items-center justify-between">
                  <span className="text-slate-400">{title}</span>
                  <span
                    className={twMerge(
                      "hidden",
                      popular === true &&
                        "block b border-slate-700 text-sm px-5 py-1 rounded-lg bg-[linear-gradient(to_right,#DD7DFF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF)] text-transparent bg-clip-text"
                    )}
                  >
                    Most Popular
                  </span>
                </span>
                <span
                  className={twMerge(
                    "inline-flex items-baseline text-[36px] font-bold gap-2",
                    popular === true && "text-white"
                  )}
                >
                  {`$${monthlyPrice}`}
                  <span className="text-[16px] font-semibold text-slate-400">
                    /monthly
                  </span>
                </span>
                <button
                  className={twMerge(
                    "w-full text-white bg-black rounded-[10px] px-5 py-3 text-sm",
                    popular === true && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <div className="mt-3">
                  {features.map((value, id) => {
                    return (
                      <div key={id}>
                        <span className="inline-flex items-center gap-3">
                          <Check
                            className={twMerge(
                              "w-6 h-6",
                              popular === true && "text-white"
                            )}
                          />
                          <span
                            className={twMerge(
                              "lg:text-xs text-sm",
                              popular === true && "text-white"
                            )}
                          >
                            {value}
                          </span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Pricing;
