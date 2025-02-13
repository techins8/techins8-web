// section-pricing.tsx
"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { env } from "@/lib/env";


const PricingSection = () => {
  const pricing = useTranslations("HomePage.Pricing");

  const handlePricingClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = `${env.NEXT_PUBLIC_DASHBOARD_URL}/signin?plan=premium-mensuel`;
    }
  };

  return (
    <section className="w-full py-24 px-4 bg-popover">
      <div className="max-w-[1120px] mx-auto">
        <div className="flex flex-col items-center justify-center text-center text-muted mb-2">
          <h2 className="text-3xl md:text-4xl text-title font-bold max-w-[350px] sm:max-w-[650px] mb-20">
            {pricing("title.prefix")}
            <span className="text-primary">{pricing("title.highlight")}</span>
            {pricing("title.suffix")}
          </h2>
          <Card className="overflow-hidden bg-white text-title scale-110 border-primary border-2 shadow-lg mb-12">
            <div className="px-14 py-12 sm:px-10">
              <h3 className="text-2xl font-bold mb-8">
                {pricing("card.title").toUpperCase()} <span className="text-primary underline">{pricing("card.highlight").toUpperCase()}</span>
              </h3>
              <ul className="space-y-4 text-muted-foreground mb-8">
                {pricing.raw("card.avantage").map((avantage: string, index: number) => (
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
                onClick={handlePricingClick}
                className="w-full py-2 px-4 rounded-md mb-2 font-semibold text-sm sm:text-base bg-primary text-white"
              >
                {pricing("card.cta")}
              </button>
            </div>
          </Card>
          <p className="text-sm sm:text-base mt-4">
            {pricing("info-pricing")}
          </p>
          <p className="text-sm sm:text-base mt-2">
            {pricing("info-supply")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
