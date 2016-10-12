var fs = require('fs');
//console.log(process.argv[2]);

var file = fs.readFileSync(process.argv[2]).toString();
var lines = file.split('\n');
console.log(lines.length-1);

