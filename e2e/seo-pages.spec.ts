import { expect, test } from "@playwright/test";

const SEO_ROUTES = [
  { slug: "emploi", title: "Offres Développeurs" },
  { slug: "full-stack", title: "Développeur Full Stack" },
  { slug: "react", title: "Offres Développeurs React" },
  { slug: "frontend", title: "Développeur Frontend" },
  { slug: "backend", title: "Offres Développeurs Backend" },
  { slug: "devops", title: "Offres Développeurs DevOps" },
  { slug: "full-remote", title: "Développeur Remote" },
];

for (const { slug, title } of SEO_ROUTES) {
  test(`/developpeurs/${slug} — renders correctly`, async ({ page }) => {
    await page.goto(`/developpeurs/${slug}`);
    await expect(page).toHaveTitle(new RegExp(title));
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
}

test("city SEO page renders — full-stack/paris", async ({ page }) => {
  await page.goto("/developpeurs/full-stack/paris");
  await expect(page).toHaveTitle(/Paris/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("unknown SEO slug renders the not-found page", async ({ page }) => {
  await page.goto("/developpeurs/this-does-not-exist");
  // Next.js dev renders not-found with HTTP 200 — check we're on the 404 UI
  const heading = page.getByRole("heading").first();
  await expect(heading).toBeVisible();
  await expect(page.getByText(/Toutes les Offres Techs/)).not.toBeVisible();
});
