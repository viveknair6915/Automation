const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    baseUrl: 'https://magento.softwaretestingboard.com',
    supportFile: false,
  },
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  video: true,
  screenshotOnRunFailure: true,
}); 