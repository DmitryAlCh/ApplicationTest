const request = require('request');
const chalk = require('chalk');

function requestEmail (uri, sessionCookie) {
// console.log('Provided sessionCookie: ', chalk.green(sessionCookie));
  return new Promise((resolve, reject) => {
    console.log(chalk.green(`Making POST request to: ${uri}`));
    request.get({
      url: uri,
      headers: {
        'Accept':'*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-Us,en;q=0.8,lv;q=0.6,ru;q=0.4',
        'Connection': 'keep-alive',
        'Cookie': 'PHPSESSID='+sessionCookie,
      }
    }, (error, response, body) => {
      console.log('Get request statusCode:' , chalk.yellow(response.statusCode));
      if (!error && response.statusCode==200){
        console.log('Received value: ', chalk.yellow(response.body));
        if ((response.body!=='wrong token') || (response.body!=='wrong session')){
          resolve(response.body);
        }

      } else {
        reject('Could not connect to server: ', error);
      }
    });
  });
}

module.exports = {
  requestEmail: requestEmail
}
