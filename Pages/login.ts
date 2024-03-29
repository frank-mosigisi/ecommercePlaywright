import {Page} from '@playwright/test'
export default class loginPage{

    constructor(public page: Page){}

    async loginFunction( email: string , password: string){
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLoginBtn();
    }

    async enterEmail(email: string){
        await this.page.locator('id=input-email')
            .pressSequentially(email);
    }

    async enterPassword (password: string){
        await this.page.locator("#input-password")
            .pressSequentially(password)
    }

    async clickLoginBtn (){

        await Promise.all([
            this.page.waitForLoadState(),
            this.page.click('//input[@type="submit"]')
        ])
    } 
}