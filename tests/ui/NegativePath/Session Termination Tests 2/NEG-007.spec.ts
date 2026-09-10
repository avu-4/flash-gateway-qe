import { test, expect } from '@playwright/test';
 
test('Submit transfers after session expires', async ({ page }) => {
  await page.goto('http://localhost/');
    await page.getByRole('link', { name: 'Sign In' }).first().click();
 
 // Expect a title "to contain" a substring.
    await expect(page).toHaveURL('http://localhost/login');
    await page.getByRole('textbox', { name: 'Email address' }).fill('merchant@flashgateway.local');
    await page.getByRole('textbox', { name: 'Password' }).fill('Password123!');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForTimeout(15000);
    await expect(page).toHaveURL('http://localhost/dashboard');
    await expect(page.getByText('Portfolio Overview')).toBeVisible();

 
 // Navigate to Transfer Funds page
    await page.goto('http://localhost/transfers', {
      waitUntil: 'domcontentloaded'
    });
   
 // Click the "Transfer Funds" link
    await page.getByRole('link', { name: 'Transfer Funds' }).click();
   
 // Navigate to Saved Beneficiary
    await page.getByRole('button', { name: 'ONE-OFF BENEFICIARY' }).click();
 
 // Add beneficiary details
    await page.getByPlaceholder('e.g. Acme Supplies').fill('Asemahle');
    await page.getByPlaceholder('e.g. Standard Bank').fill('FNB');
    await page.getByPlaceholder('e.g. 1234567890').fill('0987654321');
    
 
 // Making a Transfer
    await page.getByPlaceholder('0.00').fill('2');
    await page.getByPlaceholder('e.g. Invoice INV-2024-001').fill('Invoice INV-2026-001');



 // SIMULATE SESSION EXPIRATION

   await page.route( 
      'http://localhost:4000/transactions/transfer', 
      async route => {
          
         console.log('Simulating expired session...');


         await route.fulfill({ 
            status: 401, 
            contentType: 'application/json',
            body: JSON.stringify({
               message: 'Session expired' 
            }) 
         }); 
      } 
   );
   
   
   
 // CONFIRM & TRANSFER
   
   await expect( page.getByRole('button', { 
         name: 'Confirm & Transfer' 
      }) 
   ).toBeVisible();

 // Click Confirm & Transfer
   await page.getByRole('button', {
       name: 'Confirm & Transfer' 
   }).click();



 // Verify that the user is redirected to the login page
    await expect(page).toHaveURL('http://localhost/transfers');
});





 