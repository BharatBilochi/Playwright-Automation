import { test, expect } from '@playwright/test'
import { ADDRGETNETWORKPARAMS } from 'dns'

test.describe("My first practice work Suite", () => {
    test('Practice', async ({ page }) => {

        await page.goto("https://www.saucedemo.com/")
        await page.fill("#user-name", "standard_user")
        await page.waitForTimeout(5000)
        await page.fill("#password", "secret_sauce")
        await page.waitForTimeout(3000)
        await page.locator("#login-button").click()
        await expect(page).toHaveTitle('Swag Labs')
        await page.click("//*[text()='Sauce Labs Backpack']")
        await page.locator("//button[text()='Add to cart']").click()
        await page.locator("//span[@class='shopping_cart_badge']").click()
        await page.locator("//button[@id='checkout']").click()
        await page.screenshot({ path: "elementscreenshot.png", fullPage: true })

    })

    test("practice1", async ({ page }) => {

        await page.goto("https://www.saucedemo.com/")




    })

    test("Dominos Practice", async ({ page }) => {


        await page.goto("https://agi-hylt.gcom.grainger.com/en")
        // Scroll down the page using the mouse
        await page.mouse.move(71, 185)
        await page.mouse.down()
        await page.mouse.move(184, 382)
        await page.mouse.up()
        await page.waitForTimeout(5000)
        await page.locator('(//img[@src="https://static.grainger.com/rp/s/is/image/Grainger/5P233_AS01?$xlswatch$"])[3]').click()
        await page.waitForTimeout(3000)


    })
})