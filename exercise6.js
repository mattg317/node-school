

var fs = require('fs');
var mymodule = require('./exercise6b.js');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];

// fs.readdir(file, function callback(err, list){
// 	if (err) return console.error(err);
// 	for(var i=0, n=list.length; i<n; i++){
// 		if(path.extname(list[i])===ext){
// 			console.log(list[i]);
// 		}
// 	}
// });
// function stuff(err){
// 	if(err) return console.error(err);
// }

// fs.readdir(dir, function callback(err, list){
// 	if(err) return callback(err);
// 	mymodule(list, ext, stuff);
// })

mymodule(dir, ext, function(err, list){
	if(err)
		return console.error('There was an error:', err)

	list.forEach(function(file){
		console.log(file)
	})

})

