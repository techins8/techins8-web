// app/[...page]/page.tsx
import { notFound } from "next/navigation";
import { SEO_DATA } from "../seo";
import React from "react";


type PageProps = {
  params: {
    page: string[];
  };
};

export default async function DynamicPage({
  params,
}: PageProps) {
  const segments = params.page;
  const path = "/" + segments.join("/");
  
  console.log("Page component path:", path); // Debug log
  
  const seoData = SEO_DATA.find((route) => route.path === path);

  if (!seoData) {
    console.log("No SEO data found for path:", path); // Debug log
    notFound();
  }

  console.log("Found SEO data:", seoData); // Debug log

  return (
    <main>
      <h1>{seoData.title}</h1>
      <div>{seoData.description}</div>
    </main>
  );
}

export async function generateStaticParams() {
  return SEO_DATA.map((route) => ({
    page: route.path.split("/").filter(Boolean),
  }));
}