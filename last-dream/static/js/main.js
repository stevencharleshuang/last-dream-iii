$( document ).ready(function() {
  console.log( "jQuery ready!" );

  // Moveable Div
  Crafty.init(800,600, document.getElementById('game'));
  // A blue block, controlled by arrow keys
  var player = Crafty.e("2D, Canvas, Color, Fourway")
      .attr({x:100, y:100, w:50, h:50})
      .color("blue")
      .fourway(500);


  let playerPos = () => {
    setInterval(() => {
      player.pos
      // console.log("main.js says player: ", player.pos())
    }, 500);
  }

  /* WS Integration Beg */

  websocket = new WebSocket("ws://localhost:8080/");
  $('form').submit(function() {
      name = $('#name').val() ? $('#name').val() : 'Anonymous';
      $('#name-div').hide();
      $('#welcome').text('Hello ' + name);
      websocket.send(JSON.stringify({
          name: name,
          message: $('#message').val()
      }));
      $('#message').focus();
      $('#message').val('');
      return false;
  });

  websocket.onmessage = function(evt) {
      $('#messages').append($('<li>').html(evt.data));
  };

  websocket.onerror = function(evt) {
      $('#messages').append($('<li>').text('<span style="color: red;">ERROR:</span> ' + evt.data));
  };

  /* WS Integration End */

});

