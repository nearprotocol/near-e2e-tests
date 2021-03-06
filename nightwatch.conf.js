module.exports = {
  src_folders: [
    'tests',
  ],
  test_runner: 'mocha',
  webdriver: {
    start_process: !getTestSettings().selenium_host,
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

function exitWithError(message) {
  console.error(message);
  process.exit(1);
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
        username: process.env.SELENIUM_USERNAME || exitWithError('Please set SELENIUM_USERNAME env variable'),
        access_key: process.env.SELENIUM_ACCESS_KEY || exitWithError('Please set SELENIUM_ACCESS_KEY env variable'),
        desiredCapabilities: {
          acceptSslCerts: '1',
          build: process.env.SELENIUM_BUILD || 'default',
          javascriptEnabled: '1',
          name: 'NEAR Studio',
          record_network: 'true',
          record_video: 'true',
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