const lambda = require('./index.js');

lambda.handler(null, null, function(err, data) {
  process.stdout.write(data);
})