import { test, expect } from '@playwright/test';
 
test('Access transfer page after log out', async ({ page }) => {
  await page.goto('http://localhost:4173/');
    await page.getByRole('link', { name: 'Sign In' }).first().click();
 
 // Expect a title "to contain" a substring.
    await expect(page).toHaveURL('http://localhost:4173/login')
    await page.getByRole('textbox', { name: 'Email address' }).fill('merchant@flashgateway.local');
    await page.getByRole('textbox', { name: 'Password' }).fill('Password123!');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForTimeout(15000);
    await expect(page).toHaveURL('http://localhost:4173/dashboard');
    await expect(page.getByText('Portfolio Overview')).toBeVisible();
 
 
 
    //Navigate to Transfer funds
    await page.getByRole('link', {name: "payments Transfer Funds"}).click();
    await expect(page).toHaveURL('http://localhost:4173/transfers');
    await expect(page.getByText('Transfer Details')).toBeVisible();
    await page.getByRole('button', {name: 'One-off beneficiary Enter one-off details'})
        .click();

 //Logout   
    await page.getByRole('button', { name: 'Sign Out'}).click();

 //Go back to the transfer page
    await page.goto('http://localhost:4173/transfers', {
      waitUntil: 'domcontentloaded'
    });


 // VERIFY USER IS REDIRECTED TO LOGIN
   await expect(page).toHaveURL('http://localhost:4173/login');


 // Verify the login page is displayed

   await expect(
      page.getByRole('textbox', { 
         name: 'Email address' 
      }) 
   ).toBeVisible(); 
   
 
});
 