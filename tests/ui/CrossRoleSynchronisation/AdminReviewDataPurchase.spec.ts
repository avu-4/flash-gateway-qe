import { test, expect } from '@playwright/test';

test('Sign in to PrimeFin successfully', async ({ page }) => {

    // Visit page
    await page.goto('http://localhost:4173/login');

    await expect(page).toHaveTitle('FlashGuard | Secure Fintech Portal');

    // Login
    await page.getByRole('textbox', { name: 'Email address' })
        .fill('admin@flashgateway.local');

    await page.getByRole('textbox', { name: 'Password' })
        .fill('Password123!');

    await page.getByRole('button', { name: 'Sign In' })
        .click();

    await page.waitForTimeout(15000);
    // Verify dashboard
    await expect(page).toHaveURL('http://localhost:4173/dashboard');

    await expect(
        page.getByText('Portfolio Overview')
    ).toBeVisible();


    // -----------------------------------
    // Buy Airtime
    // -----------------------------------

    await page.getByRole('link', {
        name: 'wifi_tethering Airtime & Data'
    }).click();

    await expect(page).toHaveURL('http://localhost:4173/airtime');


    // Select Vodacom
    await page.getByRole('button', {
        name: 'check_circle V Vodacom'
    }).click();


    // Enter phone number
    await page.getByRole('textbox', {
        name: '00 000 0000'
    }).fill('0618032306');


    // Select Airtime
    await page.getByRole('button', {
        name: 'Airtime'
    }).click();


    // Select R20
    await page.getByRole('button', {
        name: 'R 20',
        exact: true
    }).click();


    // -----------------------------------
    // Debug Review Payment button
    // -----------------------------------

    console.log('Current URL:', page.url());

    console.log(
        'Review buttons:',
        await page.getByRole('button', {
            name: /Review Payment/
        }).count()
    );

    console.log(
        'Page text:',
        await page.locator('body').innerText()
    );


    // Make sure Review Payment button exists
    await expect(
        page.getByRole('button', {
            name: /Review Payment/
        })
    ).toBeVisible();


    // Click Review Payment
    await page.getByRole('button', {
        name: /Review Payment/
    }).click();


    // -----------------------------------
    // Review Payment Assertions
    // -----------------------------------

    await expect(
        page.getByText('Airtime top-up', {
            exact: true
        })
    ).toBeVisible();


    await expect(
        page.locator('p').filter({
            hasText: /^Vodacom$/
        })
    ).toBeVisible();


    await expect(
        page.locator(
            'p.font-headline-md.text-headline-md.text-primary'
        )
    ).toHaveText('R 20,00');


    await expect(
        page.getByText('+27 0618032306', {
            exact: true
        })
    ).toBeVisible();

});