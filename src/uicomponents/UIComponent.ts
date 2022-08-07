import { Locator, Page } from "@playwright/test";


export class UIComponent {
    locator: Locator

    constructor(locator: Locator) {
        this.locator = locator
    }
}