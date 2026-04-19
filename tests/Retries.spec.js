import {test,expect} from '@playwright/test'
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
 // await page.getByRole('link', { name: 'may be' }).click();
})
//add retries in config file ,it will apply on all tests,but if add in terminal at the time to execut 
//then it will only specific test.as --retries:2