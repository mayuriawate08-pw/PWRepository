import { Locator, Page } from "@playwright/test";
export class LoginPage{
    page:Page
    email:Locator 
    password:Locator
    loginButton:Locator
    errormessage:Locator
    homePageIdentifier:Locator

    //create a constructor
    //all the locators goes inside the constructor
    constructor(page:Page){
        this.page=page
        this.email=this.page.getByPlaceholder('email@example.com')
        this.password=this.page.locator('#userPassword')
        this.loginButton=this.page.locator('#login')
        this.errormessage=this.page.getByText('Incorrect email or password.')
        this.homePageIdentifier=this.page.locator('.fa.fa-sign-out')
    }
    async launchUrl(url:string)
    {
        await this.page.goto(url)        
    }
    async loginIntoApplication(username:string,password:string){
        await this.email.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }
    async loginname(username:string){
        await this.email.fill(username)
    }
    async pass(password:string){
        await this.password.fill(password)
    }
}