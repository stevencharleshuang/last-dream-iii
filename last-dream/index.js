const express         = require('express'),
      app             = express(),
      http            = require('http').Server(app),
      path            = require('path'),
      PORT            = process.env.PORT || 3001,
      WebSocketServer = require('ws').Server,
      wss             = new WebSocketServer({
                          port: 8080
                        });


app.use(express.static(path.join(__dirname, 'static')));

app.get('/game', function(req, res) {
    res.sendFile(__dirname + '/game.html');
});

/* Add WS Beg */
wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        client.send(data);
    });
};

wss.on('connection', function(ws) {
    ws.on('message', function(msg) {
        data = JSON.parse(msg);
        if (data.message) wss.broadcast('<strong>' + data.name + '</strong>: ' + data.message);
    });
});

/* Add WS End */

app.listen(PORT, () => {
  console.log(`Server up and running! Port: ${PORT} Env: ${app.get('env')}`);
});

