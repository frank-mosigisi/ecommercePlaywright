import {Page} from '@playwright/test'
export default class SpecialHotPage{

    constructor(public Page: Page){}

    
    async hoverOverProduct(){
        await this.Page.hover("(//div[@aria-label='2 / 24']//div)[1]")
    }
    async addProductToCart(){
        await this.Page.click('(//button[@class="btn btn-cart cart-29"])[1]')
    }
    async assertcartClick(){
        const toast = this.Page.locator("//a[contains(.,'View Cart')]")
        await toast.waitFor({state:"visible"})
        return toast


    }


}