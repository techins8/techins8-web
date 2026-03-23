import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { CATEGORIES, GLOSSAIRE } from "@/lib/glossaire";
import { DEFAULT_IMAGE, WEBSITE_URL } from "../seo";

export const metadata: Metadata = {
  title: "Glossaire Freelance Dev | FreeMatch",
  description:
    "Glossaire complet des termes essentiels pour les développeurs freelance : TJM, portage salarial, DevOps, stack technique, et bien d'autres définitions pour réussir votre carrière.",
  keywords: [
    "glossaire développeur",
    "TJM",
    "freelance informatique",
    "portage salarial",
    "termes technique",
  ],
  openGraph: {
    title: "Glossaire Freelance Dev | FreeMatch",
    description: "Glossaire complet des termes essentiels pour les développeurs freelance.",
    url: `${WEBSITE_URL}/glossaire`,
    type: "website",
    images: [
      {
        url: DEFAULT_IMAGE,
        width: 1200,
        height: 630,
        alt: "Glossaire FreeMatch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glossaire Freelance Dev | FreeMatch",
    description: "Glossaire complet des termes essentiels pour les développeurs freelance.",
  },
};

export default function GlossairePage() {
  const groupedTerms = Object.entries(CATEGORIES).reduce(
    (acc, [key, label]) => {
      const categoryKey = key as keyof typeof CATEGORIES;
      acc[categoryKey] = {
        label,
        terms: GLOSSAIRE.filter((t) => t.category === categoryKey),
      };
      return acc;
    },
    {} as Record<keyof typeof CATEGORIES, { label: string; terms: typeof GLOSSAIRE }>,
  );

  return (
    <>
      <Script
        id="glossaire-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Glossaire Freelance Dev",
            description: "Glossaire complet des termes essentiels pour les développeurs freelance",
            url: `${WEBSITE_URL}/glossaire`,
            mainEntity: {
              "@type": "DefinedTermSet",
              hasDefinedTerm: GLOSSAIRE.map((term) => ({
                "@type": "DefinedTerm",
                name: term.term,
                description: term.shortDef,
                url: `${WEBSITE_URL}/glossaire/${term.slug}`,
              })),
            },
          }),
        }}
      />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="mb-12">
            <h1 className="mb-4 text-4xl font-bold text-title sm:text-5xl">
              Glossaire Freelance Dev
            </h1>
            <p className="text-lg text-muted-foreground">
              Découvrez les termes essentiels pour réussir votre carrière en tant que développeur
              freelance. De la gestion des missions aux technologies modernes, trouvez les
              définitions dont vous avez besoin.
            </p>
          </div>

          {Object.entries(groupedTerms).map(([categoryKey, { label, terms }]) => (
            <section key={categoryKey} className="mb-12">
              <h2 className="mb-6 text-2xl font-semibold text-title">{label}</h2>

              <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
                {terms.map((term) => (
                  <Link
                    key={term.slug}
                    href={`/glossaire/${term.slug}`}
                    className="group rounded-lg border border-muted bg-card p-5 transition-all hover:border-accent hover:bg-card hover:shadow-md"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-title group-hover:text-accent-foreground">
                      {term.term}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{term.shortDef}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}

          <section className="mt-16 rounded-lg border border-muted bg-card p-8">
            <h2 className="mb-4 text-xl font-semibold text-title">
              Vous cherchez un terme spécifique ?
            </h2>
            <p className="text-muted-foreground">
              Ce glossaire contient {GLOSSAIRE.length} définitions pour vous aider à naviguer le
              monde du développement freelance. Chaque terme est détaillé avec des explications
              pratiques et des liens vers les offres correspondantes sur FreeMatch.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
