# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Drag and Drop.spec.js >> Drag and Drop functionality
- Location: tests\Drag and Drop.spec.js:3:1

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
    - locator resolved to <div id="droppable" class="drop-box">…</div>
    12 × unexpected value "Drop Here"
       - locator resolved to <div id="droppable" class="drop-box ui-droppable">…</div>
    - unexpected value "Drop Here"

```

```yaml
- paragraph: Drop Here
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Drag and Drop functionality', async ({ page }) => {
  4  | // Step 1: Open website
  5  | await test.step('Open Droppable website', async () => {
  6  |     await page.goto('https://demoqa.com/droppable', {
  7  |         waitUntil: 'domcontentloaded'
  8  |     });
  9  | });
  10 | 
  11 | // Step 2: Locate source element
  12 | const source = page.locator('#draggable');
  13 | 
  14 | // Step 3: Locate destination element inside Simple tab
  15 | const target = page.getByRole('tabpanel', { name: 'Simple' })
  16 |                    .locator('#droppable');
  17 | 
  18 | // Step 4: Verify source and target visibility
  19 | await test.step('Verify drag and drop elements', async () => {
  20 |     await expect(source).toBeVisible();
  21 |     await expect(target).toBeVisible();
  22 | });
  23 | 
  24 | // Step 5: Perform drag and drop
  25 | await test.step('Drag element into destination', async () => {
  26 |     await source.dragTo(target);
  27 | });
  28 | 
  29 | // Step 6: Verify successful drop
  30 | await test.step('Verify drop confirmation', async () => {
> 31 |     await expect(target).toContainText('Dropped!');
     |                          ^ Error: expect(locator).toContainText(expected) failed
  32 | });
  33 | });
```