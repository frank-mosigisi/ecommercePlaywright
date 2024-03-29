import {test, expect} from '../base/formFixture'
import * as data from "../test-data/addCart.json"

test.describe('POM style test for reg,login & add product to cart', () => {

    test('Register test_01', async({page, baseURL, registerPage})=>{

        await page.goto(`${baseURL}route=account/register`)
        await registerPage.enterFirstName(data.firstname)
        await registerPage.enterLastName(data.lastname)
        await registerPage.enterEmail(data.emailAddress)
        await registerPage.enterTelephone(data.phoneNumber)
        await registerPage.enterPassword(data.password)
        await registerPage.confirmPassword(data.password)
        await registerPage.clickTermCondition();
        await registerPage.clickRegiserBtn()
    
    })
    
    test('login test_02', async ({ page, baseURL, loginPage }) => {
    
        await page.goto(`${baseURL}route=account/login`)
        await loginPage.enterEmail(data.emailAddress);
        await loginPage.enterPassword(data.password);
        await loginPage.clickLoginBtn();
        expect (await page.title()).toBe("My Account")
    })
    
    test('add to cart test_03', async ({ page, baseURL, loginPage, homePage, normalPage }) => {
    
        await page.goto(`${baseURL}route=account/login`)
        await loginPage.loginFunction(data.emailAddress, data.password);
        await homePage.clickHomeMenuBtn()
        await normalPage.hoverOverProduct()
        await normalPage.addProductToCart()
        const cartVisbile= await normalPage.assertcartClick()
        expect(cartVisbile).toBeVisible()    
    })
})


