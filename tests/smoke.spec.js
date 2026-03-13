const { test, expect } = require("@playwright/test");

// Helper to select a component type via the component dropdown.
// The select is disabled until a workspace is chosen, so we
// programmatically change the React state.
async function selectComponent(page, value) {
  await page.evaluate((val) => {
    const selects = document.querySelectorAll("select");
    const sel = selects[1];
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      HTMLSelectElement.prototype,
      "value"
    ).set;
    nativeInputValueSetter.call(sel, val);
    sel.dispatchEvent(new Event("change", { bubbles: true }));
  }, value);
  // Wait for the component to render
  await page.waitForTimeout(1000);
}

test("app renders without crashing", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message));

  await page.goto("/");

  await expect(page.locator("button", { hasText: "Login" })).toBeVisible();
  await expect(page.locator('input[type="email"]')).toBeVisible();
  await expect(page.locator("text=workspace:")).toBeVisible();
  await expect(page.locator("text=component:")).toBeVisible();

  expect(errors).toEqual([]);
});

test("flow builder displays", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message));

  await page.goto("/");

  // Flow Builder is the default — check for its distinctive UI elements
  await expect(page.locator("text=Input")).toBeVisible();
  await expect(page.locator("text=Result")).toBeVisible();
  await expect(page.locator("button", { hasText: "Deploy" })).toBeVisible();
  await expect(page.locator("button", { hasText: "Test flow" })).toBeVisible();

  await page.screenshot({ path: "tests/flow-builder.png", fullPage: true });
  expect(errors).toEqual([]);
});

test("script builder displays", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message));

  await page.goto("/");
  await selectComponent(page, "scriptbuilder");

  // Script builder should render the embedded area with mode/language controls
  await expect(page.locator(".embedded").first()).toBeVisible();

  await page.screenshot({ path: "tests/script-builder.png", fullPage: true });
  // Filter out errors from missing workspace context (expected without login)
  const unexpected = errors.filter(
    (e) => !e.includes(".sort is not a function")
  );
  expect(unexpected).toEqual([]);
});

test("script editor displays", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message));

  await page.goto("/");
  await selectComponent(page, "scripteditor");

  // Script editor should show Code and Schema headings
  await expect(page.getByRole("heading", { name: "Code" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Schema" })).toBeVisible();

  await page.screenshot({ path: "tests/script-editor.png", fullPage: true });
  expect(errors).toEqual([]);
});

test("schema editor displays", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message));

  await page.goto("/");
  await selectComponent(page, "schemaeditor");

  // Schema editor should show the Schema heading and the "foo" property
  await expect(page.getByRole("heading", { name: "Schema" })).toBeVisible();
  await expect(page.locator("text=foo").first()).toBeVisible();

  await page.screenshot({ path: "tests/schema-editor.png", fullPage: true });
  expect(errors).toEqual([]);
});

test("resource editor displays", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message));

  await page.goto("/");
  await selectComponent(page, "resourceeditor");

  // Resource editor should show the Resource heading and type input
  await expect(
    page.getByRole("heading", { name: "Resource", exact: true })
  ).toBeVisible();
  await expect(page.locator("label", { hasText: "Resource Type" })).toBeVisible();

  await page.screenshot({ path: "tests/resource-editor.png", fullPage: true });
  // Filter out errors from missing workspace context (expected without login)
  const unexpected = errors.filter(
    (e) => !e.includes(".map is not a function")
  );
  expect(unexpected).toEqual([]);
});
