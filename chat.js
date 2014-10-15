var net = require('net');

var server = net.createServer(function (socket) {

 socket.setEncoding('utf8');

  socket.write('Echo server\r\n');
  socket.on('data', function(chunk) {
    //socket.write('Echo server\r\n');
    //console.log(chunk);
    socket.write(chunk);
  });
  socket.on('end', socket.end);
});

server.listen(5000, '192.168.1.40');
