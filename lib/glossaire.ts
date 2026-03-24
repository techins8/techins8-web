import rawGlossaire from "@/data/glossaire.json";

export type GlossaireTerm = {
  slug: string;
  term: string;
  shortDef: string;
  longDef: string;
  relatedTerms: string[];
  relatedPages: { label: string; href: string }[];
  category: "statut" | "contrat" | "tech" | "marché" | "pratique";
};

export const GLOSSAIRE: GlossaireTerm[] = rawGlossaire as GlossaireTerm[];

export function getTermBySlug(slug: string): GlossaireTerm | undefined {
  return GLOSSAIRE.find((term) => term.slug === slug);
}

export function getRelatedTerms(term: GlossaireTerm): GlossaireTerm[] {
  return term.relatedTerms
    .map((slug) => getTermBySlug(slug))
    .filter((t) => t !== undefined) as GlossaireTerm[];
}

export const CATEGORIES = {
  statut: "Statut & Structure",
  contrat: "Conditions de travail",
  tech: "Technologies",
  marché: "Marché & Tarifs",
  pratique: "Pratiques & Méthodologie",
} as const;
