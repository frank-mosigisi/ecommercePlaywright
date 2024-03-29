import test, { expect} from '@playwright/test'
import RegisterPage from "../Pages/registration"
import loginPage from "../Pages/login"
import SpecialHotPage from "../Pages/specialHotPage"
import HomePage from '../Pages/homePage'

const email = 'babu@gmail.com'
const password = 'akukuDanger'


test.describe('POM style test for reg,login & add product to cart', () => {

    test('Register test_01', async({page, baseURL})=>{

        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`)
        await register.enterFirstName('mememan')
        await register.enterLastName('rara')
        await register.enterEmail(email)
        await register.enterTelephone('0122345674')
        await register.enterPassword(password)
        await register.confirmPassword(password)
        await register.clickTermCondition();
        await register.clickRegiserBtn()
    
    })
    
    test('login test_02', async ({ page, baseURL }) => {
    
        const login = new loginPage(page);
        await page.goto(`${baseURL}route=account/login`)
        await login.enterEmail(email);
        await login.enterPassword(password);
        await login.clickLoginBtn();
        expect (await page.title()).toBe("My Account")
    })
    
    test('add to cart test_03', async ({ page, baseURL }) => {
    
        const login = new loginPage(page);
        const HomeMenuBtn = new HomePage(page);
        const addToCart = new SpecialHotPage(page);
        await page.goto(`${baseURL}route=account/login`)
        await login.loginFunction(email, password);
        await HomeMenuBtn.clickHomeMenuBtn()
        await addToCart.hoverOverProduct()
        await addToCart.addProductToCart()
        const cartVisbile= await addToCart.assertcartClick()
        expect(cartVisbile).toBeVisible()    
    })
})


