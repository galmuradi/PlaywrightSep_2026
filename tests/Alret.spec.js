//Testing page https://the-internet.herokuapp.com/


const { test, expect } = require('@playwright/test');

// -----------------------------
// Test 1: Accept JS Alert
// -----------------------------
test('Handle the Alert successfully', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.once('dialog', async dialog => {
    console.log('Alert message:', dialog.message());
    await dialog.accept();   // MUST await
  });

  await page.getByRole('button', { name: 'Click for JS Alert' }).click();

  await expect(page.locator('#result'))
    .toHaveText('You successfully clicked an alert');
});

// -----------------------------
// Test 2: Accept JS Confirm
// -----------------------------
test('Handle the Confirm Alert successfully', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.once('dialog', async dialog => {
    console.log('Confirm message:', dialog.message());
    await dialog.accept();   // MUST await
  });

  await page.getByRole('button', { name: 'Click for JS Confirm' }).click();

  await expect(page.locator('#result'))
    .toHaveText('You clicked: Ok');
});