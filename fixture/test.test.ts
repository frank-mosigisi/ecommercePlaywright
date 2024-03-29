import {test} from "./myFixtures"


test('fixture demo', async ({ age, email }) => {
    
    console.log(age+15, email.toUpperCase)

})
