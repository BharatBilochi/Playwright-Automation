
import { test, expect, Page } from '@playwright/test'
import { LoginPage } from '../Page-Object/LoginPage'
import { HomePage } from '../Page-Object/HomePage'
import { ContactUs } from '../Page-Object/ContactUs'

let loginpage: LoginPage
let homepage: HomePage
let contactus: ContactUs


//Before Hook
test.beforeEach(async ({ page }) => {
  loginpage = new LoginPage(page)
homepage = new HomePage(page)
contactus = new ContactUs(page)
  await homepage.visit()

})

test("Positive Scenario For Login", async ({ page }) => {
  await loginpage.LoginAsAccountUser("amit910@gmail.com", "Test@1234")
  await homepage.ClickOnSignButton()
  await homepage.SearchFor("BLDDCK280C2")

})

test("Negative Scenario For Login", async ({ page }) => {
  await loginpage.LoginAsAccountUser("Invalid Username", "Invalid Password")
  await homepage.ClickOnSignButton()
  await loginpage.ErrorMessage()
})

test.only("Contact Us Page", async ({ page }) => {

  await homepage.ScrollToContactUs()
  await homepage.contactusLink()
  await contactus.EmailClickLink()
  //await page.goto("https://agi-hylt.gcom.grainger.com/en/content/contactusPage")
 
 
 
  await contactus.contactus("Website Support", "HiPath", "545454", "Bharat", "Bilochi", "bharat@gmail.com", "9856124554", "Hi How are you")
  //await contactus.check()
  await contactus.sendbutton()
  await contactus.VerifyValidationMessageSendButton()
})