import { test, expect } from '@playwright/test';

test('FlashGateway', async ({ page }) => {
  await page.goto('http://localhost:4173');
    await page.getByRole('link', { name: 'Sign In' }).first().click();

 // Expect a title "to contain" a substring.
 await expect(page).toHaveURL('http://localhost:4173/login')
  await page.getByRole('textbox', { name: 'Email Address' }).fill('merchant@flashgateway.local');
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123!');
  await page.getByRole('button', { name: 'Sign In' }).click();
await expect(page).toHaveURL('http://localhost:4173/dashboard', {timeout: 15000 })});
