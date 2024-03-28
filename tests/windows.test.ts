import test from "@playwright/test";

test('Interact with windows popups', async ({ page }) => {
  
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")
    
    console.log(page.url())
    // Since we need to perfom simultanous actions at once we use a promise
    // we wait for the popup as we click the locator at the same time
    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.locator('a[title="Follow @Lambdatesting on Twitter"]').click()
    ]);

    console.log(newWindow.url())

    // if we wanted to interact with the popup now we do this thru newWindow
    // newWindow.fill("", "")

    // //HANDLING MULTIPLE WINDOW POPUPS

    const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click('id=followboth')
    ])
    // this waits till all pages opened in the popups are loaded completely
    await multiPage.waitForLoadState()
    
    //This is just a way to see how many pages we have
    const pages = multiPage.context().pages();
    console.log('No of tabs: ' +pages.length);

    //// a way to maybe interact with the said page
    // await pages[1].fill("","rara")
})
