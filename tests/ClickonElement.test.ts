import { test, expect } from '@playwright/test'

import { asserttitle, loadhomepage } from '../tests/helpers'

test('Simple Basic Test', async ({ page }) =>{
    //here goest the code}
        await page.goto("https://www.facebook.com/")
        await page.waitForTimeout(5000)
        await page.click('//a[text()="Create new account"]')
        await page.waitForTimeout(5000)
        await page.click("//button[text()='Sign Up']")
         

        
    })



    