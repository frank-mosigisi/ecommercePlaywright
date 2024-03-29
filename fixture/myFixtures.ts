import {test as myTest} from "@playwright/test"

// type mememan ={
//     age: number,
//     email: string
// }
const myFixture = myTest.extend<{

    age: number,
    email: string
}>({

    age: 27,
    email: "rrr@gmail.com"
})

export const test = myFixture
