import test, { Page } from "@playwright/test";
import { Button } from "../../uicomponents/Button";
import { Input } from "../../uicomponents/Input";
import { Select } from "../../uicomponents/Select";
import { BasePage } from "../BasePage";


export class DonationWindow extends BasePage {
    private giveMonthlyButton: Button;
    private currencySelector: Select;
    private donateButton: Button;
    private amountInput: Input;
    private coverFeeButton: Button;
    private creditCardButton: Button;
    private creditCardNumberInput: Input;
    private expirationDateInput: Input;
    private CVCInput: Input;
    private continueButton: Button;
    private firstNameInput: Input;
    private lastNameInput: Input;
    private emailInput: Input;
    private donetaAmountButton: Button;

    constructor(page: Page) {
        super(page)
        this.donateButton = new Button(page.frameLocator('//iframe[@title="Donation Widget"]').locator('//button[@data-qa="donate-button"]'));
        this.continueButton = new Button(page.frameLocator('//iframe[@title="Donation Widget"]').locator('//button[@data-qa="card-continue"]'));
        this.coverFeeButton = new Button(page.frameLocator('//iframe[@title="Donation Widget"]').locator('//div[@data-qa="cover-fee-checkbox"]'));
        this.currencySelector = new Select(page.frameLocator('//iframe[@title="Donation Widget"]').locator('//select[@data-qa="currency-selector"]'));
        this.creditCardButton = new Button(page.frameLocator('//iframe[@title="Donation Widget"]').locator('//button[@data-qa="cc-button"]'));
        this.giveMonthlyButton = new Button(page.frameLocator('//iframe[@title="Donation Widget"]').locator('//button[@data-qa="give-monthly"]'));
        this.donetaAmountButton = new Button(page.frameLocator('//iframe[@title="Donation Widget"]').locator('//button[@data-qa="privacy-continue"]'));
        this.expirationDateInput = new Input(page.frameLocator('//iframe[@title="Donation Widget"]').frameLocator('//iframe[@title="Secure expiration date input frame"]').locator('//input[@name="exp-date"]'));
       
        this.CVCInput = new Input(page.frameLocator('//iframe[@title="Donation Widget"]').frameLocator('//iframe[@title="Secure CVC input frame"]').locator('//input[@name="cvc"]'));
        this.emailInput = new Input(page.frameLocator('//iframe[@title="Donation Widget"]').locator('//input[@data-qa="personal-email"]'));
        this.amountInput = new Input(page.frameLocator('//iframe[@title="Donation Widget"]').locator('//input[@data-qa="amount"]'));
        this.lastNameInput = new Input(page.frameLocator('//iframe[@title="Donation Widget"]').locator('//input[@data-qa="personal-last-name"]'));
        this.firstNameInput = new Input(page.frameLocator('//iframe[@title="Donation Widget"]').locator('//input[@data-qa="personal-first-name"]'));
        this.creditCardNumberInput = new Input(page.frameLocator('//iframe[@title="Donation Widget"]').frameLocator('//iframe[@title="Secure card number input frame"]').locator('//input[@placeholder="Card number"]'));

    }

    async selectCurrency(currency: string) {
        await test.step(`Select currency: ${currency}`, async () => {
            await this.currencySelector.select(currency);
        });
    }

    async swithToGiveMonthly() {
        await test.step(`Switch to give monthly`, async () => {
            await this.giveMonthlyButton.click();
        });
    }

    async fillAmount(amount: string) {
        await test.step(`Fill amount ${amount}`, async () => {
            await this.amountInput.fill(amount);
        });
    }

    async clickDonateButton() {
        await test.step('Click donate button', async () => {
            await this.donateButton.click();
        });
    }

    async clickCoverFeeButton() {
        await test.step('Click cover fee button', async () => {
            await this.coverFeeButton.click();
        });
    }

    async clickCreditCardButton() {
        await test.step('Click credit card button', async () => {
            await this.creditCardButton.click();
        });
    }

    async fillCreditCardNumber(number: string) {
        await test.step(`Fill credit card number: ${number}`, async () => {
            await this.creditCardNumberInput.fill(number);
        });
    }

    async fillExpirationDate(date: string) {
        await test.step(`Fill expiration date: ${date}`, async () => {
            await this.expirationDateInput.fill(date);
        });
    }

    async fillCVC(cvc: string) {
        await test.step(`Fill CVC: ${cvc}`, async () => {
            await this.CVCInput.fill(cvc);
        });
    }

    async fillCreditCardData(model: CreditCard) {
        await test.step('Fill credit card data', async () => {
            await this.fillCreditCardNumber(model.number);
            await this.fillExpirationDate(model.expDate);
            await this.fillCVC(model.cvc);
        });
    }

    async clickContinueButton() {
        await test.step('Click continue button', async () => {
            await this.continueButton.click();
        });
    }

    async fillFirstName(firstName: string) {
        await test.step('Fill first name', async () => {
            await this.firstNameInput.fill(firstName);
        });
    }

    async fillLastName(lastName: string) {
        await test.step('Fill last name', async () => {
            await this.lastNameInput.fill(lastName);
        });
    }

    async fillEmail(email: string) {
        await test.step('Fill email', async () => {
            await this.emailInput.fill(email);
        });
    }

    async clickDonateAmountButton() {
        await test.step('Click donate amount button', async () => {
            await this.donetaAmountButton.click()
        });
    }

}

export enum Currency {
    USD = 'USD',
    EUR = 'EUR',
    GEL = 'GEL'
}

interface CreditCard {
    number: string,
    expDate: string,
    cvc: string
}

export const CreditCardModel: CreditCard = {
    number: '4242 4242 4242 4242',
    expDate: '0424',
    cvc: '000'
}