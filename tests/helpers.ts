export async function loadhomepage(page){

    await page.goto("https://www.facebook.com/")
    await page.waitForTimeout(3000)
}
export async function asserttitle(page){

    await page.waitforselector("//h2[contains(text(),'Facebook helps you connect and share with the people in your life.')]")
}
