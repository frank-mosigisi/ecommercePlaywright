import test, { expect } from "@playwright/test";
import exp from "constants";

test("Basic interactions", async({page}) =>{

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    //we are writing out an assertion
    const messageInput =  page.locator("(//input[@id='user-message'])[1]")
    // This can be used when we want to scroll to that particular element
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"))
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message")
    // this is used like this since we already have the attribute now 
    console.log(await messageInput.inputValue())

    await messageInput.fill("Hi world")
    await page.waitForTimeout(2000)
})

test('addition test', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sum1Input =page.locator("#sum1")
    const sum2Input =page.locator("#sum2")

    const addition = page.locator("//button[text()='Get Sum']")
     let num1 = 666;
     let num2 = 888;
    
    //used mostly when we have some data in the box and want to remove it and fill it with new data
    await sum1Input.fill("" + num1);
    //this used to be type but got depreciated with this one below
    await sum2Input.pressSequentially("" + num2);
    await addition.click()

    const result = page.locator("#addmessage")

    let expectedResult = num1 + num2
    expect(result).toHaveText(""+ expectedResult)  
})

test("checkBox test", async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
    // we can use id= or # to select an id locator
    const singleCheckbox = page.locator("id=isAgeSelected")
    // this assertion checks if the checkbox is not checked
    expect (singleCheckbox).not.toBeChecked();
    // This action clicks on the checkbox. Click can be used to but this is advised instead
    await singleCheckbox.check();
    // This assertion now checks if the checkbox is now checked
    expect (singleCheckbox).toBeChecked();

})