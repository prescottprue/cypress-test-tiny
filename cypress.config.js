const webpackPreprocessor = require('@cypress/webpack-batteries-included-preprocessor')

function getWebpackOptions () {
  const options = webpackPreprocessor.getFullWebpackOptions()

  options.resolve.fallback.crypto = require.resolve('crypto-browserify')

  return options
}

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on(
        'file:preprocessor',
        webpackPreprocessor({
          // if using typescript, you will need to set the typescript option to true
          typescript: true,
          webpackOptions: getWebpackOptions(),
        }),
      );
    },
  },
}
