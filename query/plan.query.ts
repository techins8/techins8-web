"use server";

import { env } from "@/lib/env";

export type PlanFeature = {
  key: string;
  included: boolean;
};

export type PlanTag = {
  key: string;
  color: string;
};

export type Plan = {
  key: string;
  price: string;
  originalPrice?: string;
  discount?: number;
  period: string;
  descriptionKey: string;
  features: PlanFeature[];
  ctaKey: string;
  link: string;
  tags: PlanTag[];
};

const PLANS_DATA = {
  discovery: {
    key: "discovery",
    price: "0",
    period: "€",
    descriptionKey: "discovery.description",
    features: [
      { key: "analytics", included: true },
      { key: "aiAnalysis", included: false },
      { key: "multiSource", included: false },
      { key: "dailyUpdates", included: false },
      { key: "priorityAccess", included: false },
    ],
    ctaKey: "cta.tryFree",
    link: `${env.NEXT_PUBLIC_DASHBOARD_URL}`,
    tags: [],
  },
  twoYears: {
    key: "twoYears",
    price: "3,10",
    originalPrice: "6,20",
    discount: 79,
    period: "€/mois",
    descriptionKey: "twoYears.description",
    features: [
      { key: "analytics", included: true },
      { key: "aiAnalysis", included: true },
      { key: "multiSource", included: true },
      { key: "dailyUpdates", included: true },
      { key: "priorityAccess", included: true },
    ],
    link: `${env.NEXT_PUBLIC_DASHBOARD_URL}/signin?plan=premium-2-ans`,
    ctaKey: "cta.tryFree",
    tags: [
      { key: "discount79", color: "bg-secondary" },
      { key: "bestOffer", color: "bg-primary" }
    ],
  },
  monthly: {
    key: "monthly",
    price: "9,90",
    period: "€/mois",
    descriptionKey: "monthly.description",
    features: [
      { key: "analytics", included: true },
      { key: "aiAnalysis", included: true },
      { key: "multiSource", included: true },
      { key: "dailyUpdates", included: true },
      { key: "priorityAccess", included: false },
    ],
    ctaKey: "cta.tryFree",
    link: `${env.NEXT_PUBLIC_DASHBOARD_URL}/signin?plan=premium-mensuel`,
    tags: [
      { key: "starter", color: "bg-secondary" },
      { key: "popular", color: "bg-primary" }
    ],
  },
  yearly: {
    key: "yearly",
    price: "4,10",
    originalPrice: "8,25",
    discount: 69,
    period: "€/mois",
    descriptionKey: "yearly.description",
    features: [
      { key: "analytics", included: true },
      { key: "aiAnalysis", included: true },
      { key: "multiSource", included: true },
      { key: "dailyUpdates", included: true },
      { key: "priorityAccess", included: false },
    ],
    ctaKey: "cta.tryFree",
    link: `${env.NEXT_PUBLIC_DASHBOARD_URL}/signin?plan=premium-annuel`,
    tags: [
      { key: "discount69", color: "bg-secondary" },
      { key: "popular", color: "bg-primary" },
    ],
  },
};

export const getPlans = async (isMonthly: boolean): Promise<Plan[]> => {
  return [
    PLANS_DATA.discovery,
    PLANS_DATA[isMonthly ? "monthly" : "twoYears"],
    isMonthly ? undefined : PLANS_DATA.yearly,
  ].filter(Boolean) as Plan[];
};