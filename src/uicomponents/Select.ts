import { Locator, Page } from "@playwright/test";
import { UIComponent } from "./UIComponent";


export class Select extends UIComponent {

    constructor(locator: Locator) {
        super(locator)
    }

    async select(value: string) {
        this.locator.selectOption(value)
    }



}

