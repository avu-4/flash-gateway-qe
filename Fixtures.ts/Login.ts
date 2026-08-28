import { Page, expect } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    async open() {
        await this.page.goto('http://localhost:4173/');
    }
    

    async login(email: string, password: string) {
        await this.page.getByLabel('Email address').fill('email');
        await this.page.getByLabel('password').fill('Password123!');
        await this.page.getByRole('button', { name: 'Sign In' }).click();
        await this.page.waitForTimeout(15000);
        await expect(this.page).toHaveURL('http://localhost:4173/dashboard');
        await expect(this.page.getByText('Portfolio Overview')).toBeVisible(); 
    }

}