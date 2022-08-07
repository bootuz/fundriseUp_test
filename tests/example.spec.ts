import { test, expect } from '@playwright/test';
import { MainPage } from '../src/pages/MainPage';
import { Currency } from '../src/pages/modals/DonationWindow';

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();
  await mainPage.openDonationWindow();
  await mainPage.donationWindow.swithToGiveMonthly();
  await mainPage.donationWindow.selectCurrency(Currency.USD);
  await mainPage.donationWindow.fillAmount("100");
  await mainPage.donationWindow.clickDonateButton();

  await page.frameLocator('//iframe[@title="Donation Widget"]').locator('//div[@data-qa="cover-fee-checkbox"]').click();
  await page.frameLocator('//iframe[@title="Donation Widget"]').locator('//button[@data-qa="cc-button"]').click();

  await page.frameLocator('//iframe[@title="Donation Widget"]').frameLocator('//iframe[@title="Secure card number input frame"]').locator('//input[@placeholder="Card number"]').fill("4242 4242 4242 4242");
  await page.frameLocator('//iframe[@title="Donation Widget"]').frameLocator('//iframe[@title="Secure expiration date input frame"]').locator('//input[@name="exp-date"]').fill("0424");
  await page.frameLocator('//iframe[@title="Donation Widget"]').frameLocator('//iframe[@title="Secure CVC input frame"]').locator('//input[@name="cvc"]').fill("000");
  await page.frameLocator('//iframe[@title="Donation Widget"]').locator('//button[@data-qa="card-continue"]').click();

  await page.frameLocator('//iframe[@title="Donation Widget"]').locator('//input[@data-qa="personal-first-name"]').fill("Astemir");
  await page.frameLocator('//iframe[@title="Donation Widget"]').locator('//input[@data-qa="personal-last-name"]').fill("Boziev");
  await page.frameLocator('//iframe[@title="Donation Widget"]').locator('//input[@data-qa="personal-email"]').fill('example@mail.ru');
  await page.frameLocator('//iframe[@title="Donation Widget"]').locator('//button[@data-qa="privacy-continue"]').click();

  await page.waitForTimeout(4000);


  

  // // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);

  // // create a locator
  // const getStarted = page.locator('text=Get Started');

  // // Expect an attribute "to be strictly equal" to the value.
  // await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // // Click the get started link.
  // await getStarted.click();

  // // Expects the URL to contain intro.
  // await expect(page).toHaveURL(/.*intro/);
});
