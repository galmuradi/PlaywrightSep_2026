# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EnvFIleTesting.spec.ts >> Test env URL
- Location: tests\EnvFIleTesting.spec.ts:3:5

# Error details

```
Error: Environment variable URL is missing
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Test env URL', async ({ page }) => {
  4  |   console.log("ENV URL =", process.env.URL);
  5  | 
  6  |   if (!process.env.URL) {
> 7  |   throw new Error("Environment variable URL is missing");
     |         ^ Error: Environment variable URL is missing
  8  | }
  9  |  await page.goto(process.env.URL!);
  10 |  await page.goto(process.env.URL ?? "https://example.com");
  11 | });
  12 | 
```