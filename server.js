const express             = require('express');
const app                 = express();
const path                = require('path');
const http                = require('http');
const server              = http.createServer(app);
const socketIO            = require('socket.io');
const io                  = socketIO(server);
const PORT                = process.env.PORT || 3000;

const logger    = require('morgan');

app.use(express.static(path.join(__dirname, './public')));
app.use(logger('dev'));

let players = [];

io.on('connection', (socket) => {
  console.log(`>>> Server: Socket Server Up and Serving Clients`);
  socket.on('new player', () => {
    const playerInitX = Math.floor(Math.random() * 600),
          playerInitY = Math.floor(Math.random() * 400);
    players.push({ id: socket.id, x: playerInitX, y: playerInitY })
    // players.forEach((player) => {
      io.emit('players-list', players)
    // console.log(`>>> Server: Socket Server's Client Pool: ${player.id}`)
    // });
  });

  socket.on('moveClientUp', (data) => {
    console.log('clientMoveUp data:', data);
    let newPlayerY = data.y - 25;
    console.log('newPlayerY', newPlayerY);
    io.emit('clientMoveUp', newPlayerY);
  })

// Closes io.on('connection')
});

server.listen(PORT, () => {
  console.log(`Server up and listening on port: ${PORT}`)
});
