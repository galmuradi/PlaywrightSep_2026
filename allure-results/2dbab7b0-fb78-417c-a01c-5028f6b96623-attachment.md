# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Drag and Drop.spec.js >> Drag and Drop functionality
- Location: tests\Drag and Drop.spec.js:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#droppable')
Expected: visible
Error: strict mode violation: locator('#droppable') resolved to 2 elements:
    1) <div id="droppable" class="drop-box">…</div> aka getByRole('tabpanel', { name: 'Simple' }).locator('#droppable')
    2) <div id="droppable" class="drop-box">…</div> aka getByLabel('Revert Draggable').locator('#droppable')

Call log:
  - Expect "toBeVisible" locator('#droppable') with timeout 5000ms
  - waiting for locator('#droppable')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]: Elements
      - generic [ref=e24]: Forms
      - generic [ref=e37]: Alerts, Frame & Windows
      - generic [ref=e49]: Widgets
      - generic [ref=e62]:
        - generic [ref=e63] [cursor=pointer]: Interactions
        - list [ref=e75]:
          - listitem [ref=e76] [cursor=pointer]:
            - link "Sortable" [ref=e77]:
              - /url: /sortable
          - listitem [ref=e80] [cursor=pointer]:
            - link "Selectable" [ref=e81]:
              - /url: /selectable
          - listitem [ref=e84] [cursor=pointer]:
            - link "Resizable" [ref=e85]:
              - /url: /resizable
          - listitem [ref=e88] [cursor=pointer]:
            - link "Droppable" [ref=e89]:
              - /url: /droppable
          - listitem [ref=e92] [cursor=pointer]:
            - link "Dragabble" [ref=e93]:
              - /url: /dragabble
      - generic [ref=e96]: Book Store Application
    - generic [ref=e109]:
      - heading "Droppable" [level=1] [ref=e110]
      - tablist [ref=e111]:
        - tab "Simple" [selected] [ref=e112] [cursor=pointer]
        - tab "Accept" [ref=e113] [cursor=pointer]
        - tab "Prevent Propogation" [ref=e114] [cursor=pointer]
        - tab "Revert Draggable" [ref=e115] [cursor=pointer]
      - tabpanel "Simple" [ref=e117]:
        - generic [ref=e118]:
          - generic [ref=e119]: Drag Me
          - paragraph [ref=e121]: Drop Here
  - contentinfo [ref=e128]:
    - generic [ref=e129]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Drag and Drop functionality', async ({ page }) => {
  4  | 
  5  | // Step 1: Open website
  6  | await test.step('Open Droppable website', async () => {
  7  |     await page.goto('https://demoqa.com/droppable', {
  8  |         waitUntil: 'domcontentloaded'
  9  |     });
  10 | });
  11 | 
  12 | // Step 2: Locate source element
  13 | const source = page.locator('#draggable');
  14 | 
  15 | // Step 3: Locate destination element
  16 | const target = page.locator('#droppable');
  17 | 
  18 | // Step 4: Verify source and target visibility
  19 | await test.step('Verify drag and drop elements', async () => {
  20 |     await expect(source).toBeVisible();
> 21 |     await expect(target).toBeVisible();
     |                          ^ Error: expect(locator).toBeVisible() failed
  22 | });
  23 | 
  24 | // Step 5: Perform drag and drop
  25 | await test.step('Drag element into destination', async () => {
  26 |     await source.dragTo(target);
  27 | });
  28 | 
  29 | // Step 6: Verify successful drop
  30 | await test.step('Verify drop confirmation', async () => {
  31 |     await expect(target).toContainText('Dropped!');
  32 | });
  33 | 
  34 | });
```