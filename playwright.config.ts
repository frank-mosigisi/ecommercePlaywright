import { defineConfig } from '@playwright/test';

export default defineConfig({
 //it accepts an array or we can run single tests
  // testMatch: ["Login.test.ts"]
  testMatch: ["tests/codegen.test.ts"],
  use: {headless: false,
    //this section we have put it to record a screenshot and video when test is running
      screenshot: "only-on-failure",
      video: "retain-on-failure"
  },
  retries: 1,
  //this is just a way to save reports about your tests
  reporter: [["dot"], ['json', {
    outputFile: "Jsonreport/jsonReport.json"
  }], ["html",{
    open: "on-failure"
  }]],
});
