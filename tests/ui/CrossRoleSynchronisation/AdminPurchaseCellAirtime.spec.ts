import { test, expect } from '@playwright/test';

test('Purchase Cell C Airtime successfully.', async ({ page }) => {
    // Allow the entire test up to 3 minutes
    test.setTimeout(180000);

    // Visit page
    await page.goto('http://localhost:4173/login');

    await expect(page).toHaveTitle(
        'FlashGuard | Secure Fintech Portal'
    );

    // Login
    await page.getByRole('textbox', { name: 'Email address' })
        .fill('admin@flashgateway.local');

    await page.getByRole('textbox', { name: 'Password' })
        .fill('Password123!');

    await page.getByRole('button', { name: 'Sign In' })
        .click();

    // Wait for dashboard
    await expect(page).toHaveURL(
        'http://localhost:4173/dashboard',
        { timeout: 30000 }
    );

    await expect(
        page.getByText('Portfolio Overview')
    ).toBeVisible();

    // Buy airtime
    await page.getByRole('link', {
        name: 'wifi_tethering Airtime & Data'
    }).click();

    await expect(page).toHaveURL(
        'http://localhost:4173/airtime'
    );

    // Select Vodacom
    await page.getByRole('button', {
        name: 'C Cell C'
    }).click();

    // Enter cellphone number
    await page.getByRole('textbox', {
        name: '00 000 0000'
    }).fill('0618032306');

    // Select Airtime
    await page.getByRole('button', {
        name: 'Airtime'
    }).click();

    // Select R20
    await page.getByRole('button', {
        name: 'R 100',
        exact: true
    }).click();

    // Verify selected amount
    await expect(
        page.locator(
            'p.font-headline-md.text-headline-md.text-primary'
        )
    ).toHaveText('R 100,00');

    // Review payment
    await page.getByRole('button', {
        name: 'Review Payment arrow_forward'
    }).click();

    // Verify payment review page
    await expect(
        page.getByText('Airtime top-up', {
            exact: true
        })
    ).toBeVisible();

    await expect(
        page.getByText('Confirm Payment')
    ).toBeVisible();

    // Confirm payment
    await page.getByRole('button', {
        name: 'Confirm Payment'
    }).click();

    // Verify successful airtime purchase
    await expect(
        page.getByText(
            'Airtime top-up for Cell C was submitted successfully.'
        )
    ).toBeVisible({
        timeout: 150000
    });
});