import { Locator, Page } from '@playwright/test'
import { UIComponent } from './UIComponent'

export class Button extends UIComponent {
    constructor(locator: Locator) {
        super(locator)
    }

    async click() {
        await this.locator.click()
    }
}
