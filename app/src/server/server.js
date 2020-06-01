const io = require('socket.io')(1788);

io.on('connection', socket => {
    socket.emit('chat-message', 'Hello World')
})
