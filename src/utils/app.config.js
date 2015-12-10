/***********************************
* Configuration template for webapp
* Replace placeholder values with
* correct values. Then copy the
* config file to a folder named
* 'config' This folder MUST be
* a sibling to the main webapp
* folder.
*/

let config = {
  hostname: 'stagingapp.trading.football', //The site's hostname
  httpPort: 5000, //The port the http site will be run on
  httpsPort: 5443, //The port the https site will be run on
  apiURL: 'https://stagingapi.trading.football:4545' //The URL for the api
}

export default config;
