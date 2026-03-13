const { test, expect } = require("@playwright/test");

test("app renders without crashing", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message));

  await page.goto("/");

  // The page should have the login button
  await expect(page.locator("button", { hasText: "Login" })).toBeVisible();

  // Should have the email input
  await expect(page.locator('input[type="email"]')).toBeVisible();

  // Should have the workspace select
  await expect(page.locator("text=workspace:")).toBeVisible();

  // Should have the component selector with Flow Builder option
  await expect(page.locator("text=component:")).toBeVisible();

  // No fatal JS errors
  expect(errors).toEqual([]);
});

test("page title loads correctly", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Windmill|React/i);
});

test("flow builder component displays", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message));

  await page.goto("/");

  // Flow Builder is the default selection — verify the component area renders
  const embeddedArea = page.locator(".embedded").first();
  await expect(embeddedArea).toBeVisible();

  // Take a screenshot for visual verification
  await page.waitForTimeout(3000);
  await page.screenshot({ path: "tests/flow-builder.png", fullPage: true });

  // Check no fatal JS errors
  expect(errors).toEqual([]);
});
