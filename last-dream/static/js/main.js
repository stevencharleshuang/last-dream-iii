$( document ).ready(function() {
  console.log( "jQuery ready!" );

  /* WS Integration Beg */
  websocket = new WebSocket("ws://localhost:8080/");
  $('form').submit(function() {
    name = $('#name').val() ? $('#name').val() : 'Anonymous';
    $('#name-div').hide();
    $('#welcome').text('Hello ' + name);
    websocket.send(JSON.stringify({
      name: name,
      message: $('#message').val(),
    }));
    $('#message').val('');
    console.log('main.js: This is websocket: ', websocket)
    return false;
  });

  websocket.onmessage = function(evt) {
    $('#messages')
      .append($('<li>')
      .html(evt.data));
    $('#messages')
      .append($('<li>')
      .html(`player x: ${player._x}, player y: ${player._y}`));
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
  // Moveable Div
  Crafty.init(600,400, document.getElementById('game'));
  // A blue block, controlled by arrow keys
  // Player Init
  let player = Crafty.e("2D, Canvas, Color, Fourway, Motion")
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
    .fourway(500, { normalize: true })

  // Player Position Detection
  player.onKeyDown = function(e) {
    console.log(`main.js onKeyDown: You did a thing.
      player x: ${player._x}, player y: ${player._y}`);
  }
  /* Crafty End */

});

