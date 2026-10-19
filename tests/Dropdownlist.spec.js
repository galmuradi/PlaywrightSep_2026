// Import the Playwright test and expect functions 
const { test, expect } = require('@playwright/test'); 

// Define a test to inspect all available country dropdown options
 test('Inspect country dropdown options', async ({ page }) => { 

// STEP 1: Open the Test Automation Practice website 
await page.goto('https://testautomationpractice.blogspot.com/'); 

// STEP 2: Locate the country dropdown using its ID: country 
const countryDropdown = page.locator('#country'); 

// STEP 3: Verify that the country dropdown is visible on the page 
// If the dropdown is not visible, the test will fail 
await expect(countryDropdown).toBeVisible();

// STEP 4: Find all <option> elements inside the country dropdown 
// Extract the visible text and value attribute from each option 
const options = await countryDropdown.locator('option').evaluateAll( elements => elements.map(option => ({ 

// Get the country name displayed to the user text: option.textContent.trim(), 
// Get the underlying value associated with the country value: option.value 
}))
); 
// STEP 5: Print all country dropdown options in the terminal 
// This helps us inspect the available countries and their values 
console.log('Country dropdown options:', options);

// STEP 6: FOLLOW-UP / NEXT STEP 
// We can now add more assertions to verify specific countries, 
// check the total number of options, or select a country. 
// Example: await countryDropdown.selectOption('canada'); 
});
