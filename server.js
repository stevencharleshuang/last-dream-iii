const express             = require('express');
const app                 = express();
const path                = require('path');
const http                = require('http');
const server              = http.createServer(app);
const socketIO            = require('socket.io');
const io                  = socketIO(server);
const PORT                = process.env.PORT || 3000;
const logger              = require('morgan');

app.use(express.static(path.join(__dirname, './public')));
app.use(logger('dev'));

let players = [];

io.on('connection', (socket) => {
  console.log(`>>> Server: Socket Server Up and Serving Clients`);

  socket.emit('welcome', {  })

  socket.on('new player', () => {

    const playerInitX = Math.floor(Math.random() * 600),
          playerInitY = Math.floor(Math.random() * 400);

    players.push({ id: socket.id, x: playerInitX, y: playerInitY });

    io.emit('players-list', players);
    // console.log(`>>> Server: Socket Server's Client Pool: ${player.id}`);
  });

  // Update Client Controls
  socket.on('moveClientUp', (data) => {
    // console.log('clientNewCoords data:', data);
    let newPlayerPos = { id: data.id, x: data.x, y: data.y - 25};
    // console.log('newPlayerPos', newPlayerPos);
    io.sockets.emit('clientNewCoords', newPlayerPos);
  });
  socket.on('moveClientLeft', (data) => {
    // console.log('clientNewCoords data:', data);
    let newPlayerPos = { id: data.id, x: data.x - 25, y: data.y};
    // console.log('newPlayerPos', newPlayerPos);
    io.sockets.emit('clientNewCoords', newPlayerPos);
  });
  socket.on('moveClientDown', (data) => {
    // console.log('clientNewCoords data:', data);
    let newPlayerPos = { id: data.id, x: data.x, y: data.y + 25};
    // console.log('newPlayerPos', newPlayerPos);
    io.sockets.emit('clientNewCoords', newPlayerPos);
  });
  socket.on('moveClientRight', (data) => {
    // console.log('clientNewCoords data:', data);
    let newPlayerPos =  { id: data.id, x: data.x + 25, y: data.y};
    // console.log('newPlayerPos', newPlayerPos);
    io.sockets.emit('clientNewCoords', newPlayerPos);
  });

  socket.on('disconnect', () => {
    console.log(`>>> Server: Client Disconnected`)
  });

// Closes io.on('connection')
});

server.listen(PORT, () => {
  console.log(`Server up and listening on port: ${PORT}`);
});
