const chalk = require('chalk');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function xmlReq(composedUrl){
  console.log(chalk.green(`Making xmlhttprequest to: ${composedUrl}`));
  return new Promise((resolve, reject) =>{
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      console.log('Current change state:', chalk.yellow(this.readyState));
      if (this.readyState ===4){

        console.log('Answers length: ', chalk.yellow(this.responseText.length));
        console.log('Answers Type: ', chalk.yellow(this.responseType));
        console.log('Answers status: ', chalk.yellow(this.status));
        console.log('Answers statusText: ', chalk.yellow(this.statusText));
        console.log('Answers Text: ', chalk.yellow(this.responseText));
        resolve (this.responseText);

      }
      reject('ReadyState never reached value=4');
    }
    xhr.open('GET', composedUrl, false);
    xhr.send(null);

})
}

module.exports = {
  xmlReq: xmlReq
}
