// put chcp 65001 in console

const casper = require('casper').create({
    pageSettings: {
        loadImages: false,
        encoding: 'utf8'
    },
    verbose: true,
    // clientScripts: ['https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js']
});

function doStuff() {
    this.echo('Performing actions on each page');
    this.echo('Making the screenShot');
    casper.page.render('./playground/page.png');
    casper.sendKeys('#token', '19df733c059c54dfb0019fa22faa5684');
}
casper.start('https://zdorov-group.eu/vacancy', function() {
    this.echo('Page title: ' + this.getTitle());
});
casper.then(doStuff);
casper.then()
casper.run();
