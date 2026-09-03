import { test, expect } from '@playwright/test';

test('Add Payment Method successfully.', async ({ page }) => {
    test.setTimeout(180000);
    //Visit page
    await page.goto('http://localhost:4173/login');
    await expect(page).toHaveTitle('FlashGuard | Secure Fintech Portal');
    //Login
    await page.getByRole('textbox', { name: 'Email address' })
        .fill('merchant@flashgateway.local');

    await page.getByRole('textbox', { name: 'Password' })
        .fill('Password123!');

    await page.getByRole('button', { name: 'Sign In' })
        .click();

    await page.waitForTimeout(15000);
    await expect(page).toHaveURL('http://localhost:4173/dashboard');
    await expect(page.getByText('Portfolio Overview'))
        .toBeVisible();

    //Navigate to Payment Methods
    await page.getByRole('link', {name: "credit_card Payment Methods"}).click();
    await expect(page).toHaveURL('http://localhost:4173/payment-methods');
    await expect(page.getByText('Payment Methods').nth(2)).toBeVisible();
    await page.getByRole('button', {name : 'add Add Payment Method'}).click();
    await page.getByPlaceholder('Card Number (16 digits)').fill('1234567890112233');
    await page.getByPlaceholder('Nickname (e.g., My Visa)').fill('Black Card');
    await page.getByPlaceholder('Expiry Date (MM/YY)').fill('07/30');
    await page.getByPlaceholder('CVV').fill('195');
    await page.getByRole('button', {name: 'Add Card'}).click({timeout:10000});
    await page.waitForTimeout(1000);

    // Reload so the payment-method table fetches the latest data
    await page.reload();

    await expect(page).toHaveURL('http://localhost:4173/payment-methods');

    await expect(
    page.getByRole('table').getByText('Black Card', { exact: true }).first()
    ).toBeVisible({ timeout: 15000 });
    
    
    

    



})