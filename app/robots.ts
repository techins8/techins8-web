import type { MetadataRoute } from "next";
import { WEBSITE_URL } from "./seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // GEO: Autoriser les crawlers IA
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
    ],
    sitemap: `${WEBSITE_URL}/sitemap.xml`,
  };
}
