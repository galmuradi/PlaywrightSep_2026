const { test, expect } = require('@playwright/test');

test('Double Click Button', async ({ page }) => {

// Step 1: Open website
await test.step('Open website', async () => {
    await page.goto('https://testkru.com/Elements/Buttons', {
        waitUntil: 'domcontentloaded'
    });
});

// Step 2: Locate Double-click button
const doubleClickButton = page.getByRole('button', {
    name: 'Double click on me'
});

// Step 3: Verify button visibility
await test.step('Verify double-click button is visible', async () => {
    await expect(doubleClickButton).toBeVisible();
});

// Step 4: Perform double-click
await test.step('Perform double-click functionality', async () => {
    await doubleClickButton.dblclick();
});

});