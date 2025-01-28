// app/[...page]/layout.tsx
import React from "react";
import { Metadata } from "next";
import { SEO_DATA, WEBSITE_URL, DEFAULT_IMAGE } from "../../seo";

type LayoutProps = {
  params: {
    page: string[];
  };
  children: React.ReactNode;
};

export async function generateMetadata(
  { params }: LayoutProps,
): Promise<Metadata> {
  const segments = params.page;
  const path = "/" + segments.join("/");
  
  console.log("Layout path:", path); // Debug log
  
  const seoData = SEO_DATA.find((route) => route.path === path);

  if (!seoData) {
    console.log("No SEO data found for path:", path); // Debug log
    return {};
  }

  console.log("Found SEO data:", seoData); // Debug log

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
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}