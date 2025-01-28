// app/[...page]/layout.tsx
import { Metadata } from "next";
import React from "react";
import { DEFAULT_IMAGE, SEO_DATA, WEBSITE_URL } from "../seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string[] }>;
}): Promise<Metadata> {
  try {
    const { page } = await params;
    const path = "/" + page.join("/");

    console.log("Layout path:", path);

    const seoData = SEO_DATA.find((route) => route.path === path);

    if (!seoData) {
      console.log("No SEO data found for path:", path);
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
