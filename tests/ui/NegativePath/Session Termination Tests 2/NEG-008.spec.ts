import { test, expect } from '@playwright/test';
 
test('FlashGateway', async ({ page }) => {
  await page.goto('http://localhost:4173');
    await page.getByRole('link', { name: 'Sign In' }).first().click();
 
 // Expect a title "to contain" a substring.
    await expect(page).toHaveURL('http://localhost:4173/login')
    await page.getByRole('textbox', { name: 'Email address' }).fill('merchant@flashgateway.local');
    await page.getByRole('textbox', { name: 'Password' }).fill('Password123!');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForTimeout(15000);
    await expect(page).toHaveURL('http://localhost:4173/dashboard');
    await expect(page.getByText('Portfolio Overview')).toBeVisible();
 
 
 
 // Navigate to Transfer Funds page
    await page.goto('http://localhost:4173/transfer', {
      waitUntil: 'domcontentloaded'
    });
   
 
 //Click the "Transfer Funds link"
    await page.getByRole('link', {name: 'Transfer Funds'}).click();
   
 
 //Navigate to Saved Beneficiary
    await page.getByRole('button', { name: 'ONE-OFF BENEFICIARY' }).click();


 //Sign Out
    await page.getByRole('button', { name: 'Sign Out'}).click();

 // Navigate to Transfer Funds page again
    await page.goto('http://localhost:4173/transfer', {
      waitUntil: 'domcontentloaded'
    });
    await expect(page).toHaveURL('http://localhost:4173/login');
});