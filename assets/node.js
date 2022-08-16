var http=require("http");
var server= http.createServer(function(request,response)
	{
	response.writeHead(200,{"Content-Type":"text/html"});
		response.write("Hello");
		response.write("<h1>Hello World</h1>");	
		response.end("<html><body>Home, URL was: "+request.url+"</body></html>");
		console.log("Request received");  
	});
	
server.listen(8000);

console.log("Server running");

