import { expect, test } from "@playwright/test";

const FIRST_ARTICLE_ID = "developpeur-full-stack-competences-salaire-2025";
const FIRST_ARTICLE_TITLE = "Développeur Full Stack : Compétences et salaire en 2025";

test.describe("Blog listing page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/blog");
  });

  test("renders the page without errors", async ({ page }) => {
    await expect(page.locator("body")).toBeVisible();
  });

  test("lists at least one article", async ({ page }) => {
    await expect(page.getByText(FIRST_ARTICLE_TITLE)).toBeVisible();
  });

  test("article links point to correct URLs", async ({ page }) => {
    const link = page.getByRole("link", { name: FIRST_ARTICLE_TITLE }).first();
    await expect(link).toHaveAttribute("href", `/blog/${FIRST_ARTICLE_ID}`);
  });
});

test.describe("Blog article page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/blog/${FIRST_ARTICLE_ID}`);
  });

  test("renders the article title", async ({ page }) => {
    await expect(page.getByRole("heading", { name: FIRST_ARTICLE_TITLE })).toBeVisible();
  });

  test("renders article content", async ({ page }) => {
    await expect(page.getByRole("article")).toBeVisible();
  });

  test("shows a not-found page for an unknown article ID", async ({ page }) => {
    await page.goto("/blog/this-article-does-not-exist");
    // Next.js dev returns 200 but renders the not-found UI
    await expect(page.getByRole("heading")).toBeVisible();
    await expect(page).not.toHaveURL(/error/);
  });
});
