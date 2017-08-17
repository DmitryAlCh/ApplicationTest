const cheerio = require('cheerio');
const chalk = require('chalk');

function getValues(page){
  return new Promise((resolve, reject) => {
    console.log(chalk.bold.green('results:'));
    var $ = cheerio.load(page);
    var taskList = $('ol > li > ol').children('li').text();
    var hiddenId ='#';
    var hiddenClass ='code-';
      for (var i = 0; i < taskList.length; i++){
        if (taskList.startsWith('ид = ', i)){
          // console.log('index of Id =', i);
          hiddenId+= taskList.substr(i+5,3);
          console.log('HidenId: ', chalk.yellow(hiddenId));
        };
        if (taskList.startsWith('содержащим', i)){
          // console.log('index of Class =', i);
          hiddenClass+= taskList.substr(i+11,6);
          console.log('HidenClass: ', chalk.yellow(hiddenClass));
        }
      };
        // !
      hiddenClass+=' correct';
      var uriObj = JSON.parse($(hiddenId).text());
      var hiddenUri = uriObj.data.URI;
      console.log('Hiden URI: '+ chalk.yellow(hiddenUri));
      var hiddenCode="";

      $('i').each(function(i, element){
        // console.log($(this).attr('class'));
        if ($(this).attr('class')=== hiddenClass){
          // global
          hiddenCode+=$(this).text();
          console.log('HiddenCode inside class: ' + chalk.yellow(hiddenCode));
          return;
      }
    });
        if(hiddenUri.length===0 || hiddenCode.length===0){
          reject('Either Uri or secret code not found on page');
        }
        resolve({uri: hiddenUri, code: hiddenCode});
  });
}


module.exports = {
  getValues : getValues
}
