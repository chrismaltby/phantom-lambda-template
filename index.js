
var AWS = require('aws-sdk');
var phantomjs = require('phantomjs-prebuilt');

exports.handler = function(event, context, callback) {
    // console.log('I am on master');
    var phantom = phantomjs.exec('phantomjs-script.js', 'arg1', 'arg2');

    var data = '';

    phantom.stdout.on('data', function(buf) {
        // console.log('[STR] stdout "%s"', String(buf));
        // console.log('[STR] stdout');
        data +=  String(buf);


    });
    phantom.stderr.on('data', function(buf) {
        console.log('[STR] stderr "%s"', String(buf));
    });
    phantom.on('close', function(code) {
        // console.log('[END] code', code);
    });

    phantom.on('exit', code => {
        callback(null, data);

        // callback(null, 'fine!!');
    });

};