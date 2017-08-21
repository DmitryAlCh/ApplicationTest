const request = require('request');
const chalk = require('chalk');

function postValues (uri, code, sessionCookie) {
  return new Promise((resolve, reject) => {
    console.log(chalk.green(`Making POST request to: ${uri}`));
    request.post({
      url: uri,
      headers: {
        pagecode: code,
        session: sessionCookie
      }
    }, (error, response, body) => {
      console.log('Post request statusCode:' , chalk.yellow(response.statusCode));
      if (!error && response.statusCode==200){
        console.log('Received token: ', chalk.yellow(response.body));
        var token = JSON.parse(response.body);
        // console.log(typeof token.token, token.token);
        // resolve(response.body);
        resolve(token.token);
      } else {
        reject('Could not connect to server: ', error);
      }
    });
  });
}

module.exports = {
  postValues: postValues
}
