const request = require('request');
const chalk = require('chalk');

var getPage = require('./get-request.js');
var getValues = require('./get-values.js')

var hiddenUri='';
var hiddenCode='';

console.log('aaa');
getPage.getPage('https://zdorov-group.eu/vacancy')
  .then(
    (page) =>{
      getValues.getValues(page).then(
        (data) => {
          console.log(data);
          hiddenUri=data.uri;
          hiddenCode=data.code;
        }
      )
  }).catch((e)=>{console.log(e);})



// console.log(chalk.green(`Making POST request to ${hiddenUri}`));
