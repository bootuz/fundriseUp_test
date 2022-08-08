import type { PlaywrightTestConfig } from '@playwright/test'
import { devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
    testDir: './tests',
    timeout: 30 * 10000,
    expect: {
        timeout: 5000,
    },
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 3 : undefined,
    workers: 4,
    reporter: [['html', { open: 'always' }], ['list']],
    use: {
        actionTimeout: 15000,
        baseURL: 'https://data.fundraiseup.com',
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry',
    },
    projects: [
        {
            name: 'Desktop Chrome',
            use: {
                browserName: 'chromium',
                ...devices['Desktop Chrome'],
            },
        },
        {
            name: 'Mobile Chrome',
            use: {
                browserName: 'chromium',
                ...devices['Pixel 5'],
            },
        },
    ],
}

export default config
