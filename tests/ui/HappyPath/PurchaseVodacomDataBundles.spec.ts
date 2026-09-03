import { test, expect } from '@playwright/test';

test('Purchase Vodacom Data Bundles successfully.', async ({ page }) => {
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

    //Buy Bundle
    await page.getByRole('link', {name : 'wifi_tethering Airtime & Data'}).click();
    await expect(page).toHaveURL('http://localhost:4173/airtime');
    await page.getByRole('button', {name: 'check_circle V Vodacom'}).click();
    await page.getByRole('textbox', {name : '00 000 0000'}).fill('0618032306');
    await page.getByRole('button', {name : 'Data Bundles'}).click();
    await page.getByRole('button', {name : 'R 50', exact:true}).click();


    await expect(
    page.locator('p.font-headline-md.text-headline-md.text-primary')).toHaveText('R 50,00'); //Assertion/Verify Amount
    await page.getByRole('button', {name: 'Review Payment arrow_forward'}).click();
    await expect(
    page.getByText('Data bundle', { exact: true })
    ).toBeVisible();
    await expect(page.getByText('Confirm Payment')).toBeVisible();
    await page.getByRole('button', {name : 'Confirm Payment'}).click();
})