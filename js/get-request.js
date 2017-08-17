const request = require('request');
const chalk = require('chalk');

function getPage(uri){
  return new Promise((resolve, reject) => {

    console.log(chalk.green(`Making Get request to ${uri}`));
    request(uri, (error, response, body) => {
      console.log(response.statusCode);
      if (!error && response.statusCode==200){
        // console.log(typeof response.body);
        // console.log(response.body.length);
        if (response.body.length>1){
            resolve(response.body);
          } else {
            reject('response.body string is too short to be true');
          }
        } else {
        console.log(chalk.cyanBright('Could not connect to server: ')+error);
        reject(error);
      }
    });
  });
}

module.exports = {
  getPage : getPage
}
