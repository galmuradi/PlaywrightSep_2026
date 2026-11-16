# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TextBoxEntery.spec.js >> Enter User Name
- Location: tests\TextBoxEntery.spec.js:2:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByPlaceholder('First Name')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByPlaceholder('First Name') with timeout 5000ms
  - waiting for getByPlaceholder('First Name')

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
- heading "Text Fields" [level=2]
- paragraph:
  - text: This is a playground to test your skills on various text fields. ( Powered by
  - link "codekru":
    - /url: https://www.codekru.com
  - text: 😛 )
- paragraph: Now, A text field can have many properties
- list:
  - listitem: It can be of type "input" without a placeholder
  - listitem: It can with a placeholder
  - listitem: It can be a "textarea"
  - listitem: It can be an "uneditable" field
  - listitem: It can be a "disabled" field
  - listitem: It can be a "hidden" field
- paragraph: "Note: We have also added a duplicate field(#6) which has the same properties as field #1"
- separator
- text: 1) First Name Without Placeholder
- textbox
- text: 2) Last Name With Placeholder
- textbox "Enter your last name..."
- text: 3) A textarea field
- textbox
- text: 4) An uneditable field
- textbox: Codekru
- text: 5) A disabled field
- textbox [disabled]: Codekru
- text: 6) Duplicated First Name Field
- 'link "(same as #1)"':
  - /url: "#firstName"
- textbox
- text: 7) Field with hidden visibility 8) Pre-filled Text Field
- textbox: Codekru
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | test('Enter User Name', async ({ page }) => {
  3  | // Step 1: Open website
  4  | await test.step('Open website', async () => {
  5  |     await page.goto('https://testkru.com/Elements/TextFields', {
  6  |         waitUntil: 'domcontentloaded'
  7  |     });
  8  | });
  9  | 
  10 | // Step 2: Locate username field
  11 | const username = page.getByPlaceholder('First Name');
  12 | 
  13 | // Step 3: Enter user name
  14 | await test.step('Enter user name', async () => {
> 15 |     await expect(username).toBeVisible();
     |                            ^ Error: expect(locator).toBeVisible() failed
  16 |     await username.pressSequentially('John Doe', { delay: 100 });
  17 | });
  18 | });
  19 | 
```