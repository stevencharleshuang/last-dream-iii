const express         = require('express'),
      $               = require('jquery'),
      Crafty          = require('craftyjs'),
      app             = express(),
      logger          = require('morgan'),
      http            = require('http').Server(app),
      path            = require('path'),
      PORT            = process.env.PORT || 3001,
      WebSocketServer = require('ws').Server,
      wss             = new WebSocketServer({
                          port: 8080
                        });


  // Network interfaces
  var ifaces = require('os').networkInterfaces();

  // Iterate over interfaces ...
  var adresses = Object.keys(ifaces).reduce(function (result, dev) {
    return result.concat(ifaces[dev].reduce(function (result, details) {
      return result.concat(details.family === 'IPv4' && !details.internal ? [details.address] : []);
    }, []));
  });

  // Print the result
  console.log('IP:', adresses)


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
  const playerInitX = Math.floor(Math.random() * 400),
        playerInitY = Math.floor(Math.random() * 600);
  players.push({id: id, x: playerInitX, y: playerInitY});
  ws.on('message', (msg) => {
    console.log(`
      >>>>>>>>>>> Server Received:
      Client Message: ${msg}
      >>>>>>>>>>> Server Assigned:
      Client: ${players[0].id}
      Player x: ${players[0].x}
      Player y: ${players[0].y}
    `);
    data = JSON.parse(msg);
    if (data.message) {
      wss.broadcast(`
        <strong>${data.name}</strong>:${data.message} Player X: ${data.player_x} Player Y: ${data.player_y}
      `);

    ws.send(JSON.stringify(data))
    }
  });
  wss.broadcast = function broadcast(data) {
    console.log('>>> server: wss emit', data);
    wss.clients.forEach(function each(client) {
      client.send(data);
      console.log('>>> server: Data Broadcast: ', data);
    });
  };
});
/* Add WS End */

app.listen(PORT, () => {
  console.log(`Server up and running! Port: ${PORT} Env: ${app.get('env')}`);
});

