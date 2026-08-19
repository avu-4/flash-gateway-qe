import {test, expect} from '@playwright/test';

test ('Sign in to PrimeFin successfully', async ({page}) =>{
    //Visit page
    await page.goto('http://localhost:4173/login');
    await expect(page).toHaveTitle('FlashGuard | Secure Fintech Portal');

    await page.getByRole('textbox', {name : 'Email address'}).fill('merchant@flashgateway.local')
})