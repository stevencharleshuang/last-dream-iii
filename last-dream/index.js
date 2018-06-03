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
let players = [];
let clients = [];

// On New Client Connection
wss.on('connection', (ws, req) => {
  const id = req.headers['sec-websocket-key'];
  const playerInitX = Math.floor(Math.random() * 600),
        playerInitY = Math.floor(Math.random() * 400);
  players.push({id: id, x: playerInitX, y: playerInitY});
  clients.push(ws);
  
  console.log('Connected players: ', players)
  ws.send(JSON.stringify({gameState:'gameState', id: id, players:players}));
  ws.on('message', function(message) {
    let parsedMessage = JSON.parse(message)
    console.log('>>> Server: New client connected id:', id)
    console.log('>>>>>>>>> ln 52 message', message)
    switch(Object.keys(parsedMessage)[0]) {
      case 'gameState':
        gameState = parsedMessage[Object.keys(parsedMessage)[0]]
        clients.forEach((client) => {
          client.send(JSON.stringify({
            gameState: gameState,
            id: id,
            players: players,
          }));
          // client.send({
          //   gameState: gameState,
          // })
        })
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

  // wss.on('message', (msg) => {
  //   let data = JSON.parse(msg);
  //     // players.forEach(function (player) {
  //       console.log(`>>> Server: Received msg from client ${player.id} : ${msg}`)
  //       ws.send(JSON.stringify(data))

  //     // });
  // })
/* Add WS End */

app.listen(PORT, () => {
  console.log(`>>> Server up and running! Port: ${PORT} Env: ${app.get('env')}`);
});

