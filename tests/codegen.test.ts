import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span')
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').fill('admin200@gmail.com');
  await page.getByPlaceholder('Password').fill('ta5XWbym3AsV9@3');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account' }).click();
  await page.getByPlaceholder('Last Name').fill('weweMzee');
  await page.locator('#content div').filter({ hasText: 'Continue' }).nth(1).click();
  await page.getByRole('button', { name: ' My account' }).click();
  await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span')
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
});