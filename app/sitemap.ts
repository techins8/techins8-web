import type { MetadataRoute } from "next";
import { GLOSSAIRE } from "@/lib/glossaire";
import { getArticles } from "@/query/article.query";
import { SEO_DATA, WEBSITE_URL } from "./seo";

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base routes
  const baseRoutes = [
    {
      url: WEBSITE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 1,
    },
    {
      url: `${WEBSITE_URL}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: `${WEBSITE_URL}/glossaire`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.7,
    },
    {
      url: `${WEBSITE_URL}/plan-du-site`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.3,
    },
    {
      url: `${WEBSITE_URL}/job-offers`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily" as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: `${WEBSITE_URL}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily" as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: `${WEBSITE_URL}/legal`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly" as ChangeFrequency,
      priority: 0.5,
    },
    {
      url: `${WEBSITE_URL}/cgv`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly" as ChangeFrequency,
      priority: 0.5,
    },
    {
      url: `${WEBSITE_URL}/partnerships`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.8,
    },
  ];

  // Generate routes from SEO_DATA
  const seoRoutes = SEO_DATA.map((route) => ({
    url: `${WEBSITE_URL}${route.path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as ChangeFrequency,
    priority: 0.9,
  }));

  // Glossaire term pages
  const glossaireRoutes = GLOSSAIRE.map((term) => ({
    url: `${WEBSITE_URL}/glossaire/${term.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as ChangeFrequency,
    priority: 0.6,
  }));

  // Fetch blog articles
  try {
    const articles = await getArticles();
    const blogRoutes = articles.map((article) => ({
      url: `${WEBSITE_URL}/blog/${article.id}`,
      lastModified: new Date(article.publishedAt ?? article.createdTime).toISOString(),
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 0.8,
    }));

    // Return all routes
    return [
      ...baseRoutes,
      ...seoRoutes,
      ...glossaireRoutes,
      ...blogRoutes,
    ] satisfies MetadataRoute.Sitemap;
  } catch (error) {
    console.error("Error fetching blog articles for sitemap:", error);
    return [...baseRoutes, ...seoRoutes, ...glossaireRoutes] satisfies MetadataRoute.Sitemap;
  }
}
