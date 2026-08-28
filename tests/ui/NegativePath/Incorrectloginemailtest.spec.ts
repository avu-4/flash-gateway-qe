import { test, expect } from '@playwright/test';

test('FlashGateway', async ({ page }) => {
  await page.goto('http://localhost:4173');
  await page.getByRole('link', { name: 'Sign In' }).first().click();

 // Expect a title "to contain" a substring.
  await expect(page).toHaveURL('http://localhost:4173/login')
  await page.getByRole('textbox', { name: 'Email address' }).fill('minniemeeee13@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123!');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByText('Invalid credentials').nth(1)).toBeVisible({timeout: 30000});
  await expect(page).toHaveURL('http://localhost:4173/login');
});

/*importing a object consiisting of test function and expect funtion from the module or component called @playwright/test. */