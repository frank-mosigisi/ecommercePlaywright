import { test } from "@playwright/test";

test('Download Files', async ({ page }) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo")
    await page.locator("id=textbox").pressSequentially("hello world")
    await page.click("#create")

    // when using pormise we should not use await inside it
    // when donwloading files we need to use a promise
    const [download]= await Promise.all([
        page.waitForEvent("download"),
        page.click("id=link-to-download")
    ])
    const fileName = download.suggestedFilename()
    await download.saveAs(fileName);
    // const path = await download.path();
    // console.log("file is here: " + path)

})

test('Upload files', async ({ page }) => {
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/")
    // when uploading files we dont use click rather we use
    // we use an array if we have multiple files we are uploading at a go
    page.setInputFiles('input[type="file"]', ['/upload-test.jpg'])
                
            // // // // OR // // //

    const [fileUpload] = await Promise.all ([
        page.waitForEvent("filechooser"),
        page.click('input[type="file"]')
    ])
    await fileUpload.setFiles(['upload-test.jpg', 'upload-test1.jpg'])
})


