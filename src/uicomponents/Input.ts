import { Locator } from "@playwright/test";
import { UIComponent } from "./UIComponent";


export class Input extends UIComponent {

    constructor(locator: Locator) {
        super(locator)
    }

    async fill(text: string) {
        await this.locator.fill(text)
    }
}