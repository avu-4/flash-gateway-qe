import { test, expect } from '@playwright/test';
 
test('Use browser back button after logout', async ({ page }) => {
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
 
 
 
 // Navigate to Transfer Funds page
    await page.goto('http://localhost:4173/transfers', {
      waitUntil: 'domcontentloaded'
    });

   
 //Sign Out
  await page.getByRole('button', { name: 'Sign Out'}).click();

 // VERIFY LOGOUT 
  await expect(page).toHaveURL( 
    'http://localhost:4173/login' 
  );

 
 // USE BROWSER BACK BUTTON
  await page.goBack({ 
    waitUntil: 'domcontentloaded' 
  });  

 // VERIFY TRANSFER PAGE CANNOT BE ACCESSED
  await expect(page).toHaveURL( 
    'http://localhost:4173/login' 
  );  

  await expect( 
    page.getByRole('textbox', { 
      name: 'Email address' 
    })     
  ).toBeVisible(); 
});


