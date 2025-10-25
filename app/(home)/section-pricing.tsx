// section-pricing.tsx
"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";

const PricingSection = () => {
  const pricing = useTranslations("HomePage.Pricing");

  return (
    <section className="w-full py-12 sm:py-24 px-4 bg-popover">
      <div className="max-w-[1120px] mx-auto">
        <div className="flex flex-col items-center justify-center text-center text-muted mb-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-title font-bold max-w-[350px] sm:max-w-[650px] mb-10">
            {pricing("title.prefix")}
            <span className="text-primary">{pricing("title.highlight")}</span>
            {pricing("title.suffix")}
          </h2>
          <Card className="overflow-hidden bg-white text-title scale-110 border-primary border-2 shadow-lg mb-6">
            <div className="px-6 sm:px-10 py-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">
                {pricing("card.title").toUpperCase()}{" "}
                <span className="text-primary underline">
                  {pricing("card.highlight").toUpperCase()}
                </span>
              </h3>
              <ul className="space-y-3 text-muted-foreground mb-6">
                {pricing
                  .raw("card.avantage")
                  .map((avantage: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <Image
                        src="/images/icons/pricing-dark-ok.svg"
                        alt={"Check"}
                        width={21}
                        height={21}
                        className="mr-2"
                      />
                      {avantage}
                    </li>
                  ))}
              </ul>
              <button
                onClick={() =>
                  window.location.replace(
                    "https://dashboard.freematch.com/signin?plan=free-trial",
                  )
                }
                className="w-full py-2 px-4 rounded-md mb-2 font-semibold text-sm sm:text-base bg-primary text-white"
              >
                {pricing("card.cta")}
              </button>
            </div>
          </Card>
          <p className="text-xs sm:text-sm mt-2">{pricing("info-pricing")}</p>
          <p className="text-xs sm:text-sm mt-1">{pricing("info-supply")}</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
