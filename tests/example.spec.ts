import { test, expect } from '@playwright/test';
import { LoginPage } from '../page/LoginPage';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('open baidu.com @debug', async ({ page }) => {
  const pageLogin: LoginPage = new LoginPage(page);
  await pageLogin.openUrl('https://www.baidu.com/');
  await expect(pageLogin.btnLogin).toBeVisible();

  await pageLogin.clickBtnLogin();
  await pageLogin.doLogin('aaaaa', 'aaaaa');
});
