import { test, expect } from "@playwright/test";

test("logs in with valid credentials", async ({ page }) => {
  await page.goto("/login/");

  await page.getByPlaceholder("Email").fill(process.env.TEST_EMAIL);
  await page.getByPlaceholder("Password").fill(process.env.TEST_PASSWORD);

  await page.getByRole("button", { name: "Login", exact: true }).click();

  await expect(page).toHaveURL("http://127.0.0.1:3000/");

  await expect(
    page.getByRole("button", { name: "Logout", exact: true }),
  ).toBeVisible();
});

test("shows an error with an incorrect password", async ({ page }) => {
  await page.goto("/login/");

  await page.getByPlaceholder("Email").fill(process.env.TEST_EMAIL);
  await page.getByPlaceholder("Password").fill("ThisPasswordIsWrong123!");

  await page.getByRole("button", { name: "Login", exact: true }).click();

  await expect(page.getByRole("alert")).toContainText(
    /invalid email or password/i,
  );

  await expect(page).toHaveURL("http://127.0.0.1:3000/login/");
});
