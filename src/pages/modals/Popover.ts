import { Page } from 'playwright-core'
import { Text } from '../../uicomponents/Text'
import { BasePage } from '../BasePage'

export class Popover extends BasePage {
    title: Text
    message: Text

    constructor(page: Page) {
        super(page)
        const donationWidget = page.frameLocator('[title="Donation Widget"]')

        this.title = new Text(
            donationWidget.locator('[data-qa="card-continue-error-title"]')
        )
        this.message = new Text(
            donationWidget.locator('[data-qa="card-continue-error-message"]')
        )
    }

    async titleContent() {
        await this.title.content()
    }

    async messageContent() {
        await this.message.content()
    }
}
