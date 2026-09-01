
import { test, expect } from '@playwright/test';
 
test('Dashboard displays merchant name', async ({ page }) => {
 
  await page.goto('http://localhost:4173');
 
  await page.getByRole('link', { name: 'Sign In' }).first().click();
 
  await expect(page).toHaveURL('http://localhost:4173/login');
 
  await page.getByRole('textbox', { name: 'Email address' }).fill('merchant@flashgateway.local');
 
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123!');
 
  await page.getByRole('button', { name: 'Sign In' }).click();
 
  await expect(

    page.getByRole('heading', { name: 'Portfolio Overview' })

  ).toBeVisible({ timeout: 30000 });
  console.log(await page.locator('body').innerText());
 
  // Verify the correct merchant name is displayed

  await expect(

    page.getByText('Welcome back, Ava Finance!', {exact: true })

  ).toBeVisible();
 
 // Verify that the current balance is displayed
  
await expect(
  page.getByRole('heading', { name: /balance/i })
).toBeVisible();
});

