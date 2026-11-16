const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
testDir: './tests',
fullyParallel: true,
forbidOnly: !!process.env.CI,
retries: process.env.CI ? 2 : 0,
workers: process.env.CI ? 1 : undefined,

reporter: [
['list'],
['allure-playwright'],
['html', { outputFolder: 'playwright-report', open: 'never' }],
['junit', { outputFile: 'junit-reporter.xml' }]
],

use: {
screenshot: 'only-on-failure',
trace: 'retain-on-failure',

// Maximize browser window
viewport: null,

launchOptions: {
  args: ['--start-maximized']
}

},

projects: [
{
name: 'chromium',
use: { ...devices['Desktop Chrome'] }
}
]
});