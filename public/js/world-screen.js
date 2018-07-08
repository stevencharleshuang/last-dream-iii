const socket = io();
let clientPlayer;
let clientPlayerID;
let opponentPlayer;
let opponentPlayerID;

$( document ).ready(() => {
  console.log('world-screen.js: jQuery ready!');

  Crafty.defineScene("world_screen", () => {
    console.log('world_screen: ready!')
    Crafty.sprite('../images/map.png', { background: [ 0, 0, 888, 500 ] });
    const bg = Crafty.e('2D, DOM, background')
    Crafty.sprite('../images/locke_map.png', { locke: [ 0, 0, 20, 30 ] });

    function unleashTheBeasts(beast) {
      if (beast === 'gilgamesh') {
        /* NPC Gilgamesh */
        let gilgamesh = Crafty.e('2D, DOM, Color, Collision, Battle')
                          .attr({ x: 400, y: 400, w: 25, h: 25 })
                          .color('purple')
                          .collision();
      };
    };

    unleashTheBeasts('gilgamesh');

    // Init Client Avatar At Randomized Location
    function initClientPlayer(id, x, y) {
      console.log('initClientPlayer() fired, id: ', id);
      clientPlayer = Crafty.e('2D, DOM, Color, locke, Collision, Motion')
        .attr({ id: id, x: x, y: y })
        .color("blue")
        .collision()
        .onHit('Battle', function() {
          console.log('%%%%%%%%%%%%%% Hit detected');
          // this.stop();
          Crafty.enterScene('battle_screen');
        });

      // Client Controls
      if (socket.id === clientPlayer.id) {
        console.log(clientPlayer);
        clientPlayer.bind('KeyDown', function(e) {
          let playerPos = { x: clientPlayer._x, y: clientPlayer._y };
          if (e.key == Crafty.keys.W) { // W = Up
            // console.log('Player hit W');
            socket.emit('moveClientUp', { id: id, x: playerPos.x, y: playerPos.y });
          }
          else if (e.key == Crafty.keys.A) { // A = Left
            // console.log('Player hit A');
            socket.emit('moveClientLeft', { id: id, x: playerPos.x, y: playerPos.y });
          }
          else if (e.key == Crafty.keys.S) { // S = Down
            // console.log('Player hit S');
            socket.emit('moveClientDown', { id: id, x: playerPos.x, y: playerPos.y });
          }
          else if (e.key == Crafty.keys.D) { // D = Right
            // console.log('Player hit D');
            socket.emit('moveClientRight', { id: id, x: playerPos.x, y: playerPos.y });
          }
        });
      };
    };


    // Update Client Player Coords
    function moveClientPlayer(newPos) {
      clientPlayer.x = newPos.x;
      clientPlayer.y = newPos.y;
    }

    // Opponent Player
    function initOpponentPlayer(id, x, y) {
      console.log('initOpponentPlayer() Fired id: ', id);
      opponentPlayer = Crafty.e('2D, DOM, Color, locke, Collision, Motion')
        .attr({ id: id, x: x, y: y })
        .color("red")
        .collision()
        .onHit('Battle', function() {
          console.log('%%%%%%%%%%%%%% Hit detected');
          // this.stop();
          Crafty.enterScene('battle_screen');
        });
    }

    // Update Opponent Player Coords
    function moveOpponentPlayer(newPos) {
      console.log('moveOpponentPlayer() Fired');
      opponentPlayer.x = newPos.x;
      opponentPlayer.y = newPos.y;
    }

    // // TESTING ONLY - TBR - Player Position Loggging
    // clientPlayer.onKeyDown = function(e) {
    //   console.log(`main.js onKeyDown: You did a thing.
    //     player x: ${clientPlayer._x}, player y: ${clientPlayer._y}`);
    // };

    socket.on('message', (socket) => {
      console.log(`<<< Client: Socket Connection Open! Client Id: ${socket.id}`);
    });

    socket.on('players-list', (players) => {
      console.log('players-list', players)
      $('.players-list').html('');
      players.forEach((player) => {
        $('.players-list').append(`<li>${socket.id}</li>`);
        $('#client-socket').html(socket.id)
        if (player.id === socket.id) {
          initClientPlayer(player.id, player.x, player.y);
          clientPlayerID = player.id;
        } else {
          initOpponentPlayer(player.id, player.x, player.y);
          opponentPlayerID = player.id;
        }
      });
    });

    socket.on('clientNewCoords', (data) => {
      // console.log('clientNewCoords', data);
      if (data.id === socket.id) {
        moveClientPlayer(data);
      } else {
        moveOpponentPlayer(data);
      }
    })

    socket.emit('new player');

  // Closes Crafty Define World Screen
  });

  socket.on('disconnect', () => {
    console.log(`<<< Client ${socket.id} has disconnected8`)
  });

// Closes jQuery
});
