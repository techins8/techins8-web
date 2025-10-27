import type { MetadataRoute } from "next";
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
      url: `${WEBSITE_URL}/about-us`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.8,
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
    return [...baseRoutes, ...seoRoutes, ...blogRoutes] satisfies MetadataRoute.Sitemap;
  } catch (error) {
    console.error("Error fetching blog articles for sitemap:", error);
    // Return base routes even if blog fetching fails
    return [...baseRoutes, ...seoRoutes] satisfies MetadataRoute.Sitemap;
  }
}
