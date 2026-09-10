import { test, expect } from '@playwright/test';

test.only("Merchant's balance updates after purchase", async ({ page }) => {

  // Open application
  await page.goto('http://localhost:4173');

  // Sign In
  await page.getByRole('link', { name: 'Sign In' }).first().click();

  await expect(page).toHaveURL('http://localhost:4173/login');

  await page.getByRole('textbox', { name: 'Email address' })
    .fill('merchant@flashgateway.local');

  await page.getByRole('textbox', { name: 'Password' })
    .fill('Password123!');

  await page.getByRole('button', { name: 'Sign In' }).click();

  // Verify dashboard
  await expect(
    page.getByRole('heading', { name: 'Portfolio Overview' })
  ).toBeVisible({ timeout: 30000 });

  // Capture starting balance
  
  await expect (page.getByRole('heading', {name: 'R5000,00.00'})).toBeVisible()

  // Navigate to Airtime & Data
  await page.getByRole('link', { name: /Buy Airtime/i }).click();

  // Select R20
  await page.getByText('R20', { exact: true }).click();

  // Enter mobile number
  await page.getByRole('textbox', { name: /mobile number/i })
    .fill('0821234567');

  // Complete purchase
  await page.getByRole('button', { name: /Buy|Purchase|Confirm/i }).click();

  // Verify purchase was successful
  await expect(
    page.getByText(/successful|success/i)
  ).toBeVisible();

  // Go back to dashboard
  await page.getByRole('link', { name: /Dashboard/i }).click();

  // Verify updated balance
  await expect(page.getByText('R4800,00.00')).toBeVisible();

  console.log('Updated balance: R4800,00.00');

}); 

