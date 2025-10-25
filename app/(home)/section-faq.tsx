"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { generateFAQSchema } from "@/lib/json-ld";

type FAQItem = {
  id: string;
  hasHtml: boolean;
};

const faqs: FAQItem[] = [
  {
    id: "difference",
    hasHtml: true,
  },
  {
    id: "analysis",
    hasHtml: false,
  },
  {
    id: "sources",
    hasHtml: false,
  },
  {
    id: "tjm",
    hasHtml: false,
  },
  {
    id: "linkedin",
    hasHtml: true,
  },
  {
    id: "cancel",
    hasHtml: false,
  },
  {
    id: "updates",
    hasHtml: false,
  },
];

const FAQItem = ({ id, hasHtml }: FAQItem) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("HomePage.FAQ.questions");

  const renderAnswer = () => {
    if (!hasHtml) {
      return t(`${id}.answer`);
    }

    if (id === "difference") {
      return (
        <div>
          <p>{t(`${id}.intro`)}</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>{t(`${id}.points.0`)}</li>
            <li>{t(`${id}.points.1`)}</li>
          </ul>
        </div>
      );
    }

    if (id === "linkedin") {
      return (
        <div>
          <p>{t(`${id}.part1`)}</p>
          <p className="mt-2">{t(`${id}.part2`)}</p>
          <p className="mt-2">{t(`${id}.part3`)}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 px-10 flex justify-between items-center text-left gap-4"
      >
        <span className="text-lg font-semibold text-title">{t(`${id}.question`)}</span>
        <ChevronDown
          className={`h-8 w-8 text-primary flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="pl-10 pr-24 pb-6 text-muted-foreground leading-relaxed">
          {renderAnswer()}
        </div>
      </div>
    </div>
  );
};

const DiscordCard = () => {
  const t = useTranslations("HomePage.FAQ.discord");

  return (
    <div className="bg-muted rounded-lg px-14 py-12 sm:px-16 sm:py-8 text-center">
      <div className="mx-auto mb-8 flex items-center justify-center">
        <Image src="/images/logo/discord.svg" alt="Discord" width={104} height={104} />
      </div>
      <h3 className="text-xl font-medium mb-8 text-primary-foreground">{t("title")}</h3>
      <p className="mb-8 text-primary-foreground">{t("subtitle")}</p>
      <Link
        href="https://discord.gg/your-invite-link"
        target="_blank"
        className="inline-block bg-white text-title font-semibold px-6 py-2 rounded-md hover:bg-gray-50 transition-colors"
      >
        {t("button")}
      </Link>
    </div>
  );
};

const SectionFaq = () => {
  const t = useTranslations("HomePage.FAQ");

  const faqItems = faqs.map((faq) => {
    const question = t(`questions.${faq.id}.question`);
    let answer = "";

    if (!faq.hasHtml) {
      answer = t(`questions.${faq.id}.answer`);
    } else if (faq.id === "difference") {
      answer = `${t(`questions.${faq.id}.intro`)} ${t(`questions.${faq.id}.points.0`)} ${t(`questions.${faq.id}.points.1`)}`;
    } else if (faq.id === "linkedin") {
      answer = `${t(`questions.${faq.id}.part1`)} ${t(`questions.${faq.id}.part2`)} ${t(`questions.${faq.id}.part3`)}`;
    }

    return { question, answer };
  });

  const faqSchema = generateFAQSchema(faqItems);

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <section className="w-full py-24 px-4 bg-popover">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold text-center text-4xl text-title !leading-tight max-w-[550px] mx-auto mb-4">
              {t("title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {faqs.map((faq) => (
                <FAQItem key={faq.id} {...faq} />
              ))}
            </div>

            <div className="lg:col-span-1">
              <DiscordCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFaq;
