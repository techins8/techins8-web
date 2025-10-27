"use client";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
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
        type="button"
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

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById("faq-schema");
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [faqSchema]);

  return (
    <section className="w-full py-24 px-4 bg-popover">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bold text-center text-4xl text-title !leading-tight max-w-[550px] mx-auto mb-4">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[950px] mx-auto">
          <div className="lg:col-span-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.id} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFaq;
