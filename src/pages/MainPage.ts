import test, { Locator, Page } from "@playwright/test";
import { Button } from "../uicomponents/Button";
import { Loader } from "../uicomponents/Loader";
import { BasePage } from "./BasePage";
import { DonationWindow } from "./modals/DonationWindow";


export class MainPage extends BasePage {
    private giveNowButton: Button;
    private loader: Loader;
    donationWindow: DonationWindow;

    constructor(page: Page) {
        super(page);
        this.giveNowButton = new Button(page.frameLocator('iframe').locator('//div[@qa="fun-element"]'));
        this.donationWindow = new DonationWindow(page);
        this.loader = new Loader(page.locator('//div[@class="fun-widget-backdrop-holder"]'))
    }

    async navigate() {
        await test.step("Navigate Main page", async () => {
            await super.navigate('/qa-test-7R58U3');
        });
    }

    async openDonationWindow() {
        await test.step("Open Donation Window", async () => {
            await this.giveNowButton.click();
            await this.loader.waitUntillInvisible();
        });
    }
}