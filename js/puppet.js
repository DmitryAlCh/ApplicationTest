const puppeteer = require('puppeteer');
const chalk = require('chalk');

function fillForm(uri, token){
  // console.log('token type and value inside chromium: '+ chalk.yellow(typeof token) +' '+chalk.yellow(token));
    return new Promise((resolve, reject)=>{
    puppeteer.launch().then(async browser => {
      const page = await browser.newPage();

      page.on('console', (...args)=>{
        for(var i=0; i< args.length; i++){
          console.log(`Message thrown to console: ${i}: ${args[i]}`);
        }
      });

      await page.goto(uri, {waitUntil: 'networkidle'});

      await page.evaluate((uri, token)=>{
         console.log(`token inside evaluate function ${token} `+typeof token);
         console.log(`uri inside evaluate function ${uri} `+typeof uri);
         document.querySelector('#token').setAttribute('value', token);
      }, uri, token);


      await page.evaluate(()=>{
        console.log('submit();');
        console.log('submit');
        console.log('window.submit();');
      })
     const inputField = await page.evaluate(() => {
          const inputs = document.querySelector('#token').outerHTML;
          return inputs;
          // return inputs.map(input => input.outerHTML);
        });
        const divResult = await page.evaluate(() => {
           const anchors = Array.from(document.querySelectorAll('#result'));
           return anchors.map(anchor => anchor.outerHTML);
         });

       console.log('OuterHTML of the result DIV:',divResult.join('\n'));
       console.log('OuterHTML of the InputField:',inputField);
       browser.close();
       resolve();

    });
  });
}

module.exports = {
  fillForm: fillForm
}
