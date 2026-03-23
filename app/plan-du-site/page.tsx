import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { SEO_DATA, WEBSITE_URL } from "@/app/seo";
import { GLOSSAIRE } from "@/lib/glossaire";
import { generateBreadcrumbSchema } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Plan du site | FreeMatch",
  description: "Retrouvez toutes les pages de FreeMatch organisées par section.",
};

interface SitemapSection {
  title: string;
  links: { label: string; href: string }[];
}

const mainPages: SitemapSection = {
  title: "Pages principales",
  links: [
    { label: "Accueil", href: "/" },
    { label: "Offres d'emploi", href: "/job-offers" },
    { label: "Blog", href: "/blog" },
    { label: "À propos", href: "/about" },
  ],
};

const resources: SitemapSection = {
  title: "Ressources",
  links: [
    { label: "Partenariats", href: "/partnerships" },
    { label: "Webinaire", href: "/webinar" },
    { label: "Glossaire", href: "/glossaire" },
  ],
};

const legalPages: SitemapSection = {
  title: "Informations légales",
  links: [
    { label: "Mentions légales", href: "/legal" },
    { label: "CGV", href: "/cgv" },
  ],
};

export default function SitemapPage() {
  const developerPages = SEO_DATA.map((entry) => ({
    label: entry.name,
    href: entry.path,
  }));

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", url: WEBSITE_URL },
    { name: "Plan du site", url: `${WEBSITE_URL}/plan-du-site` },
  ]);

  return (
    <>
      <Script
        id="plan-du-site-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg shadow-sm p-8">
            <header className="mb-12">
              <h1 className="text-4xl font-bold text-title mb-4">Plan du site</h1>
              <p className="text-muted-foreground">
                Retrouvez toutes les pages de FreeMatch organisées par section.
              </p>
            </header>

            <div className="space-y-12">
              {/* Pages principales */}
              <section>
                <h2 className="text-2xl font-semibold text-title mb-6">{mainPages.title}</h2>
                <ul className="space-y-3">
                  {mainPages.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-accent-foreground hover:text-title transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Ressources */}
              <section>
                <h2 className="text-2xl font-semibold text-title mb-6">{resources.title}</h2>
                <ul className="space-y-3">
                  {resources.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-accent-foreground hover:text-title transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Glossaire */}
              <section>
                <h2 className="text-2xl font-semibold text-title mb-6">Glossaire</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {GLOSSAIRE.map((term) => (
                    <Link
                      key={term.slug}
                      href={`/glossaire/${term.slug}`}
                      className="text-accent-foreground hover:text-title transition-colors"
                    >
                      {term.term}
                    </Link>
                  ))}
                </div>
              </section>

              {/* Développeurs par spécialité */}
              <section>
                <h2 className="text-2xl font-semibold text-title mb-6">
                  Développeurs par spécialité
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {developerPages.map((link, index) => (
                    <div key={index}>
                      <Link
                        href={link.href}
                        className="text-accent-foreground hover:text-title transition-colors"
                      >
                        {link.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </section>

              {/* Informations légales */}
              <section>
                <h2 className="text-2xl font-semibold text-title mb-6">{legalPages.title}</h2>
                <ul className="space-y-3">
                  {legalPages.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-accent-foreground hover:text-title transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Sitemap XML */}
              <section className="border-t border-bg-title pt-8">
                <h2 className="text-2xl font-semibold text-title mb-6">Sitemap XML</h2>
                <p className="text-muted-foreground mb-4">
                  Accédez au sitemap XML pour les moteurs de recherche
                </p>
                <Link
                  href="/sitemap.xml"
                  className="text-accent-foreground hover:text-title transition-colors font-medium"
                >
                  Sitemap XML
                </Link>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
