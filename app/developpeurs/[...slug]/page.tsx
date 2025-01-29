// app/developpeurs/[...slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "../../(home)/page";
import {
  DEFAULT_IMAGE,
  getSeoDataFromSlug,
  SEO_DATA,
  WEBSITE_URL,
} from "../../seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    // Extract and wait for params
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
        siteName: "TechIns8",
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
        site: "@techins8",
        creator: "@techins8",
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

    return <HomePage seoData={seoData} />;
  } catch (error) {
    console.error("Error in DynamicPage:", error);
    notFound();
  }
}

export function generateStaticParams() {
  return SEO_DATA.filter((route) => route.path.startsWith("/developpeurs")).map(
    (route) => {
      const slug = route.path.replace("/developpeurs/", "").split("-");
      return { slug: slug.length > 0 ? slug : [] };
    }
  );
}
