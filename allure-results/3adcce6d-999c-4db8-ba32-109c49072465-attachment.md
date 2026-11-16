# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClickType.spec.js >> Double Click Button
- Location: tests\ClickType.spec.js:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#doubleClickBtn')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('#doubleClickBtn') with timeout 5000ms
  - waiting for locator('#doubleClickBtn')

```

```yaml
- navigation:
  - button " Toggle Menu"
  - link "Codekru playground":
    - /url: /
    - heading "Codekru" [level=1]
    - heading "playground" [level=3]
  - list:
    - listitem:
      - link "Elements":
        - /url: "#homeSubmenu"
      - list:
        - listitem:
          - link "Text Fields":
            - /url: /Elements/TextFields
        - listitem:
          - link "Radio Buttons":
            - /url: /Elements/RadioButtons
        - listitem:
          - link "Checkboxes":
            - /url: /Elements/Checkboxes
        - listitem:
          - link "Buttons":
            - /url: /Elements/Buttons
        - listitem:
          - link "Text Messages":
            - /url: /Elements/TextMessages
        - listitem:
          - link "File Upload And Download":
            - /url: /Elements/Files
        - listitem:
          - link "SVG Elements":
            - /url: /Elements/SVGelemnts
        - listitem:
          - link "Dropdowns":
            - /url: /Elements/Dropdowns
        - listitem:
          - link "Tables":
            - /url: /Elements/Tables
        - listitem:
          - link "Dynamic Components":
            - /url: /Elements/DynamicComponents
        - listitem:
          - link "Links":
            - /url: /Elements/Links
    - listitem:
      - link "Interactions":
        - /url: "#interactionsSubMenu"
    - listitem:
      - link "About":
        - /url: "#"
  - paragraph:
    - text: Copyright ©2026 All rights reserved | Made by
    - link "codekru.com":
      - /url: https://www.codekru.com
    - text: and
    - link "Colorlib.com":
      - /url: https://colorlib.com
- heading "Buttons" [level=2]
- paragraph:
  - text: This is a playground to test your code on various types of buttons( Powered by
  - link "codekru":
    - /url: https://www.codekru.com
  - text: 😛 )
- paragraph: Here, we will see
- list:
  - listitem: Double click on Button
  - listitem: Right click on Button
  - listitem: Disabled button
  - listitem: Click on button to open a new tab
- separator
- text: 1) Double-Click on button
- button "Double click on me"
- text: 2) Right-Click on Button
- button "Right click on me"
- text: 3) Left-Click on Button
- button "Left click on me"
- text: 4) Disabled Button
- button "Disabled button" [disabled]
- text: 5) Color change on hover button
- button "Hover on me"
- text: 6) Click the button to open a link in different window
- button "Click me"
- text: 7) Click the button to open a link in same window
- button "Click me"
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Double Click Button', async ({ page }) => {
  4  | 
  5  |     // Open website
  6  |     await page.goto('https://testkru.com/Elements/Buttons');
  7  | 
  8  |     // Locate the double-click button
  9  |     const doubleClickButton = page.locator('#doubleClickBtn');
  10 | 
  11 |     // Verify button is visible
> 12 |     await expect(doubleClickButton).toBeVisible();
     |                                     ^ Error: expect(locator).toBeVisible() failed
  13 | 
  14 |     // Perform double click
  15 |     await doubleClickButton.dblclick();
  16 | 
  17 | });
```