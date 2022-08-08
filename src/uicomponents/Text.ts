import { Locator } from 'playwright-core'
import { UIComponent } from './UIComponent'

export class Text extends UIComponent {
    constructor(locator: Locator) {
        super(locator)
    }

    async content() {
        await this.locator.textContent()
    }
}
