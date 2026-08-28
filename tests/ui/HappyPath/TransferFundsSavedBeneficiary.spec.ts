import {test, expect} from '@playwright/test';

test ('Transfer funds to saved beneficiary', async ({page}) =>{

    test.setTimeout(150000);
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

    await page.getByRole('link', {name: "payments Transfer Funds"}).click();
    await expect(page).toHaveURL('http://localhost:4173/transfers');
    await expect(page.getByText('Transfer Details')).toBeVisible();
    await page.getByRole('button', {name: 'Saved beneficiary Choose a saved beneficiary'}).click();
    await page.locator(
    '.text-left.p-4.rounded-xl.border.w-full.transition-all.border-outline-variant.bg-surface-container-lowest').nth(1)
    .click();
    await page.getByRole('spinbutton', {name : '0.00'}).fill('300.00');
    await page.getByRole('button', {name: 'lock Confirm & Transfer'}).click();
    await expect(page.getByText('successfully!')).toBeVisible({timeout:100000})

}) 