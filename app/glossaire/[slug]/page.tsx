import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { CATEGORIES, GLOSSAIRE, getRelatedTerms, getTermBySlug } from "@/lib/glossaire";
import { DEFAULT_IMAGE, WEBSITE_URL } from "../../seo";

export async function generateStaticParams() {
  return GLOSSAIRE.map((term) => ({
    slug: term.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const term = getTermBySlug(slug);

  if (!term) {
    return {};
  }

  const url = `${WEBSITE_URL}/glossaire/${term.slug}`;

  return {
    title: `${term.term} | Glossaire FreeMatch`,
    description: term.shortDef,
    keywords: [term.term, "glossaire", "développeur", "freelance"],
    openGraph: {
      title: `${term.term} | Glossaire FreeMatch`,
      description: term.shortDef,
      url,
      type: "article",
      images: [
        {
          url: DEFAULT_IMAGE,
          width: 1200,
          height: 630,
          alt: term.term,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${term.term} | Glossaire FreeMatch`,
      description: term.shortDef,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function GlossaireTermPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const term = getTermBySlug(slug);

  if (!term) {
    notFound();
  }

  const relatedTerms = getRelatedTerms(term);
  const categoryLabel = CATEGORIES[term.category];

  return (
    <>
      <Script
        id={`term-schema-${term.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            name: term.term,
            description: term.longDef,
            url: `${WEBSITE_URL}/glossaire/${term.slug}`,
            inDefinedTermSet: {
              "@type": "DefinedTermSet",
              name: "Glossaire Freelance Dev",
              url: `${WEBSITE_URL}/glossaire`,
            },
          }),
        }}
      />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-accent-foreground">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/glossaire" className="hover:text-accent-foreground">
              Glossaire
            </Link>
            <span>/</span>
            <span className="text-title">{term.term}</span>
          </nav>

          <div className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-foreground">
            {categoryLabel}
          </div>

          <h1 className="mb-4 text-4xl font-bold text-title sm:text-5xl">{term.term}</h1>

          <p className="mb-8 text-lg text-muted-foreground">{term.shortDef}</p>

          <div className="prose prose-invert max-w-none space-y-6">
            {term.longDef.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="text-base leading-relaxed text-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          {term.relatedPages.length > 0 && (
            <section className="mt-12 rounded-lg border border-muted bg-card p-6">
              <h2 className="mb-4 text-xl font-semibold text-title">Pages associées</h2>
              <div className="flex flex-wrap gap-3">
                {term.relatedPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="inline-flex items-center gap-2 rounded-lg bg-accent/10 px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/20"
                  >
                    {page.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </section>
          )}

          {relatedTerms.length > 0 && (
            <section className="mt-12">
              <h2 className="mb-6 text-xl font-semibold text-title">Termes connexes</h2>
              <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
                {relatedTerms.map((relatedTerm) => (
                  <Link
                    key={relatedTerm.slug}
                    href={`/glossaire/${relatedTerm.slug}`}
                    className="group rounded-lg border border-muted bg-card p-5 transition-all hover:border-accent hover:shadow-md"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-title group-hover:text-accent-foreground">
                      {relatedTerm.term}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {relatedTerm.shortDef}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/glossaire"
              className="inline-flex items-center gap-2 text-accent-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-5 w-5" />
              Retour au glossaire
            </Link>

            <div className="flex gap-2">
              {GLOSSAIRE.findIndex((t) => t.slug === term.slug) > 0 && (
                <Link
                  href={`/glossaire/${GLOSSAIRE[GLOSSAIRE.findIndex((t) => t.slug === term.slug) - 1].slug}`}
                  className="rounded-lg border border-muted bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-background"
                >
                  ← Précédent
                </Link>
              )}

              {GLOSSAIRE.findIndex((t) => t.slug === term.slug) < GLOSSAIRE.length - 1 && (
                <Link
                  href={`/glossaire/${GLOSSAIRE[GLOSSAIRE.findIndex((t) => t.slug === term.slug) + 1].slug}`}
                  className="rounded-lg border border-muted bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-background"
                >
                  Suivant →
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
