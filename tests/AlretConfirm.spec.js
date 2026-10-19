const { test, expect } = require('@playwright/test');

test('Handle Confirm Alert - Accept', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Handle the confirm dialog once, then accept it
    page.once('dialog', async dialog => {
        console.log('Confirm message:', dialog.message());
        await dialog.accept();
    });

    // Click the JS Confirm button
    await page.locator('button:has-text("Click for JS Confirm")').click();

    // Verify result
    await expect(page.locator('#result')).toHaveText('You clicked: Ok');
});


test('Handle Confirm Alert - Cancel', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Handle the confirm dialog once, then cancel it
    page.once('dialog', async dialog => {
        console.log('Confirm message:', dialog.message());
        await dialog.dismiss();
    });

    // Click the JS Confirm button
    await page.locator('button:has-text("Click for JS Confirm")').click();

    // Verify result
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
});