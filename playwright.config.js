const config = {
  "timeout": 40000,
  "use": {
    "browserName": "chromium",
    "headless": false,
    "screenshot": "only-on-failure",
    "viewport": {
      "height": 1080,
      "width": 1920
    },
    launchOptions: {
      slowMo: 750,
    },
  }
};

module.exports = config;