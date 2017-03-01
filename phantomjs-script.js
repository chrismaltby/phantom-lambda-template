// console.log('start phantom');
// setTimeout(function() {
//     console.log('Boo from phantom');
//     phantom.exit();
// }, 1000);

// console.log('start phantom');
var page = require('webpage').create();
page.open('http://github.com/', function() {
  // console.log('Boo from phantom');
  var base64 = page.renderBase64('PNG');
  console.log(base64);
  phantom.exit();
});