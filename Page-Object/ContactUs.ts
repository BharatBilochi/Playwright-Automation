import { Expect,Page,Locator, expect } from "@playwright/test";


export class ContactUs{

    //Define Selectors
    readonly page : Page
    readonly subject :Locator
    readonly company : Locator
    readonly AccountNumber : Locator
    readonly FirstName : Locator
    readonly LastName : Locator
    readonly Email : Locator
    readonly Phone : Locator
    readonly MessageBox : Locator
    readonly checkbox : Locator
    readonly Sendbutton :Locator
    readonly EmailLink : Locator
    readonly SendError : Locator
    //Initialize the Selector using Constructor

    constructor(page:Page)
    {
        this.page = page
        this.subject = page.locator("//select[@id='subject']")
        this.company = page.locator("//input[@id='company']")
        this.AccountNumber = page.locator("//input[@id='accountNumber']")
        this.FirstName = page.locator("//input[@id='firstName']")
        this.LastName = page.locator("//input[@id='lastName']")
        this.Email = page.locator("//input[@id='email']")
        this.Phone = page.locator("//input[@id='phone']")
        this.MessageBox   = page.locator("//textarea[@id='message']") 
        this.checkbox = page.locator("//span[@class='recaptcha-checkbox goog-inline-block recaptcha-checkbox-unchecked rc-anchor-checkbox']")
        this.Sendbutton= page.locator("//a[@id='submitContactForm']")
        this.SendError =  page.locator("//div[text()='Your request cannot be processed. Please complete all necessary information.']")
        
        this.EmailLink =page.locator("//img[@alt='Send Us a Message']")
    }
        //Method For Selector

        async contactus(
            subj :string,
            comp:string,
            accountnumber :string,
            firstname :string,
            lastname:string,
            email:string,
            phone:string,
            messagebox:string)
            {

            await this.subject.selectOption(subj)    
            await this.company.type(comp)
            await this.AccountNumber.type(accountnumber)
            await this.FirstName.type(firstname)
            await this.LastName.type(lastname)
            await this.Email.type(email)
            await this.Phone.type(phone)
            await this.MessageBox.type(messagebox)
        
        }
    //    // async check(){

    //         await this.checkbox.click()
    //         await this.page.waitForLoadState()
    //     }
        
        async sendbutton()
        {
            await this.Sendbutton.click()
        }

     
        async EmailClickLink(){

            await this.EmailLink.click()

        }
       
async VerifyValidationMessageSendButton(){
    const values = "Your request cannot be processed. Please complete all necessary information.";
   const actualvalue=await this.SendError.textContent()
    await expect(values).toBe(actualvalue)
  
}
}
