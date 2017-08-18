const chromeLauncher = require('chrome-launcher');
const CDP = require('chrome-remote-interface');

function enterToken(baseUrl, token){

  (async function() {
    async function launchChrome() {
      return await chromeLauncher.launch({
        chromeFlags: [
          '--disable-gpu',
          '--headless'
        ]
      });
    }
    const chrome = await launchChrome();
    const protocol = await CDP({
      port: chrome.port
    });
    const {
      DOM,
      Page,
      Emulation,
      Runtime
    } = protocol;
    await Promise.all([Page.enable(), Runtime.enable(), DOM.enable()]);
    // ALL FOLLOWING CODE SNIPPETS HERE
    Page.navigate({url: baseUrl});
    Page.loadEventFired(async() =>{
      const script1 = document.getElemntById('#token').value = token;
      const res = await Runtime.evaluate({
        expression: script1
      });
    });
    protocol.close();
    chrome.kill();

// ////////////////////////////////////////////
  })();
}
