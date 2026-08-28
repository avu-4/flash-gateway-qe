 //Click the "Transfer Funds link"
    await page.getByRole('link', {name: 'Transfer Funds'}).first().click();
    

 //Navigate to Saved Beneficiary
    
   await page.getByText('Saved Beneficiary', { exact: true }).click();

 //Make a Transfer amount greater than the balance
     await page.locator('div').filter({hasText: 'Acme Supplies'}).first().click(); 




import { test, expect } from '@playwright/test';

test('FlashGateway', async ({ page }) => {

  // Navigate to FlashGateway
  await page.goto('http://localhost:4173');

  // Click Sign In
  await page.getByRole('link', { name: 'Sign In' }).first().click();

  // Verify Login page
  await expect(page).toHaveURL('http://localhost:4173/login');

  // Enter login credentials
  await page.getByRole('textbox', { name: 'Email address' })
    .fill('merchant@flashgateway.local');

  await page.getByRole('textbox', { name: 'Password' })
    .fill('Password123!');

  // Click Sign In
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Wait for dashboard
  await page.waitForTimeout(15000);

  // Verify Dashboard
  await expect(page).toHaveURL('http://localhost:4173/dashboard');
  await expect(page.getByText('Portfolio Overview')).toBeVisible();


  // ==========================================
  // Navigate to Transfer Funds
  // ==========================================

  await page.getByRole('link', { name: 'Transfer Funds' }).click();

  // Verify Transfer Funds page
  await expect(page).toHaveURL('http://localhost:4173/transfers');


  // ==========================================
  // Select Saved Beneficiary
  // ==========================================

  await page.getByRole('button', { name: 'Saved Beneficiary' }).click();

  // If the text itself needs to be clicked
  await page.getByText('Saved Beneficiary', { exact: true }).click();


  // ==========================================
  // Enter Transfer Details
  // ==========================================

  // Enter amount greater than available balance
  await page.getByPlaceholder('0.00').fill('90000');

  // Enter reference
  await page
    .getByPlaceholder('e.g. Invoice INV-2024-001')
    .fill('Invoice INV-2024-001');

  // Select Today (Immediate)
  await page.getByRole('button', { name: 'Today (Immediate)' }).click();

});