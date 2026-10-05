# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UploadFile.spec.js >> Debug upload
- Location: tests\UploadFile.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://the-internet.herokuapp.com/upload", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e4] [cursor=pointer]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Debug upload', async ({ page }) => {
> 4  |   await page.goto('https://the-internet.herokuapp.com/upload');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  5  | 
  6  |   console.log("Page loaded");
  7  | 
  8  |   await page.locator('#file-upload')
  9  |     .setInputFiles('C:\\Play_Test\\Playwright command lines.docx');
  10 | 
  11 |   console.log("File attached");
  12 | 
  13 |   await page.locator('#file-submit').click();
  14 | 
  15 |   console.log("Submit clicked");
  16 | 
  17 |   await expect(page.locator('h3')).toHaveText('File Uploaded!');
  18 | });
```