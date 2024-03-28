import { test, expect } from '@playwright/test'
import exp from 'constants'
import { ADDRGETNETWORKPARAMS } from 'dns'
import { checkServerIdentity } from 'tls'

test('Grainger With Login', async ({ page }) => {
  //here goest the code}
  await page.setViewportSize({ width: 1536, height: 864 })
  await page.goto("https://agi-hylt.gcom.grainger.com/en")
  await page.waitForLoadState()
  await page.type("#j_username", "amit910@gmail.com")
  await page.type("#j_password", "Test@1234")
  await page.click("//input[@class='btn btnPrimary full-width']")
  await page.waitForTimeout(3000)
  await page.type("//input[@name='text']", "RMC71607")
  await page.type("(//input[@id='newPostalCode'])[1]", "A1A1A1")
  await page.click("//a[@id='saveNewPostalCode']")
  // await page.type("//input[id='quantityRMC71607']", "3")
  // await page.click("//input[@class='btn btnPrimary prdtActnAtcBtn']")



  //    await page.locator("//input[@class='btn btnPrimary prdtActnAtcBtn']").click()
  //    
})

test('Grainger Without Login', async ({ page }) => {
  //here goest the code}
  // await page.setViewportSize({ width: 1536, height: 864 })
  await page.goto("https://agi-hylt.gcom.grainger.com/en")
  await page.waitForLoadState()
  await page.type("//input[@name='text']", "RMC71607")
  await page.waitForLoadState()
  await page.click("//button[@id='quick-search-submit']")
  await page.waitForTimeout(3000)
  await page.click("//a[@class='close-modal-icon postalCodeCloseBtn']")
  await page.locator("//input[@id='quantityRMC71607']").clear()
  await page.type("//input[@id='quantityRMC71607']", "3")
  const values = "3";
  await page.click("//input[@class='btn btnPrimary prdtActnAtcBtn']")
  await page.waitForTimeout(3000)

  const actualvalue = await page.locator("//tbody/tr/td[@class='align-right qty itemQty']").textContent()
  await expect(values).toBe(actualvalue)

  const loc = await page.locator("//strong[text()='You have 1 product(s) in your shopping cart.']")
  await expect(loc).toBeVisible()
  
  if (values === actualvalue) {
    console.log("Qunatity Matched");
  } else {
    console.error("Qunatity Not Matched");
  }
  await page.locator("//a[@id='GoToCart']").click()
  await page.waitForLoadState()
  await page.click("//a[@title='Add a Note']")
  await page.waitForTimeout(3000)
  await page.type("(//input[@type='text'])[25]", "My Name is Charlie")
  await page.waitForTimeout(3000)
  await page.click("//input[@class='saveNotes btn']")
  await page.waitForTimeout(3000)

 const  expectdvalue = "My Name is Charlie";
 const actualtext = await page.locator("//span[@id='lineItemNotes-display-0']")
 await expect(actualtext).toHaveText(expectdvalue)

// await expect(Checkoutbutton).toBeDisabled()

 const deliveryvalidation = await page.locator("//div[@id='deliveryInformation']")
const isvisible = await deliveryvalidation.isVisible()
const postalcodevalue = "A1A1A1"
 if (isvisible)
   {
    const postalcode=await page.locator("//input[@id='newPostalCode']")
    await postalcode.type(postalcodevalue)
    await page.waitForTimeout(3000)
    await page.click("//a[@id='saveNewPostalCode']")
    await page.waitForTimeout(3000)
   }
   
   const Checkoutbutton = await page.locator("(//form/following-sibling::a[@class='btn btnPrimary gcomBuy'])[1]")
await Checkoutbutton.click()

const guestheading= await page.locator("//form//div[@class='checkoutBucket guestCheckoutBucket']/h3").textContent()
await expect(guestheading).toContain('Checkout as a Guest')
await page.click("//input[@id='guestCheckoutButton']")
await page.waitForTimeout(3000)

const shippingradio =await page.locator("(//div[@class='radio'])[1]").textContent()
await expect(shippingradio).not.toBeNull()
await page.waitForTimeout(3000)
await page.click("(//input[@id='pickupradio']")
await page.waitForTimeout(3000)
await page.type("//input[@id='pickup-companyName']","tata Steel")
await page.waitForTimeout(3000)
await page.type("//input[@id='firstName']","Bharat")
await page.type("//input[@id='lastName']","Bilochi")
await page.type("//input[@name='address1']","Delhi")
await page.type("//input[@name='addressLine2']","Delhi")
await page.type("//input[@id='city']","Delhi")
const dropdown = await page.locator("//select[@id='stateInfo']")
// await dropdown.selectOption({label :"MB"})
await dropdown.selectOption("CA-MB")
const zipcode = await page.locator("//input[@id='zipCode']")
await expect(zipcode).not.toBeEmpty()
await page.waitForTimeout(3000)
await page.type("//input[@id='workEmailID']","abc@gmal.com")
await page.type("//input[@id='workPhoneNumber']","5454545445")
await page.click("(//button[@class='btn btnPrimary gcDeliveryMethodNextBtn'])[2]")

await page.click("//a[text()='No, Continue with entered address']")

const valuecheck = await page.locator("//span[@id='nameOnCardMsg']")
await expect(valuecheck).toHaveText("This field is required")
await page.type("//input[@id='nameOnCard']","bahsdbas")
await page.type("//input[@id='cardNumber']","4111111111111111")
await page.type("//input[@id='guestCheckoutExpirationDate']","1225")
await page.click("//input[@name='sameAsDeliveryAddress']")
await page.click("(//input[@id='btnSubmit'])[2]")
await page.type("//input[@name='securityCode']","784")
await page.click("//a[@class='btn btnPrimary submitOrder-btn orderReviewCheckAvailability  ']")

})






// await page.type("(//input[@id='newPostalCode'])[1]","A1A1A1")
// await page.click("//a[@id='saveNewPostalCode']")
