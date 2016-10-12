var fs = require('fs');
var path = require('path');
var file = process.argv[2];
var ext = "."+process.argv[3];

fs.readdir(file, function callback(err, list){
	if (err) return console.error(err);
	for(var i=0, n=list.length; i<n; i++){
		if(path.extname(list[i])===ext){
			console.log(list[i]);
		}
	}
})