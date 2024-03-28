import { test, expect } from '@playwright/test'

test('new script', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    await page.waitForTimeout(6000)
    


})