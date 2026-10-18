import { test, expect } from "@playwright/test";

test("opens the first venue from the homepage", async ({ page }) => {
  await page.goto("/");

  const firstVenue = page.locator('a[href^="/venue/?id="]').first();

  await expect(firstVenue).toBeVisible();
  await firstVenue.click();

  await expect(page).toHaveURL(/\/venue\/\?id=/);

  await expect(
    page.getByRole("heading", {
      name: /^Venue details:/,
      level: 1,
    }),
  ).toBeVisible();
});
