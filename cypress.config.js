const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com', // Configure your E2E tests here
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,ts}',
  },
});
