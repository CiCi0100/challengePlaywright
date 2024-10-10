import { test, expect } from '@playwright/test';
import { time } from 'console';


test.beforeEach(async({page}) => {
  await page.goto('http://www.automationpractice.pl/index.php?');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.locator('#email').click();
  await page.locator('#email').fill('valentina_tatiane_dapaz@mailinator.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('goosIlQNU4');
  await page.getByRole('button', { name: ' Sign in' }).click();
});

test('adicionar meu primeiro endereço', async ({ page }) => {
  await page.getByRole('link', { name: ' Add my first address' }).click();
  await page.getByLabel('Address *').click();
  await page.getByLabel('Address *').fill('Avenida Epaminondas Jácome');
  await page.getByLabel('City *').click();
  await page.getByLabel('City *').fill('Rio Branco');
  await page.getByLabel('Company').click();
  await page.getByLabel('Company').fill('Alice');
  await page.getByLabel('State *').selectOption('1');
  await page.getByLabel('Zip/Postal Code *').click();
  await page.getByLabel('Zip/Postal Code *').fill('74959');
  await page.getByLabel('Home phone **').click();
  await page.getByLabel('Home phone **').fill('(68) 3837-2375');
  await page.getByLabel('Mobile phone **').click();
  await page.getByLabel('Mobile phone **').fill('(68) 98320-6593');
  await page.getByLabel('Additional information').click();
  await page.getByLabel('Additional information').fill('test');
  await page.getByRole('button', { name: 'Save ' }).click();
  await page.getByRole('link', { name: ' Back to your account' }).click();
});

test('alterar dados do meu endereço', async({page}) => {
  test.setTimeout(12000);
  await page.getByRole('link', { name: ' My addresses' }).click();
  await page.getByRole('link', { name: 'Update ' }).click();
  await page.getByLabel('City *').click();
  await page.getByLabel('City *').fill('São Mateus');
  await page.getByLabel('Mobile phone **').click();
  await page.getByLabel('Mobile phone **').fill('(27) 98735-0163');
  await page.getByRole('button', { name: 'Save ' }).click();
  await page.getByText('Your addresses are listed below. Be sure to update your personal information if').isVisible();
  await page.getByRole('link', { name: ' Back to your account' }).click();
});

test('alterar dados do meu perfil', async({page}) => {
  test.setTimeout(12000);
  await page.getByRole('link', { name: ' My personal information' }).click();
  await page.getByLabel('Current Password').click();
  await page.getByLabel('Current Password').fill('goosIlQNU4');
  await page.getByLabel('New Password').click();
  await page.getByLabel('New Password').fill('test12345');
  await page.getByLabel('Confirmation').click();
  await page.getByLabel('Confirmation').fill('test12345');
  await page.getByRole('button', { name: 'Save ' }).click();
  await page.getByText('Your personal information has').click();
  await page.getByRole('link', { name: ' Back to your account' }).click();
});






