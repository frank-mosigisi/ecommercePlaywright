import {test, expect} from "@playwright/test"
test('Interact with frames', async ({ page }) => {
    
    await page.goto("https://letcode.in/frame");
    // we want to find out how many frames we have
    const allframes = page.frames();
    console.log("No of frames " + allframes.length )

    // This is the first way of interacting with frames
    const myFrame = page.frame("firstFr")
    expect(await myFrame?.locator("h1.title").textContent()).toContain("Details")
    ////optional chaining to say if the frame exists we can fill it with the data if not its null hence the ?.
    // //This one below is the way to write it in the normal way
    // if (myFrame != null){
    //     await myFrame.fill("","")
    // }
    await myFrame?.fill("input[name='fname']","mememan")
    await myFrame?.fill("input[name='lname']","memecow")
    // This is an asset statement inside the iframe
    expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("entered")

    //This is a second way of interacting with frames
    const frame = page.frameLocator("#firstFr")
    await frame.getByPlaceholder("Enter name").fill("mememan")
    await frame.locator("input[name='lname']").pressSequentially("rara")   
})

test.only('Interacting with nested frames', async ({ page }) => {
    await page.goto("https://letcode.in/frame");
    
    // we will call the outer frame first
    const outerFrame = page.frameLocator("#firstFr")
    //This is the inner frame now being called
    const innerFrame= outerFrame.frameLocator("iframe[src='innerFrame']")
    // we now have the innerframe we can now interact with the specific elements
    await innerFrame.locator('input[name="email"]').pressSequentially("keke@gmail.com")  
})
