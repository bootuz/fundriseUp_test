import { Locator, Page } from "@playwright/test";


export class UIComponent {
    locator: Locator

    constructor(locator: Locator) {
        this.locator = locator
    }

    async waitUntil(state: "attached"|"detached"|"visible"|"hidden") {
        await this.locator.waitFor({state: state});
    }
}