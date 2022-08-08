import { test, expect } from '@playwright/test'
import { MainPage } from '../src/pages/MainPage'
import { CreditCardModel, Currency } from '../src/pages/modals/DonationWindow'

test.describe('Invalid credit card tests', () => {
    test('Error massage shows when you fill incorrect сredit card data', async ({
        page,
    }) => {
        const mainPage = new MainPage(page)
        await mainPage.navigate()
        await mainPage.openDonationWindow()
        await mainPage.donationWindow.swithToGiveMonthly()
        await mainPage.donationWindow.selectCurrency(Currency.USD)
        await mainPage.donationWindow.fillAmount('100')
        await mainPage.donationWindow.clickDonateButton()
        await mainPage.donationWindow.clickCoverFeeButton()
        await mainPage.donationWindow.clickCreditCardButton()
        await mainPage.donationWindow.fillCreditCardData(CreditCardModel)
        await mainPage.donationWindow.clickContinueButton()
        await mainPage.donationWindow.fillFirstName('Astemir')
        await mainPage.donationWindow.fillLastName('Boziev')
        await mainPage.donationWindow.fillEmail('example@mail.ru')
        await mainPage.donationWindow.clickDonateAmountButton()

        await expect(
            mainPage.donationWindow.errorPopover.title.locator
        ).toBeVisible()

        await expect(
            mainPage.donationWindow.continueButton.locator
        ).toBeDisabled()
    })

    test('Error massage shows when you fill incorrect сredit card data 2', async ({
        page,
    }) => {
        const mainPage = new MainPage(page)
        await mainPage.navigate()
        await mainPage.openDonationWindow()
        await mainPage.donationWindow.swithToGiveMonthly()
        await mainPage.donationWindow.selectCurrency(Currency.USD)
        await mainPage.donationWindow.fillAmount('100')
        await mainPage.donationWindow.clickDonateButton()
        await mainPage.donationWindow.clickCoverFeeButton()
        await mainPage.donationWindow.clickCreditCardButton()
        await mainPage.donationWindow.fillCreditCardData(CreditCardModel)
        await mainPage.donationWindow.clickContinueButton()
        await mainPage.donationWindow.fillFirstName('Astemir')
        await mainPage.donationWindow.fillLastName('Boziev')
        await mainPage.donationWindow.fillEmail('example@mail.ru')
        await mainPage.donationWindow.clickDonateAmountButton()
        
        await expect(
            mainPage.donationWindow.errorPopover.title.locator
        ).toBeVisible()

        await expect(
            mainPage.donationWindow.continueButton.locator
        ).toBeDisabled()
    })
})
