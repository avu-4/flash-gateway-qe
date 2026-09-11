import { test, expect } from '@playwright/test';
 
test('Login with empty email', async ({ page }) => {
  await page.goto('http://localhost:4173/');
    await page.getByRole('link', { name: 'Sign In' }).first().click();
 
 // Expect a title "to contain" a substring.
    await expect(page).toHaveURL('http://localhost:4173/login')

  await page.getByRole('textbox', { name: 'Email address' }).fill('');
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123!');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Verify the validation message
  await expect(page.getByRole('textbox', { name: 'Email address' }))
    .toHaveJSProperty('validationMessage', 'Please fill out this field.');
});