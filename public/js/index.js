var socket =  io();
socket.on('connect',  function(){
    console.log('Connected to server');

    socket.emit('createMessage',{
        from: 'amr',
        test: 'hi all'
    });

   /* socket.emit('createEmail',{
        to : 'jen@example.com',
        text: 'Hey. This is Andrew.'
    });*/
});





socket.on('disconnect', function () {

    console.log('User was disconnected');
});

socket.on('newMessage',function (message) {
    console.log('newMessage', message);
});