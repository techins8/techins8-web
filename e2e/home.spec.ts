import { expect, test } from "@playwright/test";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Wait for the main content to be rendered (RSC streaming)
    await page.waitForSelector("h1", { timeout: 15000 });
  });

  test("renders the hero heading", async ({ page }) => {
    await expect(page.getByText("Toutes les Offres Techs sans arnaques")).toBeVisible();
  });

  test("renders the CTA button", async ({ page }) => {
    await expect(page.getByRole("link", { name: "ESSAYER GRATUITEMENT" }).first()).toBeVisible();
  });

  test("renders the newsletter form", async ({ page }) => {
    await expect(page.locator("#newsletter-form")).toBeVisible();
  });

  test("newsletter form shows error for invalid email (bypassing browser validation)", async ({
    page,
  }) => {
    // Disable browser native validation to test our React/Zod validation path
    await page.evaluate(() => {
      const form = document.getElementById("newsletter-form") as HTMLFormElement;
      form.noValidate = true;
    });
    const form = page.locator("#newsletter-form");
    await form.locator('input[type="email"]').fill("not-an-email");
    await form.locator('button[type="submit"]').click();
    await expect(page.getByText("Email invalide")).toBeVisible();
  });

  test("newsletter form shows error on empty submit (bypassing browser validation)", async ({
    page,
  }) => {
    await page.evaluate(() => {
      const form = document.getElementById("newsletter-form") as HTMLFormElement;
      form.noValidate = true;
    });
    await page.locator("#newsletter-form").locator('button[type="submit"]').click();
    await expect(page.getByText("Email invalide")).toBeVisible();
  });

  test("renders the problem section", async ({ page }) => {
    await expect(page.getByText("job boards vous mentent")).toBeVisible();
  });

  test("renders the FAQ section", async ({ page }) => {
    await expect(page.getByText("Vous avez des questions ?")).toBeVisible();
  });

  test("has no JS errors on load", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));
    await page.evaluate(() => sessionStorage.clear());
    await page.reload();
    await page.waitForSelector("h1", { timeout: 15000 });
    expect(errors).toHaveLength(0);
  });
});
