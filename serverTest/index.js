var io = require('socket.io')(5000);

io.sockets.on('connection', function (socket) {
 
});
/*
socket.on('echo-ack', function (data, callback) {
    callback(data);
});
*/
