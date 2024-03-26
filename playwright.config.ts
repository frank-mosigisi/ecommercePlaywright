import { defineConfig } from '@playwright/test';

export default defineConfig({
 //it accepts an array or we can run single tests
  // testMatch: ["Login.test.ts"]
  testMatch: ["tests/login.test.ts"]
});
