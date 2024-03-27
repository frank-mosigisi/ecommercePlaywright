import { defineConfig } from '@playwright/test';

export default defineConfig({
 //it accepts an array or we can run single tests
  // testMatch: ["Login.test.ts"]
  testMatch: ["tests/dropdown.test.ts"],
  use: {headless: false,
    //this section we have put it to record a screenshot and video when test is running
      screenshot: "only-on-failure",
      video: "retain-on-failure",
      // this options slows down our tests so that they can be seen by the user when running
      launchOptions: {
        slowMo:1000
      }
  },
  retries: 0,
  //this is just a way to save reports about your tests
  reporter: [["dot"], ['json', {
    outputFile: "Jsonreport/jsonReport.json"
  }], ["html",{
    open: "on-failure"
  }]],
});
