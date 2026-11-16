const { test, expect } = require('@playwright/test');

test('Enter User Name', async ({ page }) => {

// Step 1: Open website
await test.step('Open website', async () => {
    await page.goto('https://testkru.com/Elements/TextFields', {
        waitUntil: 'domcontentloaded'
    });
});

// Step 2: Locate First Name field

//.first()	Selects the first matching element
//.last()	Selects the last matching element
//.nth(0)	Selects the first matching element
//.nth(1)	Selects the second matching element

const username = page.locator('#firstName').first();

// Step 3: Verify field visibility
await test.step('Verify First Name field is visible', async () => {
    await expect(username).toBeVisible();
});

// Step 4: Enter user name
await test.step('Enter user name', async () => {
    await username.pressSequentially('John Doe', { delay: 100 });
});

// Step 5: Verify entered text
await test.step('Verify entered user name', async () => {
    await expect(username).toHaveValue('John Doe');
});

});
