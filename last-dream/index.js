const express         = require('express'),
      $               = require('jquery'),
      Crafty          = require('craftyjs'),
      app             = express(),
      logger          = require('morgan'),
      http            = require('http').Server(app),
      path            = require('path'),
      // cookie = require('cookie'),
      // cookieParser = require('cookie-parser'),
      URL             = require('url'),
      PORT            = process.env.PORT || 3001,
      crypto          = require('crypto'),
      WebSocketServer = require('ws').Server,
      wss             = new WebSocketServer({
                          port: 8080,
                          clientTracking: true,
                        }),
      location        = URL.parse('http://127.0.0.1:3001/game');


app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'static')));

app.get('/game', function(req, res) {
    res.sendFile(__dirname + '/game.html');
});

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  res.status(500).send('Something bad happened =(');
});

/* Add WS Beg */

// wss.on("headers", function(headers) {
//   headers["set-cookie"] = "SESSIONID=" + crypto.randomBytes(20).toString("hex");
//   console.log("handshake response cookie", headers["set-cookie"]);
// });

let gameState = {};
let players = {};
let clients = [];

/* On New Client Connection
   * Grab Unique WS Key
   * Get random values to initialize client entity at a random location
   * Push new client to players arr and clients
   * Send JSON to client with gameState, id, x and y coordinates
*/
wss.on('connection', (ws, req) => {
  const id = req.headers['sec-websocket-key'];
  const playerInitX = Math.floor(Math.random() * 600),
        playerInitY = Math.floor(Math.random() * 400);
  players[id] = {id: id, x: playerInitX, y: playerInitY};
  clients.push(ws);
  // console.log('Clients collection: ', clients);
  console.log('Connected players: ', players);
  // clients.forEach((player) => {
    ws.send(JSON.stringify({
      gameState:'gameState',
      id: id,
      players: players,
    }));
  // });

  /* On Message from client
     * Parse message and store in var
     * Switch-Case if Object.keys has parsedMessage
     * If payload has gameState key
     * Assign parsedMessage Object Keys to gameState
     * Iterate through clients array
     * Send each client JSON gameState, id and players array
  */
  ws.on('message', (message) => {
    console.log('>>>>>>>>>> server: message received')
    let parsedMessage = JSON.parse(message)
    console.log('>>> Server: New client connected id:', id)
    console.log('>>>>>>>>> ln 52 message', message)
    if (players[id].x !== 0) {
      players[id].x += parsedMessage.x
    }
    if (players[id].y !== 0) {
      players[id].y += parsedMessage.y;
    }
    switch(Object.keys(parsedMessage)[0]) {
      case 'gameState':
        console.log('parsedMessage: ', parsedMessage)
        gameState = parsedMessage[Object.keys(parsedMessage)[0]]
        // players.forEach((player) => {
          ws.send(JSON.stringify({
            gameState: gameState,
            id: id,
            players: players,
          }));
        // })
        break;
      case 'movement':
        console.log('>>>>> server: detected movement')
    }
  })
});


// });
// wss.broadcast = function broadcast(data) {
//   wss.player.forEach(function each(player) {
//     if (player.readyState === WebSocket.OPEN) {
//       player.send(data);
//     }
//   });
// };


/* Add WS End */

app.listen(PORT, () => {
  console.log(`>>> Server up and running! Port: ${PORT} Env: ${app.get('env')}`);
});

