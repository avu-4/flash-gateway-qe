import {test, expect} from '@playwright/test';

test('Create a new account successfully', async ({page}) => {

    //Visit site
    await page.goto('http://localhost:4173/login');

    //Create a new account
    await page.getByRole('button', {name: 'Create account'}).click();
    await expect(page.getByText('Create your profile')).toBeVisible();//Assertion
    await page.getByRole('textbox', {name : 'First name'}).fill('John');
    await page.getByRole('textbox', {name : 'Last name'}).fill('Doe');
    await page.getByRole('textbox', {name : 'Email Address'}).fill('johndoe12@gmail.com');
    await page.getByRole('textbox', {name: 'phone'}).fill('0725182244');
    await page.getByRole('textbox', {name : 'Password', exact: true}).fill("qwerty");
    await page.getByRole('textbox', {name : 'Confirm password'}).fill("qwerty");
    await page.getByRole('checkbox', {name : 'I agree to the terms and privacy policy .'}).check();
    await page.getByRole('button', {name: 'Create account'}).click();
    await expect(page.getByText('Account created successfully')).toBeVisible();

})