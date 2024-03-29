import {Page} from '@playwright/test'
export default class HomePage{

    constructor (public page: Page){}

     async clickHomeMenuBtn (){
        await Promise.all([
             this.page.waitForLoadState("networkidle"),
             this.page.click("//span[text()[normalize-space()='Home']]")
        ])
     }
}