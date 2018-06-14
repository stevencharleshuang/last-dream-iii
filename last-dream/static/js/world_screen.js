let websocket;


$( document ).ready(function() {
  console.log('world_screen.js: jQuery ready!');

  Crafty.defineScene('world_screen', function() {
    let clientPlayer;
    let newPlayer;
    let playerID;

    function unleashTheBeasts(beast) {
      if (beast === 'gilgamesh') {
        /* NPC Gilgamesh */
        let gilgamesh = Crafty.e('2D, DOM, Color, Collision, Battle')
                          .attr({ x: 400, y: 400, w: 25, h: 25 })
                          .color('purple')
                          .collision()
      }
    }


    websocket = new WebSocket("ws://localhost:8080/");

    websocket.onopen = function(evt) {
      console.log('<<< Client: Wraith awaiting launch orders')
      unleashTheBeasts('gilgamesh');
      initClientPlayer();
    }


    // Socket Connection Init
    Crafty.sprite('../images/map.png', { background:[ 0, 0, 888, 500 ] });
    const bg = Crafty.e('2D, DOM, background')
    Crafty.sprite('../images/locke_map.png', { locke:[ 0, 0, 20, 30 ] });

    // Player Init/Update Funcs
    function initNewPlayer(player) {
      console.log('>> f(x) initNewPlayer() fired');
      newPlayer = Crafty.e('2D, DOM, Color, locke, Collision, Motion')
    }

    function updateNewPlayer(player) {
      console.log('>> f(x) updateNewPlayer() fired');
      newPlayer
        .attr({ x:player.x, y:player.y, w:25, h:25 })
        .color("red")
        .collision()
        .onHit('Battle', function() {
          console.log('%%%%%%%%%%%%%% Hit detected')
          // this.stop();
          Crafty.enterScene('battle_screen');
        })
    }

    function initClientPlayer(player) {
      console.log('>> f(x) initClientPlayer() fired');
      clientPlayer = Crafty.e('2D, DOM, Color, locke, Collision, Motion')
        .color("blue")
        .collision()
        .onHit('Battle', function() {
          console.log('%%%%%%%%%%%%%% Hit detected')
          // this.stop();
          Crafty.enterScene('battle_screen');
        })
      // updateClientPlayer(player);
    }

    function updateClientPlayer(player) {
      console.log('>> f(x) updateClientPlayer() fired');
      clientPlayer
        .attr({ x:player.x, y:player.y, w:25, h:25 })

    }
    console.log('world_screen.js: Loaded');

    /* On Message from server
       * Parse incoming data and store in var
       * Isolate players arr from message and store in var
       * Iterate over players arr
       * Each player's entity receives properties sent from server
    */
    websocket.onmessage = function(evt) {
      console.log('>>>>>>>>>>>> client evt: ', evt);
      let message = JSON.parse(evt.data);
      let players = message.players;
      // console.log('>>>>>>>>>>>> client: message: ', message);
      console.log('>>>>>>>>>>>> client: players: ', players);
      for (let id in players) {
        console.log('<<< Client: Received msg from server - players[id]: ', players[id])
        if (players[id].id !== playerID && playerID !== undefined) {
          if (newPlayer !== undefined) {
            console.log('<<< Client: updateNewPlayer triggered');
            updateNewPlayer(players[id]);
          } else {
            console.log('<<< Client: initNewPlayer triggered');
            initNewPlayer(players[id])
          }
        }
        else if (players[id].id === playerID) {
          updateClientPlayer(players[id]);
        } else {

          console.log('<<< initClientPlayer: ', clientPlayer);
          initClientPlayer(players[id]);
          playerID = players[id].id;
        }
      }
      console.log('main.js ws.onmessage: event triggered');
      console.log('main.js ws.onmessage: evt: ', evt);
    };

    if (!!clientPlayer) {
      clientPlayer.bind('KeyDown', function(e) {
        let playerPos = {gameState:'gameState', id: playerID, x: clientPlayer._x, y: clientPlayer._y};
        console.log('playerPos: ', playerPos);
        if (e.key == Crafty.keys.W) { // W = Up
          clientPlayer.onKeyDown(); // Remove this
          playerPos.y = playerPos.y - 20;
          console.log('new playerPos: ', playerPos) // Remove this
          websocket.send(JSON.stringify(playerPos));
        }
        else if (e.key == Crafty.keys.A) { // A = Left
          clientPlayer.onKeyDown(); // Remove this
          playerPos.x = playerPos.x - 20;
          console.log('new playerPos: ', playerPos) // Remove this
          websocket.send(JSON.stringify(playerPos));
        }
        else if (e.key == Crafty.keys.S) { // S = Down
          clientPlayer.onKeyDown(); // Remove this
          playerPos.y = playerPos.y + 20;
          console.log('new playerPos: ', playerPos) // Remove this
          websocket.send(JSON.stringify(playerPos));
        }
        else if (e.key == Crafty.keys.D) { // D = Right
          clientPlayer.onKeyDown(); // Remove this
          playerPos.x = playerPos.x + 20;
          console.log('new playerPos: ', playerPos) // Remove this
          websocket.send(JSON.stringify(playerPos));
        }
      });
    }

    if (!!newPlayer) {
      newPlayer.bind('KeyDown', function(e) {
        let playerPos = {gameState:'gameState', id: playerID, x: newPlayer._x, y: newPlayer._y};
        console.log('playerPos: ', playerPos);
        if (e.key == Crafty.keys.W) { // W = Up
          newPlayer.onKeyDown(); // Remove this
          playerPos.y = playerPos.y - 20;
          console.log('new playerPos: ', playerPos) // Remove this
          websocket.send(JSON.stringify(playerPos));
        }
        else if (e.key == Crafty.keys.A) { // A = Left
          newPlayer.onKeyDown(); // Remove this
          playerPos.x = playerPos.x - 20;
          console.log('new playerPos: ', playerPos) // Remove this
          websocket.send(JSON.stringify(playerPos));
        }
        else if (e.key == Crafty.keys.S) { // S = Down
          newPlayer.onKeyDown(); // Remove this
          playerPos.y = playerPos.y + 20;
          console.log('new playerPos: ', playerPos) // Remove this
          websocket.send(JSON.stringify(playerPos));
        }
        else if (e.key == Crafty.keys.D) { // D = Right
          newPlayer.onKeyDown(); // Remove this
          playerPos.x = playerPos.x + 20;
          console.log('new playerPos: ', playerPos) // Remove this
          websocket.send(JSON.stringify(playerPos));
        }
      });
    }


    websocket.onerror = function(evt) {
      // $('#messages').append($('<li>')
      //   .text('<span style="color: red;">ERROR:</span> ' + evt.data));
      console.log('main.js websocket.onmessage: error event triggered');
    };

    // TESTING ONLY - TBR - Player Position Loggging
    // clientPlayer.onKeyDown = function(e) {
    //   console.log(`main.js onKeyDown: You did a thing.
    //     player x: ${clientPlayer._x}, player y: ${clientPlayer._y}`);
    // };

  // Closes World Game Screen func
  });

  /* JQuery Funcs */

// Closes jQuery ready
});

