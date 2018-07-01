const socket = io();

$( document ).ready(() => {
  console.log('main.js: jQuery ready!');

  socket.on('connect', () => {
    console.log(`<<< Client: Socket Connection Open! Client Id: ${socket.id}`);
  })
  socket.emit('new player');
// Closes jQuery
});
