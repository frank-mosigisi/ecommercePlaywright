import test, { expect } from "@playwright/test";

test("alert demo 1", async ({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    
    //We have an event listener to handle the alert
    page.on('dialog',async (alert)=> {
        // we use message when we want to read the message of the alert like in a console
        const text = alert.message();
        console.log(text)
        // an assertion to check if the right prompt was displayed
        expect(text).toContain("I am an alert box!")
        //  used to accept the prompt like click the ok
        await alert.accept();
    } )

    // when we have multiple btns with same text we use nth to distinguish them
    await page.locator("button:has-text('Click Me')").nth(0).click();
})

test('alert demo 2', async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

    page.on("dialog", async (alert) => {
        // Here instead we used the dismiss button to cancel the alert
        await alert.dismiss();
    })
    await page.locator("button:has-text('Click Me')").nth(1).click();
    // this assertion with containText checks if the locator has a partial match to the text
    expect(page.locator('#confirm-demo')).toContainText('Cancel!')
})

test('prompt box', async ({ page }) => {
   
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

    page.on("dialog", async (alert) => {
        // we use the defaultValue we want to get the data that is in the prompt alert
        alert.defaultValue()
        // we use accept when we want to add some info into the promptbox
        await alert.accept('mememan');
    })
    await page.locator("button:has-text('Click Me')").nth(2).click();
    // this assertion with containText checks if the locator has a partial match to the text
    expect(page.locator('id=prompt-demo')).toContainText('mememan')
})

test('Bootstrap/modal alert', async ({ page }) => {
    
    await page.goto ('https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo')
    await page.click("//button[@data-target='#myModal']")
    await page.click("(//button[text()='Save Changes'])[1]")
})

