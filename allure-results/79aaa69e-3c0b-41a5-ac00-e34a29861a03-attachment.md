# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Autocomplete.spec.js >> Handle Autocomplete using keyboard
- Location: tests\Autocomplete.spec.js:4:1

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | 
  2  | const { test, expect } = require('@playwright/test');
  3  | 
  4  | test('Handle Autocomplete using keyboard', async ({ page }) => {
  5  | 
  6  |     await page.goto('https://www.google.com');
  7  | 
  8  |     // Locate the Google search box
  9  |     const searchBox = page.getByRole('combobox', { name: 'Search' });
  10 | 
  11 |     // Type text
  12 |     await searchBox.fill('playwright');
  13 | 
  14 |     // Wait for autocomplete suggestions to appear
> 15 |     await page.waitForTimeout(1000);
     |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  16 | 
  17 |     // Navigate through suggestions using keyboard
  18 |     await page.keyboard.press('ArrowDown');
  19 |     await page.keyboard.press('ArrowDown');
  20 | 
  21 |     // Select the highlighted suggestion
  22 |     await page.keyboard.press('Enter');
  23 | 
  24 | });
```