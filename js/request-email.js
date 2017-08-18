const request = require('request');
const chalk = require('chalk');

function requestEmail (uri, sessionCookie) {
  return new Promise((resolve, reject) => {
    console.log(chalk.green(`Making POST request to: ${uri}`));
    request.get({
      url: uri,
      headers: {
        session: sessionCookie
      }
    }, (error, response, body) => {
      console.log('Get request statusCode:' , chalk.yellow(response.statusCode));
      if (!error && response.statusCode==200){
        console.log('Received value: ', chalk.yellow(response.body));
        // var token = JSON.parse(response.body);
        // console.log(typeof token, token.token);
        // resolve(response.body);
        resolve();
      } else {
        reject('Could not connect to server: ', error);
      }
    });
  });
}

module.exports = {
  requestEmail: requestEmail
}
