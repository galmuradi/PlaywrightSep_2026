const { test, expect } = require('@playwright/test');

test('Handle Prompt Alert - Enter text and Accept', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.once('dialog', async dialog => {
        console.log('Prompt message:', dialog.message());
        await dialog.accept('Ghassan Test');
    });

    await page.locator('button:has-text("Click for JS Prompt")').click();
    await expect(page.locator('#result')).toHaveText('You entered: Ghassan Test');
});

test('Handle Prompt Alert - Cancel', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.once('dialog', async dialog => {
        console.log('Prompt message:', dialog.message());
        await dialog.dismiss();
    });

    await page.locator('button:has-text("Click for JS Prompt")').click();
    await expect(page.locator('#result')).toHaveText('You entered: null');
});