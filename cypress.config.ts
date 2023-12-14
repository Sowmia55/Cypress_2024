const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com",
  },
  

  retries: {
    runMode: 1,

  },
  projectId: '3tqx64',

  e2e: {
    specPattern: 'cypress/integration/web-ui-scripts/*.spec.js'

  },
});
