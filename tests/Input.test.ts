import { test, expect } from '@playwright/test'

test ('Simple Input Test', async ({ page }) =>{
    //here goest the code}
        await page.goto("https://www.facebook.com")
        await page.waitForTimeout(5000)
        await page.fill ("#email","bharat@gmail.com")
        await page.waitForTimeout(5000)
        await page.fill("#pass","sunny@123")
        await expect(page).toHaveURL("https://www.facebook.com/")
        await expect(page).toHaveTitle("Facebook – log in or sign up")
        
    })