import { expect, Locator, Page} from "@playwright/test";


export class HomePage
{
//Define Selector
readonly page : Page
readonly SignButton : Locator
readonly SearchBox : Locator
readonly contactuslink : Locator

//Initialize the Selector using Constructor

constructor(page: Page)
{
this.page = page
this.SignButton =  page.locator("//input[@id='authenticationform-submit-widget']")
this.SearchBox = page.locator("//input[@id='search']")
this.contactuslink = page.locator("//a[text()='Contact Us']")
}

//Define login Page Method

async visit()
{
  await this.page.setViewportSize({ width: 1532, height: 870 })
  await this.page.goto("https://agi-hylt.gcom.grainger.com/en")
//  await this.page.waitForLoadState()
}

async ClickOnSignButton() {

  await this.SignButton.click()
}

async SearchFor(search: string)
{
await this.SearchBox.type(search)
await this.page.keyboard.press("Enter")

}
async contactusLink(){

  await this.contactuslink.click()
}
async ScrollToContactUs()
{
  await this.page.mouse.move(71, 185)
  await this.page.mouse.down()
  await this.page.mouse.move(184, 382)
  await this.page.mouse.up()
}
}
