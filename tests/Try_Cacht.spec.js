import { test } from '@playwright/test';

test('test step example', async ({ page }) => {
  await test.step('Open page', async () => {

    await page.goto('https://demoblaze.com');

    const closeButton = page.getByRole('button', {
      name: 'Close Pop-up'
    });

    try {
      await closeButton.waitFor({
        state: 'visible',
        timeout: 6000
      });

      await closeButton.click();
      console.log('Pop-up dismissed successfully.');

    } catch {
      console.log('Pop-up did not appear, proceeding safely.');
    }

  });

  await test.step('Continue main flow', async () => {

    await page.getByRole('link', { name: 'Home' }).click();

    console.log('Main test flow continued successfully.');

  });

});