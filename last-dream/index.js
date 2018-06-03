const express         = require('express'),
      $               = require('jquery'),
      Crafty          = require('craftyjs'),
      app             = express(),
      logger          = require('morgan'),
      http            = require('http').Server(app),
      path            = require('path'),
      URL             = require('url'),
      PORT            = process.env.PORT || 3001,
      WebSocketServer = require('ws').Server,
      wss             = new WebSocketServer({
                          port: 8080
                        }),
      location             = URL.parse('http://127.0.0.1:3001/game');
var cookie = require('cookie');
var cookieParser = require('cookie-parser')

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

let players = [];

// On New Client Connection
wss.on('connection', (ws, req) => {
  console.log('ws is:', req);
  const id = req.headers['sec-websocket-key'];
  const playerInitX = Math.floor(Math.random() * 600),
        playerInitY = Math.floor(Math.random() * 400);
  players.push({id: id, x: playerInitX, y: playerInitY});
  console.log('>>> Server: New client connected id:', players[0].id)
  console.log('Connected players: ', players)
  // console.log('url: ', url);
  ws.send(JSON.stringify(players[0]))
// wss.on('connection', function connection(ws) {
    // var location = url.parse(ws.upgradeReq.url, true);
    //get sessionID
    var cookies = cookie.parse(req.upgradeReq.headers.cookie);
    var sid = cookieParser.signedCookie(cookies["connect.sid"], secret);
    //get the session object
    store.get(sid, function (err, ss) {
        //create the session object and append on upgradeReq
        store.createSession(ws.upgradeReq, ss)
        //setup websocket bindings
        ws.on('message', function incoming(message) {
            console.log('received: %s', message);
            //..........
        });

    });
});

// });
// wss.broadcast = function broadcast(data) {
//   wss.player.forEach(function each(player) {
//     if (player.readyState === WebSocket.OPEN) {
//       player.send(data);
//     }
//   });
// };

  wss.on('message', (msg) => {
    let data = JSON.parse(msg);
      players.forEach(function (player) {
    console.log(`>>> Server: Received msg from client ${player.id} : ${msg}`)
        wss.send(JSON.stringify(data))

      });
  })
/* Add WS End */

app.listen(PORT, () => {
  console.log(`>>> Server up and running! Port: ${PORT} Env: ${app.get('env')}`);
});

