# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Drag and Drop.spec.js >> Drag and Drop Example
- Location: tests\Drag and Drop.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.dragTo: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#drag1')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - img "Page Not Found" [ref=e3]
  - heading "This Page Does Not Exist" [level=1] [ref=e4]
  - paragraph [ref=e5]: Sorry, the page you are looking for could not be found. It's just an accident that was not intentional.
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Drag and Drop Example', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://testkru.com/Interactions/DragDrop');
  6  | 
  7  |     const source = page.locator('#drag1');
  8  |     const target = page.locator('#div1');
  9  | 
> 10 |     await source.dragTo(target);
     |                  ^ Error: locator.dragTo: Test timeout of 30000ms exceeded.
  11 | 
  12 |     await expect(target).toContainText('Draggable 1');
  13 | });
```