// app/developpeurs/[...slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import HomePage from "../../(home)/page";
import {
  DEFAULT_IMAGE,
  getSeoDataFromSlug,
  SEO_DATA,
  WEBSITE_URL,
} from "../../seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DeveloperProfile } from "@/components/SEOContent/DeveloperProfile";
import { RelatedLinks } from "@/components/SEOContent/RelatedLinks";
import {
  generateBreadcrumbSchema,
  generateJobPostingSchema,
} from "@/lib/json-ld";
import {
  getRelatedLinks,
  getCityFromSlug,
  getProfileFromSlug,
} from "@/lib/seo-helpers";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;

    const seoData = getSeoDataFromSlug({
      type: "developpeurs",
      slug: slug === "%2Fdeveloppeurs" ? "" : slug,
    });

    if (!seoData) {
      console.log("No SEO data found for path:", { slug });
      return {};
    }

    return {
      title: seoData.title,
      description: seoData.description,
      keywords: seoData.metaKeywords,
      openGraph: {
        title: seoData.title,
        description: seoData.description,
        url: `${WEBSITE_URL}${seoData.path}`,
        siteName: "FreeMatch",
        type: "website",
        images: [
          {
            url: DEFAULT_IMAGE,
            width: 1200,
            height: 630,
            alt: seoData.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        site: "@freematch",
        creator: "@freematch",
        title: seoData.title,
        description: seoData.description,
      },
      alternates: {
        canonical: `${WEBSITE_URL}${seoData.path}`,
      },
    };
  } catch (error) {
    console.error("Error in generateMetadata:", error);
    return {};
  }
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;

    const seoData = getSeoDataFromSlug({
      type: "developpeurs",
      slug: slug === "%2Fdeveloppeurs" ? "" : slug,
    });

    if (!seoData) {
      console.log("No SEO data found for path:", { slug });
      notFound();
    }

    const city = getCityFromSlug(slug);
    const profile = getProfileFromSlug(slug);
    const relatedLinks = getRelatedLinks(seoData.path);

    const breadcrumbItems = [
      { name: "Développeurs", url: "/developpeurs/emploi" },
      { name: seoData.name, url: seoData.path },
    ];

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Accueil", url: WEBSITE_URL },
      ...breadcrumbItems,
    ]);

    const jobPostingSchema = generateJobPostingSchema({
      title: seoData.title,
      description: seoData.description,
      location: city || "France",
      employmentType: "FULL_TIME",
    });

    return (
      <>
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <Script
          id="job-posting-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jobPostingSchema),
          }}
        />
        <div className="container mx-auto px-4 py-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <HomePage seoData={seoData} />
        {profile && <DeveloperProfile profile={profile} city={city} />}
        {relatedLinks.length > 0 && (
          <RelatedLinks
            links={relatedLinks}
            title="Découvrez aussi ces profils de développeurs"
          />
        )}
      </>
    );
  } catch (error) {
    console.error("Error in DynamicPage:", error);
    notFound();
  }
}

export function generateStaticParams() {
  return SEO_DATA.filter((route) => route.path.startsWith("/developpeurs")).map(
    (route) => {
      const slug = route.path.replace("/developpeurs/", "").split("/");
      return { slug: slug.length > 0 ? slug : [] };
    },
  );
}
