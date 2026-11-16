const { test, expect } = require('@playwright/test');

test('Login test', { tag: '@smoke' }, async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
});

test('Checkout flow', { tag: ['@regression', '@critical'] }, async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page.locator('body')).toBeVisible();
});