import { test, expect } from '@playwright/test';

test('Purchase Vodacom SMS successfully.', async ({ page }) => {
    test.setTimeout(180000);
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

    //Buy airtime
    await page.getByRole('link', {name : 'wifi_tethering Airtime & Data'}).click();
    await expect(page).toHaveURL('http://localhost:4173/airtime');
    await page.getByRole('button', {name: 'V Vodacom'}).click();
    await page.getByRole('textbox', {name : '00 000 0000'}).fill('0618032306');
    await page.getByRole('button', {name : 'SMS Bundles'}).click();
    await page.getByRole('button', {name : 'R 100', exact:true}).click();


    await expect(
    page.locator('p.font-headline-md.text-headline-md.text-primary')).toHaveText('R 100,00'); //Assertion/Verify Amount
    await page.getByRole('button', {name: 'Review Payment arrow_forward'}).click();
    await expect(
    page.getByText('SMS bundle', { exact: true })
    ).toBeVisible();
    await expect(page.getByText('Confirm Payment')).toBeVisible();
    await page.getByRole('button', {name : 'Confirm Payment'}).click();
    await expect(page.getByText('SMS bundle for Vodacom was submitted successfully.')).toBeVisible({timeout:150000});
})