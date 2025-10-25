"use client";

import Script from "next/script";
import { useTranslations } from "next-intl";

const SectionSocialProof = () => {
  const t = useTranslations("HomePage.SocialProof");

  return (
    <section className="w-full py-8 md:py-12 px-4 my-12 md:my-24" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bold text-center text-3xl sm:text-4xl text-title !leading-tight max-w-[550px] mx-auto mb-12 sm:mb-20">
          {t("title.part1")} <br />
          {t("title.part2")}
        </h2>

        <Script
          src="https://widget.senja.io/widget/459b0e23-11f6-48bf-934f-2d826e518b29/platform.js"
          strategy="lazyOnload"
        />
        <div
          className="senja-embed"
          data-id="459b0e23-11f6-48bf-934f-2d826e518b29"
          data-mode="shadow"
          data-lazyload="false"
          style={{ display: "block" }}
        />
      </div>
    </section>
  );
};

export default SectionSocialProof;
