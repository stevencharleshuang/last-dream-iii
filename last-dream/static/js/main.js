$( document ).ready(function() {
  console.log('main.js: jQuery ready!');

  // Socket Connection Init
  websocket = new WebSocket("ws://192.168.30.144:8080/");

  // Crafty Init Game Board
  Crafty.init(888,500, document.getElementById('game'));
  let player = Crafty.e("2D, DOM, Color, Motion")

  // Crafty.defineScene("world_screen", function() {
  websocket.onopen = function(evt) {
    console.log('<<< Client: Wraith awaiting launch orders')
  }
  let playerID;

  /* On Message from server
     * Parse incoming data and store in var
     * Isolate players arr from message and store in var
     * Iterate over players arr
     * Each player's entity receives properties sent from server
  */
  websocket.onmessage = function(evt) {
    console.log('>>>>>>>>>>>> client ln 34 evt.data.player: ', evt);
    let message = JSON.parse(evt.data);
    let players = message.players;
    console.log('>>>>>>>>>>>> client: message: ', message);
    for (let id in players) {
      console.log('<<< Client: Received msg from server - data: ', )
      if (id !== playerID) {
        let newPlayer = Crafty.e("2D, DOM, Color, Motion")
                          .attr({ x:players[id].x, y:players[id].y, w:25, h:25 })
                          .color("blue");
      } else {
        player
          .attr({ x:players[id].x, y:players[id].y, w:25, h:25 })
          .color("red");
        console.log('Client player: ', player);
        playerID = players[id].id;
      }
    }
    console.log('main.js ws.onmessage: event triggered');
    console.log('main.js ws.onmessage: evt: ', evt);
  };

  player.bind('KeyDown', function(e) {
    let playerPos = {gameState:'gameState', id: playerID, x: player._x, y: player._y};
    console.log('playerPos: ', playerPos);
    // console.log('playerID:', playerID)
    if (e.key == Crafty.keys.W) { // W = Up
      // this.y=this.y-20; // Remove this
      player.onKeyDown(); // Remove this
      playerPos.y = playerPos.y - 20;
      console.log('new playerPos: ', playerPos) // Remove this
      websocket.send(JSON.stringify(playerPos));
      console.log('playerPos post WS send: ', playerPos);
      // player.y = player._y; // Remove this
    } else if (e.key == Crafty.keys.A) { // A = Left
      // this.x=this.x-20;
      player.onKeyDown(); // Remove this
      playerPos.x = playerPos.x - 20;
      console.log('new playerPos: ', playerPos) // Remove this
      websocket.send(JSON.stringify(playerPos));
      // player.x = player._x;
    } else if (e.key == Crafty.keys.S) { // S = Down
      // this.y=this.y+20;
      player.onKeyDown(); // Remove this
      playerPos.y = playerPos.y + 20;
      console.log('new playerPos: ', playerPos) // Remove this
      websocket.send(JSON.stringify(playerPos));
      // player.y = player._y;
    } else if (e.key == Crafty.keys.D) { // D = Right
      // this.x=this.x+20;
      player.onKeyDown(); // Remove this
      playerPos.x = playerPos.x + 20;
      console.log('new playerPos: ', playerPos) // Remove this
      websocket.send(JSON.stringify(playerPos));
      // player.x = player._x;
    }
  });

  websocket.onerror = function(evt) {
    // $('#messages').append($('<li>')
    //   .text('<span style="color: red;">ERROR:</span> ' + evt.data));
    console.log('main.js websocket.onmessage: error event triggered');
  };

  // TESTING ONLY - TBR - Player Position Loggging
  player.onKeyDown = function(e) {
    console.log(`main.js onKeyDown: You did a thing.
      player x: ${player._x}, player y: ${player._y}`);
  };

  // Closes World Game Screen func
  // });
  // Crafty.enterScene('world_screen');

  /* JQuery Funcs */
  // TESTING ONLY - TBR
    // Fight Button
  $('#fight-btn').on('click', () => {
    console.log('Loading Battle Screen');
    $('#fight-btn').replaceWith('<button id="world-btn btn">World View Test Btn</button>');
    Crafty.enterScene('battle_screen');
  });
    // World Button
  $('#world-btn').on('click', () => {
    console.log('Loading World Screen');
    $('#world-btn').replaceWith('<button id="fight-btn btn">Fight Screen Test Btn</button>');
    Crafty.enterScene('world_screen');
  });

// Closes jQuery ready
});

