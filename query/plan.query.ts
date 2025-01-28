"use server";

import { env } from "@/lib/env";

export type Plan = {
  name: string;
  price: string;
  originalPrice?: string;
  discount?: number;
  period: string;
  description: string;
  features: { name: string; included: boolean }[];
  cta: string;
  link: string;
  tags: { text: string; color: string }[];
};

export const getPlans = async (isMonthly: boolean): Promise<Plan[]> => {
  /*const response = await fetch(`${env.NEXT_PUBLIC_DASHBOARD_URL}/api/plans`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // if (!response.ok) {
  //   throw new Error(`Failed to fetch plans`);
  // }

  // const plans = await response.json();

  console.log({ plans: plans.data });*/

  return [
    {
      name: "Offre découverte",
      price: "0",
      period: "€",
      description: "Testez gratuitement.",
      features: [
        { name: "Analytics marché IT & tech", included: true },
        { name: "Accès complet à l'analyse IA", included: false },
        { name: "Agrégation multi-sources", included: false },
        { name: "Mises à jour quotidiennes", included: false },
        {
          name: "Accès prioritaire aux nouvelles fonctionnalités",
          included: false,
        },
      ],
      cta: "ESSAYER GRATUITEMENT",
      link: `${env.NEXT_PUBLIC_DASHBOARD_URL}`,
      tags: [],
    },
    {
      name: "Abonnement 2 ans",
      price: "4,15",
      originalPrice: "8,30",
      discount: 79,
      period: "€/mois",
      description: "99€/2 ans (au lieu de 199€)",
      features: [
        { name: "Analytics marché IT & tech", included: true },
        { name: "Accès complet à l'analyse IA", included: true },
        { name: "Agrégation multi-sources", included: true },
        { name: "Mises à jour quotidiennes", included: true },
        {
          name: "Accès prioritaire aux nouvelles fonctionnalités",
          included: true,
        },
      ],
      link: `${env.NEXT_PUBLIC_DASHBOARD_URL}/signin?plan=premium-2-ans`,
      cta: "7 JOURS GRATUITS",
      tags: [
        { text: "-79% DE RÉDUCTION", color: "bg-secondary" },
        { text: "MEILLEURE OFFRE", color: "bg-primary" },
      ],
    },
    {
      name: isMonthly ? "Abonnement au mois" : "Abonnement à l'année",
      price: isMonthly ? "19,90" : "6,20",
      originalPrice: isMonthly ? undefined : "12,40",
      discount: isMonthly ? undefined : 69,
      period: "€/mois",
      description: isMonthly
        ? "Soit 19,90€ facturé tous les mois"
        : "74,50€/an (au lieu de 149€)",
      features: [
        { name: "Analytics marché IT & tech", included: true },
        { name: "Accès complet à l'analyse IA", included: true },
        { name: "Agrégation multi-sources", included: true },
        { name: "Mises à jour quotidiennes", included: true },
        {
          name: "Accès prioritaire aux nouvelles fonctionnalités",
          included: false,
        },
      ],
      cta: "7 JOURS GRATUITS",
      link: `${env.NEXT_PUBLIC_DASHBOARD_URL}/signin?plan=${
        isMonthly ? "premium-mensuel" : "premium-annuel"
      }`,
      tags: [
        { text: isMonthly ? "OFFRE STARTER" : "-69% DE RÉDUCTION", color: "bg-secondary" },
        { text: "OFFRE POPULAIRE", color: "bg-primary" },
      ],
    },
  ];
};
