const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('@shelex/cypress-allure-plugin/writer')(on, config);
      return config;
    },
    slowmo : 7000,
    experimentalRunAllSpecs: true,
    env: {
      allure: true
    },
  },
});
