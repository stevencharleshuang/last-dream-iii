$( document ).ready(function() {
  console.log( "jQuery ready!" );

  // Moveable Div
  Crafty.init(800,600, document.getElementById('game'));
  // A blue block, controlled by arrow keys
  let player = Crafty.e("2D, Canvas, Color, Fourway")
      .attr({x:100, y:100, w:50, h:50})
      .color("blue")
      .fourway(500);


  // let playerPos = () => {
  //   setInterval(() => {
  //     return player.pos
  //     // console.log("main.js says player: ", player.pos())
  //   }, 500);
  // }

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
      $('#message').focus();
      $('#message').val('');
      console.log('main.js: This is websocket: ', websocket)
      return false;
  });
  websocket.send = () => {
    setInterval(() => {
      return (player.x, player.y);
    }, 250)
    console.log('player.pos:', player.x)
  }

  websocket.onmessage = function(evt) {
    $('#messages').append($('<li>').html(evt.data));
    $('#game').draw(evt.data);
    console.log('main.js websocket.onmessage evt.data: ', evt.data)
  };



  websocket.onerror = function(evt) {
      $('#messages').append($('<li>')
        .text('<span style="color: red;">ERROR:</span> ' + evt.data));
  };

  /* WS Integration End */

});

