"use server";

import { env } from "@/lib/env";

export type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: { name: string; included: boolean }[];
  cta: string;
  link: string;
  tags: { text: string; color: string }[];
};

export const getPlans = async (isMonthly: boolean): Promise<Plan[]> => {
  // const response = await fetch(`${env.DASHBOARD_URL}/api/plans`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  // if (!response.ok) {
  //   throw new Error(`Failed to fetch plans`);
  // }

  // const plans = await response.json();

  // console.log({ plans: plans.data });

  return [
    {
      name: "Offre découverte",
      price: "0",
      period: "€",
      description: "Testez gratuitement.",
      features: [
        { name: "Fonctionnalités de base", included: true },
        { name: "Accès complet à l'analyse IA", included: false },
        { name: "Agrégation multi-sources", included: false },
        { name: "Mises à jour quotidiennes", included: false },
        {
          name: "Accès prioritaire aux nouvelles fonctionnalités",
          included: false,
        },
      ],
      cta: "ESSAYER GRATUITEMENT",
      link: `${env.DASHBOARD_URL}`,
      tags: [],
    },
    {
      name: "Abonnement à l'année",
      price: isMonthly ? "14,90" : "12,40",
      period: isMonthly ? "€/mois" : "€",
      description: isMonthly
        ? "Soit 14,90€ facturé tous les mois"
        : "Soit 149 € facturé à l'année.",
      features: [
        { name: "Fonctionnalités de base", included: true },
        { name: "Accès complet à l'analyse IA", included: true },
        { name: "Agrégation multi-sources", included: true },
        { name: "Mises à jour quotidiennes", included: true },
        {
          name: "Accès prioritaire aux nouvelles fonctionnalités",
          included: false,
        },
      ],
      cta: "COMMENCER MAINTENANT",
      link: `${env.DASHBOARD_URL}/signin?plan=${
        isMonthly ? "premium-mensuel" : "premium-annuel"
      }`,
      tags: [
        { text: "ÉCONOMISEZ 25%", color: "bg-secondary" },
        { text: "OFFRE POPULAIRE", color: "bg-primary" },
      ],
    },
    {
      name: "Abonnement 2 ans",
      price: "8,30",
      period: "€/mois",
      description: "Soit 199 € facturé tous les 2 ans.",
      features: [
        { name: "Fonctionnalités de base", included: true },
        { name: "Accès complet à l'analyse IA", included: true },
        { name: "Agrégation multi-sources", included: true },
        { name: "Mises à jour quotidiennes", included: true },
        {
          name: "Accès prioritaire aux nouvelles fonctionnalités",
          included: true,
        },
      ],
      link: `${env.DASHBOARD_URL}/signin?plan=premium-2-ans`,
      cta: "COMMENCER MAINTENANT",
      tags: [
        { text: "ÉCONOMISEZ 55%", color: "bg-secondary" },
        { text: "MEILLEURE OFFRE", color: "bg-primary" },
      ],
    },
  ];
};
