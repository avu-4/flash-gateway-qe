import { test, expect } from '@playwright/test';

test('Merchant navigates to Airtime & Data', async ({ page }) => {

  // Open the application
  await page.goto('http://localhost:4173');

  // Click Sign In
  await page.getByRole('link', { name: 'Sign In' }).first().click();

  // Verify login page
  await expect(page).toHaveURL('http://localhost:4173/login');

  // Enter login details
  await page.getByRole('textbox', { name: 'Email address' })
    .fill('merchant@flashgateway.local');

  await page.getByRole('textbox', { name: 'Password' })
    .fill('Password123!');

  // Sign in
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Verify dashboard
  await expect(
    page.getByRole('heading', { name: 'Portfolio Overview' })
  ).toBeVisible({ timeout: 30000 });

  // Click Buy Airtime
  await page.getByRole('link', { name: /Buy Airtime/i }).click();

  // Verify Airtime & Data page
  await expect(
    page.getByRole('heading', { name: 'Airtime & Data' })
  ).toBeVisible();
});