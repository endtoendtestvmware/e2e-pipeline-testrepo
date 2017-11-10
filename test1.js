var shell = require('shelljs');

var child = shell.exec('ping www.google.com', {async:true});
child.stdout.on('data', function(data) {
  console.log(data);
});