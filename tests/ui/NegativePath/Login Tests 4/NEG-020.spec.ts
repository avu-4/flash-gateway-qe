import { test, expect } from '@playwright/test';
 
test('Submit login with both fields empty', async ({ page }) => {
    await page.goto('http://localhost/');
    await expect(page).toHaveTitle('FlashGuard | Secure Fintech Portal');
    await page.getByRole('link', { name: 'Sign In' }).first().click();
    

 // Expect a title "to contain" a substring.
    await expect(page).toHaveURL('http://localhost/login')
    await page.getByRole('textbox', { name: 'Email address' }).fill('');
    await page.getByRole('textbox', { name: 'Password' }).fill('');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await expect(page.getByRole('textbox', { name: 'Password' }))
        .toHaveJSProperty('validationMessage', 'Please fill in this field.');

});