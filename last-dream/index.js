const express         = require('express'),
      app             = express(),
      logger          = require('morgan'),
      http            = require('http').Server(app),
      path            = require('path'),
      PORT            = process.env.PORT || 3001,
      WebSocketServer = require('ws').Server,
      wss             = new WebSocketServer({
                          port: 8080
                        });


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
wss.on('connection', (ws, req) => {
  console.log('serverside connection established')
  const id = req.headers['sec-websocket-key'];
  const playerInitTop = Math.floor(Math.random() * 600),
        playerInitLeft = Math.floor(Math.random() * 800);
  players.push({id: id, top: playerInitTop, left: playerInitLeft});
  ws.on('message', (msg) => {
    console.log(`
      >>>>>>>>>>> Server Received:
      Client Message: ${msg}
      >>>>>>>>>>> Server Assigned:
      Client: ${players[0].id}
      Player Top: ${players[0].top}
      Player Left: ${players[0].left}
    `);
    data = JSON.parse(msg);
    if (data.message) {wss.broadcast('<strong>' + data.name + '</strong>: ' + data.message);}
    // ws.send('Server response: Sup, bo?')
  });
  wss.broadcast = function broadcast(data) {
    console.log('>>> server: wss emit', data);
    wss.clients.forEach(function each(client) {
      client.send(data);
      console.log('>>> Data Broadcast: ', data);
    });
  };
});
/* Add WS End */

app.listen(PORT, () => {
  console.log(`Server up and running! Port: ${PORT} Env: ${app.get('env')}`);
});

