import {test as baseTest} from "@playwright/test"

import RegisterPage from "../Pages/registration"
import loginPage from "../Pages/login"
import SpecialHotPage from "../Pages/specialHotPage"
import HomePage from '../Pages/homePage'

type pages ={
    registerPage: RegisterPage;
    loginPage: loginPage;
    homePage: HomePage;
    normalPage: SpecialHotPage;
    
}

const testPages =baseTest.extend<pages>({

    registerPage: async ({page},use)=> {
        await use(new RegisterPage(page));
    },

    loginPage: async ({page}, use) => {
        await use (new loginPage(page));
    },
    homePage: async ({page}, use) => {
        await use (new HomePage(page));
    },
    normalPage: async ({page}, use) => {
        await use (new SpecialHotPage(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;