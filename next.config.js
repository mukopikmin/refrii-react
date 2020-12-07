const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  env: {
    appName: 'myPantry',
    apiEndpoint: 'https://api.mypantry.muko.app'
  },
  webpack: (config) => {
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ]

    return config
  },
}
