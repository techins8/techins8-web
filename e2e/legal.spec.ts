import { expect, test } from "@playwright/test";

const STATIC_PAGES = [
  { path: "/legal", label: "Mentions légales" },
  { path: "/cgv", label: "CGV" },
];

for (const { path, label } of STATIC_PAGES) {
  test(`${label} (${path}) — loads without error`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator("body")).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
}

test("navigation bar contains Blog and About links", async ({ page }) => {
  await page.goto("/");
  const nav = page.getByRole("navigation").first();
  await expect(nav.getByRole("link", { name: "Blog" })).toBeVisible();
});
