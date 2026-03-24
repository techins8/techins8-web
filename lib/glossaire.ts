import { z } from "zod";
import rawGlossaire from "@/data/glossaire.json";

const GlossaireTermSchema = z.object({
  slug: z.string(),
  term: z.string(),
  shortDef: z.string(),
  longDef: z.string(),
  relatedTerms: z.array(z.string()),
  relatedPages: z.array(z.object({ label: z.string(), href: z.string() })),
  category: z.enum(["statut", "contrat", "tech", "marché", "pratique"]),
});

export type GlossaireTerm = z.infer<typeof GlossaireTermSchema>;

export const GLOSSAIRE: GlossaireTerm[] = z.array(GlossaireTermSchema).parse(rawGlossaire);

export function getTermBySlug(slug: string): GlossaireTerm | undefined {
  return GLOSSAIRE.find((term) => term.slug === slug);
}

export function getRelatedTerms(term: GlossaireTerm): GlossaireTerm[] {
  return term.relatedTerms.map((slug) => getTermBySlug(slug)).filter((t) => t !== undefined);
}

export const CATEGORIES = {
  statut: "Statut & Structure",
  contrat: "Conditions de travail",
  tech: "Technologies",
  marché: "Marché & Tarifs",
  pratique: "Pratiques & Méthodologie",
} as const;
