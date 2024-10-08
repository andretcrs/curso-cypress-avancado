const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    screenshotsFolder: './cypress/screenshots',
    setupNodeEvents (on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://wlsf82-hacker-stories.web.app'

  }
})
