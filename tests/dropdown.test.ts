import test, { expect } from "@playwright/test";

test('handling dropdown', async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    // This is used to handle dropdowns
    await page.selectOption('#select-demo',{
        //// We can use label, value or even index depending on what is available
        //  label: "Thursday"
        //  value: "Thursday"
        index: 5
    })
    expect(page.locator("//p[@class='selected-value text-size-14']")).toContainText("Thursday")

    // With a multi-select dropdown to select muliple items we use [] as an array and then {} for each item in the array
    await page.selectOption('#multi-select',[
        {index: 3},
        {label : "Texas"},
        {value: "Ohio"}
    ])
})

test.only('Bootstrap/Jquery dropwdown', async ({ page }) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo')
    // basic way of selecting an option from a jquery dropdown
    await page.click("(//span[@role='combobox'])[1]")
    await page.fill("(//input[@role='textbox'])[2]", "Denmark")
    await page.press("(//input[@role='textbox'])[2]", 'Enter');

    // we can run this as a function too
    await selectCountry("India");
    await selectCountry("Australia");
    async function selectCountry(countryName: string) {
        await page.click("(//span[@role='combobox'])[1]");
        await page.locator("ul#select2-country-results").locator("li",{
            hasText: countryName
        }).click();
    }
})

