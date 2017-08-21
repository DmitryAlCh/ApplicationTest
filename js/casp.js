// put chcp 65001 in console

const casper = require('casper').create({
    pageSettings: {
        loadImages: false,
        encoding: 'utf8'
    },
    verbose: true,
    // clientScripts: ['https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js']
});




function readValue(){
  return document.querySelector('div p').value;
}
casper.start('https://zdorov-group.eu/vacancy', function() {
    this.echo('Page title: ' + this.getTitle());
    this.echo('current value:', this.fetchText('body'));
});
casper.thenEvaluate(function(){
  document.querySelector('input[name="submitme"]').setAttribute('value', 'shdsjhbsjhdbd');
});



// casper.then( function(){
//   if (this.exists('#token')){
//     this.echo('Element exists for the 2 time', 'INFO');
//     this.echo('text of the fetched element: '+this.fetchText('#token'));
//   } else{
//     this.echo('Element does not exist');
//   }
// });
casper.run();
