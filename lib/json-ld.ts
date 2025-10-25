import { WEBSITE_URL } from "@/app/seo";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface JobPostingData {
  title: string;
  description: string;
  location?: string;
  employmentType?: string;
  datePosted?: string;
  validThrough?: string;
  baseSalary?: {
    min: number;
    max: number;
    currency: string;
  };
}

export function generateJobPostingSchema(data: JobPostingData) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: data.title,
    description: data.description,
    hiringOrganization: {
      "@type": "Organization",
      name: "FreeMatch",
      sameAs: WEBSITE_URL,
      logo: `${WEBSITE_URL}/images/logo/logo-techins8-dark.webp`,
    },
    datePosted: data.datePosted || new Date().toISOString(),
    validThrough: data.validThrough || new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
    employmentType: data.employmentType || "FULL_TIME",
    jobLocationType: data.location === "remote" ? "TELECOMMUTE" : undefined,
  };

  if (data.location && data.location !== "remote") {
    schema.jobLocation = {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: data.location,
        addressCountry: "FR",
      },
    };
  }

  if (data.baseSalary) {
    schema.baseSalary = {
      "@type": "MonetaryAmount",
      currency: data.baseSalary.currency,
      value: {
        "@type": "QuantitativeValue",
        minValue: data.baseSalary.min,
        maxValue: data.baseSalary.max,
        unitText: "YEAR",
      },
    };
  }

  return schema;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FreeMatch",
    alternateName: "FreeMatch - Job Board Tech",
    url: WEBSITE_URL,
    logo: `${WEBSITE_URL}/images/logo/logo-techins8-dark.webp`,
    description:
      "Le premier job board boosté par l'IA pour les développeurs. Notre technologie analyse et vérifie chaque offre d'emploi pour vous faire gagner un temps précieux dans votre recherche.",
    sameAs: [
      "https://www.linkedin.com/company/freematch",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@freemat.ch",
      contactType: "Customer Service",
      areaServed: "FR",
      availableLanguage: ["French", "English"],
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FreeMatch",
    url: WEBSITE_URL,
    description:
      "Le premier job board boosté par l'IA pour les développeurs. Notre technologie analyse et vérifie chaque offre d'emploi pour vous faire gagner un temps précieux dans votre recherche.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${WEBSITE_URL}/job-offers?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
