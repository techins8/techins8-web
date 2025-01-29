// app/developpeurs/[...slug]/page.tsx
import { notFound } from "next/navigation";
import HomePage from "../../(home)/page";
import { SEO_DATA } from "../../seo";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function DynamicPage({ params }: PageProps) {
  try {
    // Wait for params
    const { slug } = await params;

    if (!slug) {
      notFound();
    }

    // Construct the path using "développeurs"
    const path = !slug.length
      ? "/developpeurs"
      : `/developpeurs/${slug.join("-")}`;

    const seoData = SEO_DATA.find((route) => route.path === path);

    if (!seoData) {
      console.log("No SEO data found for path:", path);
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
