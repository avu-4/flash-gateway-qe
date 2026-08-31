import { test, expect } from '@playwright/test';
 
test('Submit login with both fields empty', async ({ page }) => {
  await page.goto('http://localhost:4173');
    await page.getByRole('link', { name: 'Sign In' }).first().click();
 
 // Expect a title "to contain" a substring.
    await expect(page).toHaveURL('http://localhost:4173/login')
    await page.getByRole('textbox', { name: 'Email address' }).fill('');
    await page.getByRole('textbox', { name: 'Password' }).fill('');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForTimeout(15000);
    await expect(page).toHaveURL('http://localhost:4173/dashboard');
    await expect(page.getByText('Portfolio Overview')).toBeVisible();

});