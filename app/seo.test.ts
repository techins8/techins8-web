import { describe, expect, it } from "vitest";
import {
  getCanonicalUrl,
  getMetaDescription,
  getMetaTitle,
  getSeoDataFromSlug,
  SEO_DATA,
  WEBSITE_URL,
} from "./seo";

describe("getSeoDataFromSlug", () => {
  it("returns SEO data for a known slug", () => {
    const result = getSeoDataFromSlug({ type: "developpeurs", slug: "full-stack" });
    expect(result?.id).toBe("developpeurs-full-stack");
  });

  it("returns null for an unknown slug", () => {
    expect(getSeoDataFromSlug({ type: "developpeurs", slug: "unknown" })).toBeNull();
  });

  it("handles array slug (city pages)", () => {
    const result = getSeoDataFromSlug({ type: "developpeurs", slug: ["full-stack", "paris"] });
    expect(result?.id).toBe("developpeurs-full-stack-paris");
  });

  it("returns the correct path", () => {
    const result = getSeoDataFromSlug({ type: "developpeurs", slug: "react" });
    expect(result?.path).toBe("/developpeurs/react");
  });

  it("returns null when slug is undefined", () => {
    expect(getSeoDataFromSlug({ type: "developpeurs", slug: undefined })).toBeNull();
  });
});

describe("getMetaTitle", () => {
  it("appends AI verification suffix", () => {
    expect(getMetaTitle({ title: "Offres React" })).toBe("Offres React | Offres vérifiées par IA");
  });
});

describe("getMetaDescription", () => {
  it("appends CTA suffix", () => {
    expect(getMetaDescription({ description: "Des offres tech." })).toBe(
      "Des offres tech. Trouvez votre prochaine opportunité sur FreeMatch.",
    );
  });
});

describe("getCanonicalUrl", () => {
  it("builds a full URL from a path", () => {
    expect(getCanonicalUrl({ path: "/developpeurs/react" })).toBe(
      `${WEBSITE_URL}/developpeurs/react`,
    );
  });
});

describe("SEO_DATA integrity", () => {
  it("all entries have required fields", () => {
    for (const entry of SEO_DATA) {
      expect(entry.id).toBeTruthy();
      expect(entry.path).toMatch(/^\/developpeurs\//);
      expect(entry.title).toBeTruthy();
      expect(entry.description).toBeTruthy();
    }
  });

  it("has no duplicate ids", () => {
    const ids = SEO_DATA.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("has no duplicate paths", () => {
    const paths = SEO_DATA.map((e) => e.path);
    expect(new Set(paths).size).toBe(paths.length);
  });
});
