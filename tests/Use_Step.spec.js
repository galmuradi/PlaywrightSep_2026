const { test, expect } = require('@playwright/test');

test('test step example', async ({ page }) => {

    // Step 1: Open the website
    await test.step('Step 1: Open page', async () => {
        await page.goto('https://playwright.dev/');
    });

    // Step 2: Verify page title
    await test.step('Step 2: Verify page title', async () => {
        await expect(page).toHaveTitle(/Playwright/);
    });

});