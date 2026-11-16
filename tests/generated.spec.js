const { test, expect } = require('@playwright/test');

test('Handle input box', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('ghassan');

  // No need to close page, context, or browser.
});