const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 30000,
  use: {
    baseURL: "http://localhost:4173",
  },
  webServer: {
    command: "npx serve -s build -l 4173",
    port: 4173,
    reuseExistingServer: false,
  },
});
