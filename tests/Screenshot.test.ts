import { test, expect } from '@playwright/test'

test ('Full Page Screenshot', async ({ page }) =>{
    //here goest the code}
        await page.goto("https://www.facebook.com")
        await page.screenshot({path: "fullpage.png",fullPage:true})
        
    })


    
test ('Single element Screenshot', async ({ page }) =>{
    //here goest the code}
        await page.goto("https://www.facebook.com")

        const e1 = await page.locator("//h2[contains(text(),'Facebook helps you connect and share with the people in your life.')]")
        await e1.screenshot({path: "singleelement.png"})
       
    })