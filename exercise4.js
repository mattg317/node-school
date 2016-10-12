var fs = require('fs');
var lines= undefined;

function fileLines(callback){
	fs.readFile(process.argv[2], 'utf8', function(err, wordFile){
		if (err) throw err;
		lines = wordFile.split('\n');
		callback()
	})
}

function howMany(){
	console.log(lines.length-1);
}

fileLines(howMany)