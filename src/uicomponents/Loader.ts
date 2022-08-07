import { Locator } from 'playwright-core'
import { UIComponent } from './UIComponent'

export class Loader extends UIComponent {
    constructor(locator: Locator) {
        super(locator)
    }

    async waitUntilInvisible() {
        await this.locator.waitFor({ state: 'hidden' })
    }
}
