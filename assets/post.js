var http = require('http');
var querystring=require('querystring');
var qs,name,email;
 http.createServer(function(req, res) {  
		var data1= '';
		req.on('data', function(chunk) {   
		console.log(chunk);
		data1 += chunk;  
		console.log("Data in String format: "+data1);
	});
	req.on('end', function() {
		qs=querystring.parse(data1);
		console.log(qs);
		var name='vishnuk@gmail.com';
	
		res.write("Hello  your email id vishnu@gmail.com has been logined");
		res.end(); 
	});

	}).listen(7000);

console.log("Server started");
