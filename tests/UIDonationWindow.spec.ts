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
        await mainPage.onDonationWindow.swithToGiveMonthly()
        await mainPage.onDonationWindow.selectCurrency(Currency.USD)
        await mainPage.onDonationWindow.fillAmount('100')
        await mainPage.onDonationWindow.clickDonateButton()
        await mainPage.onDonationWindow.clickCoverFeeButton()
        await mainPage.onDonationWindow.clickCreditCardButton()
        await mainPage.onDonationWindow.fillCreditCardData(CreditCardModel)
        await mainPage.onDonationWindow.clickContinueButton()
        await mainPage.onDonationWindow.fillFirstName('Astemir')
        await mainPage.onDonationWindow.fillLastName('Boziev')
        await mainPage.onDonationWindow.fillEmail('example@mail.ru')
        await mainPage.onDonationWindow.clickDonateAmountButton()

        await expect(
            mainPage.onDonationWindow.errorPopover.title.locator
        ).toBeVisible()

        await expect(
            mainPage.onDonationWindow.continueButton.locator
        ).toBeDisabled()
    })

    test('Error massage shows when you fill incorrect сredit card data 2', async ({
        page,
    }) => {
        const mainPage = new MainPage(page)
        await mainPage.navigate()
        await mainPage.openDonationWindow()
        await mainPage.onDonationWindow.swithToGiveMonthly()
        await mainPage.onDonationWindow.selectCurrency(Currency.USD)
        await mainPage.onDonationWindow.fillAmount('100')
        await mainPage.onDonationWindow.clickDonateButton()
        await mainPage.onDonationWindow.clickCoverFeeButton()
        await mainPage.onDonationWindow.clickCreditCardButton()
        await mainPage.onDonationWindow.fillCreditCardData(CreditCardModel)
        await mainPage.onDonationWindow.clickContinueButton()
        await mainPage.onDonationWindow.fillFirstName('Astemir')
        await mainPage.onDonationWindow.fillLastName('Boziev')
        await mainPage.onDonationWindow.fillEmail('example@mail.ru')
        await mainPage.onDonationWindow.clickDonateAmountButton()

        await expect(
            mainPage.onDonationWindow.errorPopover.title.locator
        ).toBeVisible()

        await expect(
            mainPage.onDonationWindow.continueButton.locator
        ).toBeDisabled()
    })
})
