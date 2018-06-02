$( document ).ready(function() {
  console.log( "jQuery ready!" );

  /* WS Integration Beg */

  // Socket Connection Init
  websocket = new WebSocket("ws://192.168.30.144:8080/");

  // Crafty Init Game Board
  Crafty.init(600,400, document.getElementById('game'));

    // Player Init
  let player = Crafty.e("2D, DOM, Color, Fourway, Motion")
    .attr({x:100, y:100, w:25, h:25})
    .color("blue")
    /* Player Controls */
    .bind('KeyDown', function(e) {
      let playerPos = {x: player._x, y: player._y}
      if (e.key == Crafty.keys.W) { // W = Up
        this.y=this.y-20;
        player.onKeyDown();
        player.y = player._y;
      } else if (e.key == Crafty.keys.A) { // A = Left
        this.x=this.x-20;
        player.onKeyDown();
        player.x = player._x;
      } else if (e.key == Crafty.keys.S) { // S = Down
        this.y=this.y+20;
        player.onKeyDown();
        player.y = player._y;
      } else if (e.key == Crafty.keys.D) { // D = Right
        this.x=this.x+20;
        player.onKeyDown();
        player.x = player._x;
      }
      websocket.send(JSON.stringify(playerPos));
    })
    // .fourway(500, { normalize: true })

  $('form').submit(function() {
    name = $('#name').val() ? $('#name').val() : 'Anonymous';
    $('#name-div').hide();
    $('#welcome').text('Hello ' + name);
    websocket.send(JSON.stringify({
      name: name,
      message: $('#message').val(),
      player_x: player._x,
      player_y: player._y
    }));
    $('#message').val('');
    console.log('main.js: This is websocket: ', websocket)
    return false;
  });

  websocket.onmessage = function(evt) {
  console.log('onmessage', evt)
    let newPlayer = Crafty.e("2D, DOM, Color, Fourway, Motion")
    .attr({x:evt.data.player_x, y:evt.data.player_y, w:25, h:25})
    .color("red")

    // Chat Stuff
    $('#messages')
      .append($('<li>')
      .html(evt.data));
    // $('#messages')
    //   .append($('<li>'))
    //   .html(evt)
      // .html(`player x: ${player._x}, player y: ${player._y}`));
    console.log('main.js ws.onmessage: event triggered');
    console.log('main.js ws.onmessage: evt.data: ', evt.data);
  };

  websocket.onerror = function(evt) {
    $('#messages').append($('<li>')
      .text('<span style="color: red;">ERROR:</span> ' + evt.data));
    console.log('main.js websocket.onmessage: event triggered');
  };

  /* WS Integration End */

  /* Crafty Beg */





  // Player Position Detection
  player.onKeyDown = function(e) {
    console.log(`main.js onKeyDown: You did a thing.
      player x: ${player._x}, player y: ${player._y}`);
  }
  /* Crafty End */

});

