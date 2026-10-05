# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CheckBox.spec.js >> handle single checkbox
- Location: tests\CheckBox.spec.js:24:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.check: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('checkbox', { name: 'Subscribe' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - paragraph [ref=e7]: This domain is for use in documentation examples without needing permission. This is not a service, avoid relying on it for testing and monitoring purposes.
  - paragraph [ref=e8]: هذا النطاق مُخصص للاستخدام في أمثلة التوثيق دون الحاجة إلى إذن. هذه ليست خدمة، يُرجى تجنب الاعتماد عليها لأغراض الاختبار والمراقبة.
  - paragraph [ref=e9]: 该域名仅用于文档示例，无需获得许可。这并非一项服务，请勿将其用于测试和监控目的。
  - paragraph [ref=e10]: L’usage de ce domaine est réservé à des exemples de documentation, sans autorisation préalable. Il ne s’agit pas d’un service ; son utilisation à des fins de test ou de surveillance est à éviter.
  - paragraph [ref=e11]: Данный домен предназначен для использования в примерах документации без необходимости получения предварительного разрешения. Это не сервис; не рекомендуется его использование для тестирования и мониторинга.
  - paragraph [ref=e12]: Este dominio está destinado al uso en ejemplos de documentación sin necesidad de permiso. Esto no es un servicio, evitar utilizarlo para realizar pruebas o monitoreos.
  - link "Learn more" [ref=e13] [cursor=pointer]:
    - /url: https://iana.org/help/example-domains
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Handle checkbox', async ({page}) => {
  4  | 
  5  |   await page.goto('https://practice.expandtesting.com/checkboxes');
  6  | 
  7  |   //Check checkbox field
  8  |   await page.locator("[id='checkbox1']").check();
  9  |   
  10 |   //Assertion to checkbox to verify it's checked
  11 |   await expect(page.locator("[id='checkbox1']")).toBeChecked();
  12 |   expect(await page.locator("[id='checkbox1']").isChecked()).toBeTruthy();
  13 |   
  14 |   //Uncheck checkbox field
  15 |   await page.locator("[id='checkbox1']").uncheck();
  16 |   
  17 |   //Assertion to checkbox to verify it's unchecked
  18 |   expect(await page.locator("[id='checkbox1']").isChecked()).toBeFalsy();  
  19 |  
  20 | });
  21 | 
  22 | 
  23 | 
  24 | test('handle single checkbox', async ({ page }) => {
  25 |   await page.goto('https://example.com');
  26 | 
  27 |   // Locate by accessible role and check
  28 |   const subscribeCheckbox = page.getByRole('checkbox', { name: 'Subscribe' });
> 29 |   await subscribeCheckbox.check();
     |                           ^ Error: locator.check: Test timeout of 30000ms exceeded.
  30 | 
  31 |   // Verify the checkbox is checked
  32 |   await expect(subscribeCheckbox).toBeChecked();
  33 | 
  34 |   // Uncheck the element
  35 |   await subscribeCheckbox.uncheck();
  36 |   await expect(subscribeCheckbox).not.toBeChecked();
  37 | });
```