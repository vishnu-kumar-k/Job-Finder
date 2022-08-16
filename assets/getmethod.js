http=require('http');
url=require('url');
querystring = require('querystring');

function onRequest(request,response)
{
	var path = url.parse(request.url).pathname;
	console.log('Request for '+path+' received.');
	var query =url.parse(request.url).query;
	console.log(query);
	var name = querystring.parse(query)["username"];
	
	response.write('Hello  your email id is  '+ name +' is sucessfully logined');
	response.end();
}
http.createServer(onRequest).listen(8080);
console.log('Server has Started…….');