# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClickType.spec.js >> This test different type of clicks
- Location: tests\ClickType.spec.js:2:1

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:5173/
Call log:
  - navigating to "http://localhost:5173/", waiting until "load"

```

# Test source

```ts
  1 | const{test,expect}=require('@playwright/test');
  2 | test("This test different type of clicks",async({page})=>{
> 3 |     await page.goto('http://localhost:5173/');
    |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:5173/
  4 |     await expect(page).toHaveTitle(/learnwithanimesh/);
  5 | 
  6 |     test.step("double click on the button using click method",async()=>{
  7 |         await page.getByText("Right Click Me").click({button:"right"});
  8 |     });
  9 | });
```