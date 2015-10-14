let Config = {};
try{
  Config = require('../../../../config/app.config.js');
} catch(e){
  console.log('Could not load config file!');
}

export default Config;
