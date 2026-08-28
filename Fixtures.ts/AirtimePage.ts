import { Page, expect } from '@playwright/test';

export class AirtimePage {
    constructor(private page: Page) {}

    // Locators
     await this.page.getByRole('link', {name: 'wifi_tethering Airtime & Data'});

    await this.page.getByRole('button', {name: 'C Cell C'});

    await this.page.getByRole('textbox', {name: '00 000 0000'});

    await this.page.getByRole('button', {name: 'Data Bundles'});
    await this.page.getByRole('button', {name: 'R 50',exact: true});

    await this.page.getByRole('button', {name: 'Review Payment arrow_forward'});

    await this.page.getByRole('button', {name: 'Confirm Payment'});

    // Navigate to Airtime & Data
    async open() {
        await this.airtimeDataLink.click();
        await expect(this.page).toHaveURL('http://localhost:4173/airtime');
    }

    // Select Cell C
    async selectCellC() {
        await this.cellCButton.click();}

    // Enter phone number
    async enterPhoneNumber(phoneNumber: string) {
        await this.phoneNumberInput.fill(phoneNumber);
    }

    // Select Data Bundles
    async selectDataBundles() {
        await this.dataBundlesButton.click();
    }

    // Select R50 bundle
    async selectR50Bundle() {
        await this.fiftyRandBundle.click();
    }

    // Verify selected amount
    async verifyAmount(amount: string) {
        await expect(
            this.page.locator(
                'p.font-headline-md.text-headline-md.text-primary'
            )
        ).toHaveText(amount);
    }

    // Review payment
    async reviewPayment() {
        await this.reviewPaymentButton.click();

        await expect(
            this.page.getByText('Data bundle', {
                exact: true
            })
        ).toBeVisible();

        await expect(
            this.page.getByText('Confirm Payment')
        ).toBeVisible();
    }

    // Confirm payment
    async confirmPayment() {
        await this.confirmPaymentButton.click();

        await expect(
            this.page.getByText(
                'Data bundle for Cell C was submitted successfully.'
            )
        ).toBeVisible({
            timeout: 150000
        });
    }
}