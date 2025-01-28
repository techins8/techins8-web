import { notFound } from "next/navigation";
import { SEO_DATA } from "../seo";
import React from "react";

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ page: string[] }>;
}) {
  const { page } = await params;
  const path = "/" + page.join("/");

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
