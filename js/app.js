const request = require('request');
const chalk = require('chalk');

var getPage = require('./get-request.js');
var getValues = require('./get-values.js')
var postValues = require('./post-data.js');
// var enterToken = require('./osmo.js');
var xml = require('./xml-request.js');

var hiddenToken = '';
var baseUrl = 'https://zdorov-group.eu/vacancy';


getPage.getPage(baseUrl)
  .then(
    (page) => {
      getValues.getValues(page).then(
        (data) => {
          console.log(data);
          postValues.postValues(data.uri, data.code, data.cookie).then(
            (token) => {
              xml.xmlReq(data.uri+'?token='+token).then(
                (base64email) =>{

                }
              )
            });
        }
      )
    }).catch((e) => {
    console.log(e);
  })



// console.log(chalk.green(`Making POST request to ${hiddenUri}`));
