import{Page} from '@playwright/test';
import{Login.ts} from '@playwright/test';

test('Login into FlashGuard', async ({page}))=> {
    const login = newloginPage(page);


    //Setup Login

    await LoginPage.open();
    await LoginPage.login('merchant@flashgateway.local', 'Password123!');
    await expect(this.page).toHaveURL('http://localhost:4173/dashboard');
    await expect(this.page.getByText('Portfolio Overview')).toBeVisible(); 
}