import test from "@playwright/test";
import moment from "moment";

test('calender demo using fill/presssquentially', async ({ page }) => {
  
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    let date = "12-12-2012"
    await page.locator("#birthday").pressSequentially(date )
    await page.waitForTimeout(2000)
})

test.only('calender demo using moment', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

    await datePicker(4, "August 2021");

    async function datePicker(day: number, dateToSelect:string) {
        // this presses the date text box
        await page.getByPlaceholder("Start date").click();

        // The mmYY, prev, next are the locators on the datePicker
        const mmYY = page.locator('(//table[@class="table-condensed"]//th[@class="datepicker-switch"])[1]');
        const prev = page.locator('(//table[@class="table-condensed"]//th[@class="prev"])[1]');
        const next = page.locator('(//table[@class="table-condensed"]//th[@class="next"])[1]');

        // This is package that manipulates, Parse, validate and display dates 
        // We are using isBefore so that if the month & year are b4 we dont need to go through the loop
        const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();

        // This is loop function that loops through the datePicker and picks the date given to the datePicker function
        while (await mmYY.textContent() != dateToSelect) {
            if (thisMonth) {
                await prev.click();
            }
            else {
                await next.click();
            }
        }
        await page.click(`//td[text()='${day}']`);

        await page.waitForTimeout(1000);
    }
})

