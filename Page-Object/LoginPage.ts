import { Expect,Locator,Page, expect } from "@playwright/test";

export class LoginPage
{
    //Define Selector
readonly Page: Page
readonly UsernameInput: Locator
readonly PasswordInput: Locator
readonly SubmitButton : Locator
readonly erroralert   : Locator

//init the Selector using constructor

constructor(page: Page)
{
this.Page = page
this.UsernameInput = page.locator("//input[@id='j_username']")
this.PasswordInput = page.locator("//input[@id='j_password']")
this.SubmitButton  = page.locator("//input[@id='authenticationform-submit-widget']")
this.erroralert    = page.locator("//div[@class='alert error negative']")
}

//Define login Page Method

async visit()
{

    await this.Page.goto("https://agi-hylt.gcom.grainger.com/en")
}

async LoginAsAccountUser(username : string,  password : string)
{
   await this.UsernameInput.type(username)
   await this.PasswordInput.type(password)
   await this.SubmitButton.click()
   await this.Page.waitForLoadState()


}

async ErrorMessage()
{
    await expect(this.erroralert).toContainText("Your User ID and/or Password is incorrect. Please, try again.")
}

}