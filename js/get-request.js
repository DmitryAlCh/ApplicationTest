const request = require('request');
const chalk = require('chalk');

function getPage(uri){
  return new Promise((resolve, reject) => {

    console.log(chalk.green(`Making Get request to ${uri}`));
    request(uri, (error, response, body) => {
      // console.log(response.headers['set-cookie']);
      // console.log(response.body);
      if (!error && response.statusCode==200){
        var cookie = response.headers['set-cookie'][0];
        // console.log(cookie);
        // console.log(typeof response.body);
        // console.log(response.body.length);
        if (response.body.length>1 && cookie.length>1){
            resolve({page:response.body, cookie: cookie});
          } else {
            reject('response.body string is too short to be true or Cookie does not exist');
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
