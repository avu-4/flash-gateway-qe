import { test, expect } from '@playwright/test';

test('Transfer funds to Internal Account.', async ({ page }) => {
    //Visit page
    await page.goto('http://localhost:4173/login');
    await expect(page).toHaveTitle('FlashGuard | Secure Fintech Portal');
    //Login
    await page.getByRole('textbox', { name: 'Email address' })
        .fill('admin@flashgateway.local');

    await page.getByRole('textbox', { name: 'Password' })
        .fill('Password123!');

    await page.getByRole('button', { name: 'Sign In' })
        .click();

    await page.waitForTimeout(15000);
    await expect(page).toHaveURL('http://localhost:4173/dashboard');
    await expect(page.getByText('Portfolio Overview'))
        .toBeVisible();

    await page.getByRole('link', {name: "payments Transfer Funds"}).click();
    await expect(page).toHaveURL('http://localhost:4173/transfers');
    await expect(page.getByText('Transfer Details')).toBeVisible();
    await page.getByRole('button', {name: 'Internal account Use a linked account'}).click();
    await page.getByRole('spinbutton', {name : '0.00'}).fill('200.00');

});