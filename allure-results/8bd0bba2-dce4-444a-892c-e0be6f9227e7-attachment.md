# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Alret.spec.js >> Handle the Alret successfuly
- Location: tests\Alret.spec.js:6:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#result')
Expected: "You successfully clicked an alert"
Received: ""

Call log:
  - Expect "toHaveText" locator('#result') with timeout 5000ms
  - waiting for locator('#result')
  - Protocol error (Runtime.callFunctionOn): Internal server error, session closed.

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e4]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e5] [cursor=pointer]
    - generic [ref=e7]:
      - heading "JavaScript Alerts" [level=3] [ref=e8]
      - paragraph [ref=e9]: Here are some examples of different JavaScript alerts which can be troublesome for automation
      - list [ref=e10]:
        - listitem [ref=e11]:
          - button "Click for JS Alert" [active] [ref=e12] [cursor=pointer]
        - listitem [ref=e13]:
          - button "Click for JS Confirm" [ref=e14] [cursor=pointer]
        - listitem [ref=e15]:
          - button "Click for JS Prompt" [ref=e16] [cursor=pointer]
      - heading "Result:" [level=4] [ref=e17]
      - paragraph [ref=e18]: You successfully clicked an alert
  - generic [ref=e20]:
    - separator [ref=e21]
    - generic [ref=e22]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e23] [cursor=pointer]:
        - /url: http://elementalselenium.com/
```

# Test source

```ts
  1  | //Testing page https://the-internet.herokuapp.com/
  2  | 
  3  | 
  4  | const { test, expect } = require('@playwright/test');
  5  | 
  6  | test('Handle the Alret successfuly', async ({ page }) => {
  7  | 
  8  |     await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  9  | 
  10 |    // Click the "Click for JS Alert" button 
  11 |    await page.getByRole('button', { name: 'Click for JS Alert' }).click(); 
  12 |    
  13 |    // Verify the result text 
> 14 |    await expect(page.locator('#result')) .toHaveText('You successfully clicked an alert');
     |                                           ^ Error: expect(locator).toHaveText(expected) failed
  15 | 
  16 | });
  17 | 
  18 | test('Handle the Alert successfully', async ({ page }) => { 
  19 | await page.goto('https://the-internet.herokuapp.com/javascript_alerts'); 
  20 | 
  21 | // Handle the JavaScript alert 
  22 | page.on('dialog', async dialog => { 
  23 | console.log('The type of Alert message:', dialog.message()); 
  24 | await dialog.accept(); }); 
  25 | 
  26 | // Click the "Click for JS Alert" button 
  27 | await page.getByRole('button', { name: 'Click for JS Alert' }).click(); 
  28 | 
  29 | // Verify the result text 
  30 | await expect(page.locator('#result')) .toHaveText('You successfully clicked an alert'); 
  31 | 
  32 | });
```