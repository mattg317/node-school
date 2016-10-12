var fs = require('fs');
var path = require('path');



module.exports=function(dir, ext, callback){

	fs.readdir(dir, function (err, list){
		if(err)
			return callback(err)

		list = list.filter(function (file) {
	      return path.extname(file) === '.' + ext
	    })
	
		callback(null, list);
	})
}



/*
1. from the main function it read the directory, the passes the 
files off to to the module function
2. the module function will then do the filtering in the files.
3. 
*/