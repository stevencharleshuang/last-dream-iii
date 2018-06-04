$( document ).ready(function() {
  console.log('main.js: jQuery ready!');

  // Crafty Init Game Board
  Crafty.init(888,500, document.getElementById('game'));


  // // Crafty.defineScene("world_screen", function() {
  // let clientPlayer = Crafty.e("2D, DOM, Color, Motion")
  // let newPlayer;
  // let playerID;

  // function initNewPlayer(player) {
  //   newPlayer = Crafty.e("2D, DOM, Color, Motion")
  // }

  // function updateNewPlayer(player) {
  //   newPlayer
  //     .attr({ x:player.x, y:player.y, w:25, h:25 })
  //     .color("blue");
  // }

  // function initClientPlayer(player) {

  // }

  // function updateClientPlayer(player) {
  //   clientPlayer
  //     .attr({ x:player.x, y:player.y, w:25, h:25 })
  //     .color("red");
  // }

  // /* On Message from server
  //    * Parse incoming data and store in var
  //    * Isolate players arr from message and store in var
  //    * Iterate over players arr
  //    * Each player's entity receives properties sent from server
  // */
  // websocket.onmessage = function(evt) {
  //   console.log('>>>>>>>>>>>> client evt: ', evt);
  //   let message = JSON.parse(evt.data);
  //   let players = message.players;

  //   // console.log('>>>>>>>>>>>> client: message: ', message);
  //   console.log('>>>>>>>>>>>> client: players: ', players);


  //   for (let id in players) {
  //     console.log('<<< Client: Received msg from server - players[id]: ', players[id])
  //     if (players[id].id !== playerID && playerID !== undefined) {
  //       (newPlayer !== undefined)
  //         ? updateNewPlayer(players[id])
  //         : initNewPlayer(players[id])
  //     } else if (players[id].id !== playerID && playerID === undefined) {
  //       updateClientPlayer(players[id]);
  //     } else if (players[id].id === playerID) {
  //       updateClientPlayer(players[id]);
  //     }
  //       console.log('Client player: ', clientPlayer);
  //       playerID = players[id].id;
  //   }
  //   console.log('main.js ws.onmessage: event triggered');
  //   console.log('main.js ws.onmessage: evt: ', evt);
  // };

  // if (clientPlayer) {
  //   clientPlayer.bind('KeyDown', function(e) {
  //     let playerPos = {gameState:'gameState', id: playerID, x: clientPlayer._x, y: clientPlayer._y};
  //     console.log('playerPos: ', playerPos);
  //     if (e.key == Crafty.keys.W) { // W = Up
  //       clientPlayer.onKeyDown(); // Remove this
  //       playerPos.y = playerPos.y - 20;
  //       console.log('new playerPos: ', playerPos) // Remove this
  //       websocket.send(JSON.stringify(playerPos));
  //     }
  //     else if (e.key == Crafty.keys.A) { // A = Left
  //       clientPlayer.onKeyDown(); // Remove this
  //       playerPos.x = playerPos.x - 20;
  //       console.log('new playerPos: ', playerPos) // Remove this
  //       websocket.send(JSON.stringify(playerPos));
  //     }
  //     else if (e.key == Crafty.keys.S) { // S = Down
  //       clientPlayer.onKeyDown(); // Remove this
  //       playerPos.y = playerPos.y + 20;
  //       console.log('new playerPos: ', playerPos) // Remove this
  //       websocket.send(JSON.stringify(playerPos));
  //     }
  //     else if (e.key == Crafty.keys.D) { // D = Right
  //       clientPlayer.onKeyDown(); // Remove this
  //       playerPos.x = playerPos.x + 20;
  //       console.log('new playerPos: ', playerPos) // Remove this
  //       websocket.send(JSON.stringify(playerPos));
  //     }
  //   });
  // }

  // websocket.onerror = function(evt) {
  //   // $('#messages').append($('<li>')
  //   //   .text('<span style="color: red;">ERROR:</span> ' + evt.data));
  //   console.log('main.js websocket.onmessage: error event triggered');
  // };

  // // TESTING ONLY - TBR - Player Position Loggging
  // clientPlayer.onKeyDown = function(e) {
  //   console.log(`main.js onKeyDown: You did a thing.
  //     player x: ${clientPlayer._x}, player y: ${clientPlayer._y}`);
  // };

  // // Closes World Game Screen func
  // // });
  // // Crafty.enterScene('world_screen');

  /* JQuery Funcs */
  // TESTING ONLY - TBR
    // Fight Button
  $('#fight-btn').on('click', () => {
    console.log('Loading Battle Screen');
    // $('#fight-btn').replaceWith('<button id="world-btn btn">World View Test Btn</button>');
    Crafty.enterScene('battle_screen');
  });
    // World Button
  $('#world-btn').on('click', () => {
    console.log('Loading World Screen');
    // $('#world-btn').replaceWith('<button id="fight-btn btn">Fight Screen Test Btn</button>');
    Crafty.enterScene('world_screen');
  });

// Closes jQuery ready
});

