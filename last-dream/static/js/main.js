$( document ).ready(function() {
  console.log('main.js: jQuery ready!');

  /* WS Integration Beg */

  // Socket Connection Init
  websocket = new WebSocket("ws://localhost:8080/");

  // Crafty Init Game Board
  Crafty.init(888,500, document.getElementById('game'));


  // Crafty.defineScene("world_screen", function() {
  let player = Crafty.e("2D, DOM, Color, Motion")
  websocket.onopen = function(evt) {
    console.log('<<< Client: Wraith awaiting launch orders')
  }
  // $('form').submit(function() {
  //   name = $('#name').val() ? $('#name').val() : 'Anonymous';
  //   $('#name-div').hide();
  //   $('#welcome').text('Hello ' + name);
  //   websocket.send(JSON.stringify({
  //     // name: name,
  //     // message: $('#message').val(),
  //     player_x: player._x,
  //     player_y: player._y
  //   }));
  //   // $('#message').val('');
  //   console.log('main.js: This is websocket: ', websocket)
  //   return false;
  // });
  let playerID
  websocket.onmessage = function(evt) {
    // console.log('>>>>>>>>>>>> client ln 34 evt.data.player: ', evt.data.player);
    let resp = JSON.parse(evt.data);
    let players = resp.players;
    console.log('>>>>>>>>>>>> client ln 34 websocket: ', resp);
    players.forEach(data => {
    console.log('<<< Client: Received msg from server: ', data)
    player
      .attr({x:data.x, y:data.y, w:25, h:25})
      .color("red")
    playerID = data.id;

  })
    
    // player
    // .attr({x:data.x, y:data.y, w:25, h:25})
    // .color("red")
    // playerID = data.id;

    // Chat Stuff
    // $('#messages')
    //   .append($('<li>')
    //   .html(evt.data));
    // $('#messages')
    //   .append($('<li>'))
    //   .html(evt)
      // .html(`player x: ${player._x}, player y: ${player._y}`));
    
    console.log('main.js ws.onmessage: event triggered');
    console.log('main.js ws.onmessage: evt: ', evt);
  };

  player.bind('KeyDown', function(e) {
    let playerPos = {gameState:'gameState', id: playerID, x: player._x, y: player._y}
    console.log('playerPos: ', playerPos)
    // console.log('playerID:', playerID)
    if (e.key == Crafty.keys.W) { // W = Up
      // this.y=this.y-20; // Remove this
      player.onKeyDown(); // Remove this
      playerPos.y = playerPos.y - 20;
      console.log('new playerPos: ', playerPos) // Remove this
      websocket.send(JSON.stringify(playerPos));
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
  })

  websocket.onerror = function(evt) {
    $('#messages').append($('<li>')
      .text('<span style="color: red;">ERROR:</span> ' + evt.data));
    console.log('main.js websocket.onmessage: event triggered');
  };

  // Player Position Loggging
  player.onKeyDown = function(e) {
    console.log(`main.js onKeyDown: You did a thing.
      player x: ${player._x}, player y: ${player._y}`);
  }

  /* Crafty End */


  // Closes World Game Screen func
  // });
  // Crafty.enterScene('world_screen');
  // JQuery Funcs
  $('#fight-btn').on('click', () => {
    console.log('Loading Battle Screen');
    $('#fight-btn').replaceWith('<button id="world-btn">World View Test Btn</button>')
    Crafty.enterScene('battle_screen');
  })
  // $('#world-btn').on('click', () => {
  //   console.log('Loading World Screen');
  //   $('#world-btn').replaceWith('<button id="fight-btn">Fight Screen Test Btn</button>')
  //   Crafty.enterScene('world_screen');
  // })
// Closes jQuery ready
});

