import { test, expect } from '@playwright/test';
import { MainPage } from '../src/pages/MainPage';
import { CreditCardModel, Currency } from '../src/pages/modals/DonationWindow';

test('Error massage shows when you fill incorrect redit card data', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();
  await mainPage.openDonationWindow();
  await mainPage.donationWindow.swithToGiveMonthly();
  await mainPage.donationWindow.selectCurrency(Currency.USD);
  await mainPage.donationWindow.fillAmount('100');
  await mainPage.donationWindow.clickDonateButton();
  await mainPage.donationWindow.clickCoverFeeButton();
  await mainPage.donationWindow.clickCreditCardButton();
  await mainPage.donationWindow.fillCreditCardData(CreditCardModel);
  await mainPage.donationWindow.clickContinueButton();
  await mainPage.donationWindow.fillFirstName('Astemir');
  await mainPage.donationWindow.fillLastName('Boziev');
  await mainPage.donationWindow.fillEmail('example@mail.ru')
  await mainPage.donationWindow.clickDonateAmountButton();

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
