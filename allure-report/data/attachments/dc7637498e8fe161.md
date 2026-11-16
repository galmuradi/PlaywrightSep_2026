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
  6  |     // Step 1: Open website
  7  |     await test.step('Open Droppable website', async () => {
  8  |         await page.goto('https://demoqa.com/droppable', {
  9  |             waitUntil: 'domcontentloaded'
  10 |         });
  11 |     });
  12 | 
  13 |     // Step 2: Locate source element
  14 |     const source = page.locator('#draggable').first();
  15 | 
  16 |     // Step 3: Locate destination element
  17 |     const target = page.getByRole('tabpanel', {
  18 |         name: 'Simple'
  19 |     }).locator('#droppable');
  20 | 
  21 |     // Step 4: Verify elements are visible
  22 |     await test.step('Verify drag and drop elements', async () => {
  23 |         await expect(source).toBeVisible();
  24 |         await expect(target).toBeVisible();
  25 |     });
  26 | 
  27 |     // Step 5: Perform drag and drop
  28 |     await test.step('Drag element into destination', async () => {
  29 |         await source.dragTo(target, {
  30 |             steps: 15
  31 |         });
  32 |     });
  33 | 
  34 |     // Step 6: Verify successful drop
  35 |     await test.step('Verify drop confirmation', async () => {
> 36 |         await expect(target).toContainText('Dropped!');
     |                              ^ Error: expect(locator).toContainText(expected) failed
  37 |     });
  38 | 
  39 | });
```