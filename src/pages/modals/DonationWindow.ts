import { Page } from "@playwright/test";
import { Button } from "../../uicomponents/Button";
import { Input } from "../../uicomponents/Input";
import { Select } from "../../uicomponents/Select";
import { BasePage } from "../BasePage";


export class DonationWindow extends BasePage {
    private giveMonthlyButton: Button
    private currencySelector: Select
    private donateButton: Button
    private amountInput: Input

    constructor(page: Page) {
        super(page)
        this.amountInput = new Input(page.frameLocator('//iframe[@title="Donation Widget"]').locator('//input[@data-qa="amount"]'));
        this.donateButton = new Button(page.frameLocator('//iframe[@title="Donation Widget"]').locator('//button[@data-qa="donate-button"]'));
        this.currencySelector = new Select(page.frameLocator('//iframe[@title="Donation Widget"]').locator('//select[@data-qa="currency-selector"]'));
        this.giveMonthlyButton = new Button(page.frameLocator('//iframe[@title="Donation Widget"]').locator('//button[@data-qa="give-monthly"]'));

    }

    async selectCurrency(currency: string) {
        await this.currencySelector.select(currency);
    }

    async swithToGiveMonthly() {
        await this.giveMonthlyButton.click();
    }

    async fillAmount(amount: string) {
        await this.amountInput.fill(amount);
    }

    async clickDonateButton() {
        await this.donateButton.click()
    }

}

export enum Currency {
    USD = 'USD',
    EUR = 'EUR',
    GEL = 'GEL'
}