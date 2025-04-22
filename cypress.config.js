const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com', // Configure your E2E tests here
    specPattern: 'cypress/integration/**/*.{js,ts}',
    supportFile: 'cypress/support/e2e.js',
  },
});
