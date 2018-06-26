const app     = require('express')();
const server  = require('http').Server(app);
const io      = require('socket.io')(server);
const express = require('express');
const $       = require('jquery');
const Crafty  = require('craftyjs');
const logger  = require('morgan');
const path    = require('path');
const URL     = require('url');
const PORT    = process.env.PORT || 3001;



app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'static')));

app.get('/game', function(req, res) {
    res.sendFile(__dirname + '/game.html');
});


/* Add socket Beg */

io.on('connection', (socket) => {
  const id = socket.id;
  const playerInitX = Math.floor(Math.random() * 600),
        playerInitY = Math.floor(Math.random() * 400);
  // players = {id: id, x: playerInitX, y: playerInitY};
  // console.log('Connected players: ', players);

  /* On Message from client
     * Parse message and store in var
     * Switch-Case if Object.keys has parsedMessage
     * If payload has gameState key
     * Assign parsedMessage Object Keys to gameState
     * Iterate through clients array
     * Send each client JSON gameState, id and players array
  */
  socket.on('message', (message) => {
    // console.log('>>>>>>>>>> server: message received')
    // let parsedMessage = JSON.parse(message)
    // console.log('>>> Server: New client connected id:', id)
    // console.log('>>>>>>>>> ln 52 message', message)
    // if (players[id].x >= 0) {
    //   players[id].x += parsedMessage.x;
    // }
    // if (players[id].y >= 0) {
    //   players[id].y += parsedMessage.y;
    // }
    // switch(Object.keys(parsedMessage)[0]) {
    //   case 'gameState':
    //     console.log('>>>>> server: received case [gameState] parsedMessage: ', parsedMessage)
    //     gameState = parsedMessage[Object.keys(parsedMessage)[0]]
    //     for (let id in players) {
    //       socket.send(JSON.stringify({
    //         gameState: gameState,
    //         id: id,
    //         players: players,
    //       }));
    //     }
    //     break;
    //   case 'movement':
    //     console.log('>>>>> server: received case [movement]: ')
    // }
  })
});

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  res.status(500).send('Something bad happened =(');
});

app.listen(PORT, () => {
  console.log(`>>> Server up and running! Port: ${PORT} Env: ${app.get('env')}`);
});

