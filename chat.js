
  var server = require('net').createServer(function(connection){

    console.log("New subscriber has registered");

  });

  server.listen(5000, function(){
  	 console.log("Server is listening to the port 5000");
  });
    
