module.exports = {
    "src_folders" : "nightwatch/tests",    
    "page_objects_path" : "nightwatch/pages",

    "selenium" : {
      "start_process" : true,
      "server_path" : properties.resourcePath + properties.seleniumServer,
      "log_path" : "",
      "port" : 4445,
      "cli_args" : {
        "webdriver.chrome.driver" : './seleniumAndDrivers/chromedriver.exe',
        "webdriver.edge.driver" : './seleniumAndDrivers/MicrosoftWebDriver.exe',
        "webdriver.gecko.driver" : './seleniumAndDrivers/geckodriver.exe',

      }
    },
  
    "test_settings" : {
      "default" : {
        "launch_url" : "http://localhost",
        "selenium_port"  : 4445,
        "selenium_host"  : "localhost",
        "silent": true,
        "screenshots" : {
          "enabled" : false,
          "path" : ""
        },
        "desiredCapabilities": {
          "browserName": "chrome",
        }
      },
  
      "firefox" : {
        "desiredCapabilities": {
          "browserName": "firefox",
          "marionette": true
        }
      },
  
      "edge" : {
        "desiredCapabilities": {
          "browserName": "MicrosoftEdge",
          "marionette": true
        }
      },
      
      "workers" : "auto",
    }
  }