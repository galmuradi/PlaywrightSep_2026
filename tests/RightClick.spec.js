const { test, expect } = require('@playwright/test');

test('Double Click Button', async ({ page }) => {

// Step 1: Open website
await test.step('Open website', async () => {
    await page.goto('https://testkru.com/Elements/Buttons', {
        waitUntil: 'domcontentloaded'
    });
});

// Step 2: Locate Right-click button
const rightClickButton = page.getByRole('button', {
    name: 'Right click on me'
});

// Step 3: Verify button visibility
await test.step('Verify right-click button is visible', async () => {
    await expect(rightClickButton).toBeVisible();
});

// Step 4: Perform right-click
await test.step('Perform right-click functionality', async () => {
    await rightClickButton.click({ button: 'right' });
});

});