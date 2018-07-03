const socket = io();
let clientPlayer;

$( document ).ready(() => {
  console.log('world-screen.js: jQuery ready!');

  Crafty.defineScene("world_screen", () => {
    console.log('world_screen: ready!')
    Crafty.sprite('../images/map.png', { background: [ 0, 0, 888, 500 ] });
    const bg = Crafty.e('2D, DOM, background')
    Crafty.sprite('../images/locke_map.png', { locke: [ 0, 0, 20, 30 ] });

    // Init Client Avatar At Randomized Location
    function initClientPlayer(x, y) {
      console.log('initClientPlayer() fired');
      clientPlayer = Crafty.e('2D, DOM, Color, locke, Collision, Motion')
        .attr({ x: x, y: y })
        .color("blue")
        .collision()
        .onHit('Battle', function() {
          console.log('%%%%%%%%%%%%%% Hit detected')
          // this.stop();
          Crafty.enterScene('battle_screen');
      });
      if (!!clientPlayer) {
      clientPlayer.bind('KeyDown', function(e) {
        // let playerPos = {gameState:'gameState', id: playerID, x: clientPlayer._x, y: clientPlayer._y};
        // console.log('playerPos: ', playerPos);
        if (e.key == Crafty.keys.W) { // W = Up
          console.log('Player hit W');
          socket.emit('clientMoveUp');
        }
        else if (e.key == Crafty.keys.A) { // A = Left
          console.log('Player hit A');
          socket.emit('clientMoveLeft');
        }
        else if (e.key == Crafty.keys.S) { // S = Down
          console.log('Player hit S');
          socket.emit('clientMoveDown');
        }
        else if (e.key == Crafty.keys.D) { // D = Right
          console.log('Player hit D');
          socket.emit('clientMoveRight')
        }
      });
    }
    };



    // // TESTING ONLY - TBR - Player Position Loggging
    // clientPlayer.onKeyDown = function(e) {
    //   console.log(`main.js onKeyDown: You did a thing.
    //     player x: ${clientPlayer._x}, player y: ${clientPlayer._y}`);
    // };

    socket.on('connect', () => {
      console.log(`<<< Client: Socket Connection Open! Client Id: ${socket.id}`);
    });
    socket.on('players-list', (players) => {
      console.log(players)
      $('.players-list').html('');
      players.forEach((player) => {
        $('.players-list').append(`<li>${player.id}</li>`);
        initClientPlayer(player.x, player.y);
      });
    });
    socket.emit('new player');

  // Closes Crafty Define World Screen
  });

  socket.on('disconnect', () => {
    console.log(`<<< Client ${socket.id} has disconnected8`)
  });

// Closes jQuery
});
