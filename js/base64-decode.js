chalk = require('chalk');

function decode (base64String){
  var buf = Buffer.from(base64String, 'base64');
  var utfString = buf.toString('utf8');
  console.log('Decoded email: ', chalk.bold.yellow(utfString));
  return utfString;
}

module.exports={
  decode: decode
}
