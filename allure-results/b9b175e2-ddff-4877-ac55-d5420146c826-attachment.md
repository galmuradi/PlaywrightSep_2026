# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EnvFIleTesting.spec.ts >> Test env URL
- Location: tests\EnvFIleTesting.spec.ts:3:1

# Error details

```
Error: page.goto: url: expected string, got undefined
```

# Test source

```ts
  1 | const { test } = require('@playwright/test');
  2 | 
  3 | test('Test env URL', async ({ page }) => {
  4 |   console.log("Loaded URL:", process.env.URL);
> 5 |   await page.goto(process.env.URL);
    |              ^ Error: page.goto: url: expected string, got undefined
  6 | });
```