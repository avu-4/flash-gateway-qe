import { test, expect } from '@playwright/test';
 
test('Login with empty password', async ({ page }) => {
  await page.goto('http://localhost/');
    await page.getByRole('link', { name: 'Sign In' }).first().click();
 
 // Expect a title "to contain" a substring.
    await expect(page).toHaveURL('http://localhost/login')
    await page.getByRole('textbox', { name: 'Email address' }).fill('merchant@flashgateway.local');
    await page.getByRole('textbox', { name: 'Password' }).fill('');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await expect(page.getByRole('textbox', { name: 'Password' }))
    .toHaveJSProperty('validationMessage', 'Please fill in this field.');
});