// section-pricing.tsx
"use client";

import { useTranslations } from "next-intl";

const PricingSection = () => {
  const pricing = useTranslations("HomePage.Pricing");

  return (
    <section className="w-full py-12 sm:py-24 px-4 bg-popover">
      <div className="max-w-[1120px] mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-title font-bold mb-6">
            {pricing("free.title")}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8">
            {pricing("free.subtitle")}
          </p>
          <button
            onClick={() =>
              window.location.replace("https://dashboard.freemat.ch/signin")
            }
            className="py-3 px-8 rounded-md font-semibold text-base sm:text-lg bg-primary text-white hover:opacity-90 transition-opacity"
          >
            {pricing("free.cta")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
