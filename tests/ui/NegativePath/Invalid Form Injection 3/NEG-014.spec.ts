import {test, expect} from '@playwright/test';
import { TIMEOUT } from 'node:dns';
 
test('Enter excessively long beneficiary name', async ({page}) => {
    test.setTimeout(300000);
 
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
    await expect(page).toHaveURL('http://localhost:4173/dashboard'), {timeout: 150000};
    await expect(page.getByText('Portfolio Overview'))
        .toBeVisible();
 
    //Navigate to Transfer funds
    await page.getByRole('link', {name: "payments Transfer Funds"}).click();
    await expect(page).toHaveURL('http://localhost:4173/transfers');
    await expect(page.getByText('Transfer Details')).toBeVisible();
    await page.getByRole('button', {name: 'One-off beneficiary Enter one-off details'})
        .click();
 
    //Fill Beneficiary details
    await page.getByRole('textbox', {name: 'Beneficiary Name'}).fill('ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ');
    await page.getByRole('textbox', {name: 'Bank'}).fill('ABSA BANK');
    await page.getByRole('textbox', {name: 'Account Number'}).fill('1234567890');
    await page.getByRole('spinbutton', {name: '0.00'}).fill('1');
 
    //Assertion
    await page.getByRole('button', {name: 'lock Confirm & Transfer'}).click();
    // Assertion
    await expect(page.getByText('successfully!'))
        .toBeVisible({ timeout: 150000 });
});
 