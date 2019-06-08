module.exports = {
  src_folders: [
    'tests',
  ],
  test_runner: 'mocha',
  webdriver: {
    start_process: false,
    server_path: './node_modules/.bin/geckodriver',
    cli_args: [
      '--log',
      'debug',
    ],
    port: getTestSettings().selenium_port || 4444,
  },
  test_settings: {
    'default': getTestSettings()
  },
}

function getTestSettings() {
  switch (process.env.NODE_ENV) {
    case 'ci':
      return {
        launch_url: 'https://studio.nearprotocol.com',
        selenium_port: '80',
        selenium_host: 'hub.crossbrowsertesting.com',
        silent: true,
        screenshots: {
          enabled: false,
          path: '',
        },
        username: process.env.SELENIUM_USERNAME,
        access_key: process.env.SELENIUM_ACCESS_KEY,
        desiredCapabilities: {
          acceptSslCerts: '1',
          build: '1.0',
          javascriptEnabled: '1',
          name: 'NightwatchJSExample',
          record_network: 'false',
          record_video: 'false',
          browserName: 'Chrome',
          version: '74',
          platform: 'Windows 10',
          screen_resolution: '1024x768',
        },
      }
    case 'development':
    default:
      return {
        desiredCapabilities: {
          browserName: 'firefox',
          acceptInsecureCerts: true,
          alwaysMatch: {
            'moz:firefoxOptions': {
              args: [
                '-headless',
              ],
            },
          },
        },
      };
  }
}