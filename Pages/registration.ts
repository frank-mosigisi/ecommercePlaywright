import { Page } from "@playwright/test"
export default class RegisterPage{

    constructor(public page: Page){

    }
    async enterFirstName(firstname: string){
        await this.page.locator('#input-firstname')
            .pressSequentially(firstname);
    }
    async enterLastName(lastname: string){
        await this.page.locator('#input-lastname')
            .pressSequentially(lastname);
    }
    async enterEmail(email: string){
        await this.page.locator('#input-email')
            .pressSequentially(email);
    }
    async enterTelephone(phone: string){
        await this.page.locator('#input-telephone')
            .pressSequentially(phone);
    }
    async enterPassword(password: string){
        await this.page.locator('id=input-password')
            .pressSequentially(password);
    }
    async confirmPassword(password: string){
        await this.page.locator('id=input-confirm')
            .pressSequentially(password);
    }
    async isSubscribeChecked(){
        return this.page.locator("//label[@for='input-newsletter-no']");
    }
    async clickTermCondition(){
        await this.page.check("//label[@for='input-agree']");
    }

    async clickRegiserBtn(){
        await Promise.all([
            this.page.waitForLoadState("networkidle"),
            this.page.click("//input[@type='submit']")
        ])
    }
}