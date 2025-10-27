import { SEO_DATA } from "@/app/seo";

export interface RelatedLink {
  title: string;
  description: string;
  url: string;
}

export function getRelatedLinks(currentPath: string, limit = 6): RelatedLink[] {
  const current = SEO_DATA.find((item) => item.path === currentPath);
  if (!current) return [];

  const related = SEO_DATA.filter((item) => {
    if (item.path === currentPath) return false;

    const currentSegments = currentPath.split("/").filter(Boolean);
    const itemSegments = item.path.split("/").filter(Boolean);

    if (currentSegments.length !== itemSegments.length) return false;

    return true;
  })
    .slice(0, limit)
    .map((item) => ({
      title: item.footerLink || item.name,
      description: `${item.description.substring(0, 120)}...`,
      url: item.path,
    }));

  return related;
}

export function getCityFromSlug(slug: string | string[]): string | undefined {
  const cities = ["paris", "lyon", "toulouse", "nantes", "bordeaux"];
  const slugArray = Array.isArray(slug) ? slug : [slug];

  return slugArray.find((segment) => cities.includes(segment.toLowerCase()));
}

export function getProfileFromSlug(slug: string | string[]): string | undefined {
  const profiles = [
    "full-stack",
    "frontend",
    "backend",
    "mobile",
    "react",
    "angular",
    "vue",
    "devops",
    "ios",
    "android",
    "javascript",
    "typescript",
    "web",
    "freelance",
    "full-remote",
    "senior",
    "junior",
    "gcp",
    "react-native",
  ];

  const slugArray = Array.isArray(slug) ? slug : [slug];

  for (const segment of slugArray) {
    if (profiles.includes(segment.toLowerCase())) {
      return segment.toLowerCase();
    }
  }

  const combined = slugArray.join("-");
  if (profiles.includes(combined.toLowerCase())) {
    return combined.toLowerCase();
  }

  return undefined;
}
