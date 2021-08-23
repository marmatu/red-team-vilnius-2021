const config = {
  "timeout": 60000,
  "use": {
    "browserName": "chromium", // Chrome is the only supported browser for this application
    "headless": false,
    "screenshot": "only-on-failure",
    "viewport": {
      "height": 1080,
      "width": 1920
    }
  }
};

module.exports = config;