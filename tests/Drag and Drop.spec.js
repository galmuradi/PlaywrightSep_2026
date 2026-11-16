
const { test, expect } = require('@playwright/test');

test('Drag and Drop functionality', async ({ page }) => {

// Step 1: Open website
await test.step('Open Droppable website', async () => {
    await page.goto('https://demoqa.com/droppable', {
        waitUntil: 'domcontentloaded'
    });
});

// Step 2: Locate source and destination
const source = page.locator('#draggable').first();

const target = page.getByRole('tabpanel', {
    name: 'Simple'
}).locator('#droppable');

// Step 3: Verify elements
await test.step('Verify drag and drop elements', async () => {
    await expect(source).toBeVisible();
    await expect(target).toBeVisible();
});

// Step 4: Perform drag and drop using mouse
await test.step('Perform drag and drop', async () => {

    await source.scrollIntoViewIfNeeded();
    await target.scrollIntoViewIfNeeded();

    const sourceBox = await source.boundingBox();
    const targetBox = await target.boundingBox();

    if (!sourceBox || !targetBox) {
        throw new Error('Source or destination element not found');
    }

    // Move mouse to source
    await page.mouse.move(
        sourceBox.x + sourceBox.width / 2,
        sourceBox.y + sourceBox.height / 2
    );

    // Hold mouse button
    await page.mouse.down();

    // Move to destination
    await page.mouse.move(
        targetBox.x + targetBox.width / 2,
        targetBox.y + targetBox.height / 2,
        { steps: 20 }
    );

    // Release mouse
    await page.mouse.up();

});

// Step 5: Verify successful drop
await test.step('Verify drop confirmation', async () => {
    await expect(target).toContainText('Dropped!');
});

});