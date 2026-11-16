# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Drag and Drop.spec.js >> Drag and Drop functionality
- Location: tests\Drag and Drop.spec.js:4:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByRole('tabpanel', { name: 'Simple' }).locator('#droppable')
Expected substring: "Dropped!"
Received string:    "Drop Here"
Timeout: 5000ms

Call log:
  - Expect "toContainText" getByRole('tabpanel', { name: 'Simple' }).locator('#droppable') with timeout 5000ms
  - waiting for getByRole('tabpanel', { name: 'Simple' }).locator('#droppable')
    13 × locator resolved to <div id="droppable" class="drop-box ui-droppable">…</div>
       - unexpected value "Drop Here"

```

```yaml
- paragraph: Drop Here
```

# Test source

```ts
  1  | 
  2  | const { test, expect } = require('@playwright/test');
  3  | 
  4  | test('Drag and Drop functionality', async ({ page }) => {
  5  | 
  6  | // Step 1: Open website
  7  | await test.step('Open Droppable website', async () => {
  8  |     await page.goto('https://demoqa.com/droppable', {
  9  |         waitUntil: 'domcontentloaded'
  10 |     });
  11 | });
  12 | 
  13 | // Step 2: Locate source and destination
  14 | const source = page.locator('#draggable').first();
  15 | 
  16 | const target = page.getByRole('tabpanel', {
  17 |     name: 'Simple'
  18 | }).locator('#droppable');
  19 | 
  20 | // Step 3: Verify elements
  21 | await test.step('Verify drag and drop elements', async () => {
  22 |     await expect(source).toBeVisible();
  23 |     await expect(target).toBeVisible();
  24 | });
  25 | 
  26 | // Step 4: Perform drag and drop using mouse
  27 | await test.step('Perform drag and drop', async () => {
  28 | 
  29 |     await source.scrollIntoViewIfNeeded();
  30 |     await target.scrollIntoViewIfNeeded();
  31 | 
  32 |     const sourceBox = await source.boundingBox();
  33 |     const targetBox = await target.boundingBox();
  34 | 
  35 |     if (!sourceBox || !targetBox) {
  36 |         throw new Error('Source or destination element not found');
  37 |     }
  38 | 
  39 |     // Move mouse to source
  40 |     await page.mouse.move(
  41 |         sourceBox.x + sourceBox.width / 2,
  42 |         sourceBox.y + sourceBox.height / 2
  43 |     );
  44 | 
  45 |     // Hold mouse button
  46 |     await page.mouse.down();
  47 | 
  48 |     // Move to destination
  49 |     await page.mouse.move(
  50 |         targetBox.x + targetBox.width / 2,
  51 |         targetBox.y + targetBox.height / 2,
  52 |         { steps: 20 }
  53 |     );
  54 | 
  55 |     // Release mouse
  56 |     await page.mouse.up();
  57 | 
  58 | });
  59 | 
  60 | // Step 5: Verify successful drop
  61 | await test.step('Verify drop confirmation', async () => {
> 62 |     await expect(target).toContainText('Dropped!');
     |                          ^ Error: expect(locator).toContainText(expected) failed
  63 | });
  64 | 
  65 | });
```