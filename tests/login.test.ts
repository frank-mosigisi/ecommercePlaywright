import {chromium, test} from "@playwright/test"

// this is a test block
test("Login test demo", async() =>{

  // this will launch a browser and store it in an instance
  const browser = await chromium.launch({
    headless: false
  });
  // we use context since its going to give us a new browser context
  const context = await browser.newContext()
  // from the context we will create a new page/tab
  const page = await context.newPage();

  await page.goto("https://ecommerce-playground.lambdatest.io/")
  //hovered over my account 
  await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span')
  // await page.click("text=Login")
  await page.click("'Login'")
  await page.fill("input[name='email']", "admin200@gmail.com")
  await page.fill("input[placeholder='Password']", "ta5XWbym3AsV9@3")
  await page.click("//input[@value='Login']")
  
  await page.waitForTimeout(5000)

  //This is used when u want to open a new tab in the same browser which will have the same session as the previous one
  const page1= await context.newPage();
  await page1.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/password")

  await page.waitForTimeout(5000)

  //This is used when you want a new context that does not have the previous session
  const newContext = await browser.newContext();
  const newPage = await newContext.newPage();
  await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/password")

  await newPage.waitForTimeout(5000)




})