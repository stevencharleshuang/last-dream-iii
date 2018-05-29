$( document ).ready(function() {
  console.log( "jQuery ready!" );

  // Moveable Div
  Crafty.init(800,600, document.getElementById('game'));
  // A blue block, controlled by arrow keys
  let player = Crafty.e("2D, Canvas, Color, Fourway, Motion")
      .attr({x:100, y:100, w:50, h:50})
      .color("blue")
      .fourway(500)
    //   .bind('KeyDown', function(e) {
    // if(e.key == Crafty.keys['LEFT_ARROW']) {
    //   // this.x=this.x-1;
    //   console.log('key did a thing')
    //   } else if (e.key == Crafty.keys['RIGHT_ARROW']) {
    //   // this.x=this.x+1;
    //   console.log('key did a thing')
    //   } else if (e.key == Crafty.keys['UP_ARROW']) {
    //   // this.y=this.y-1;
    //   console.log('key did a thing')
    //   } else if (e.key == Crafty.keys['DOWN_ARROW']) {
    //   // this.y=this.y+1;
    //   console.log('key did a thing')
    // }
  // });

  let playerMotion = player.motionDelta()

  player.onMouseDown = function(e) {
    // console.log('main.js onMouseDown: You did a thing', playerMotion);
    console.log(`main.js onMouseDown: You did a thing.
      player x: ${player.x}, player y: ${player.y}`);
  };
  Crafty.addEvent(player, Crafty.stage.elem, "mousedown", player.onMouseDown);

  player.onKeyDown = (e) => {
    console.log('main.js onKeyUp: Did a thing');
  }
  Crafty.addEvent(player, Crafty.stage.elem, "keydown", player.onKeyDown);

  // player.bind("NewDirection", function(){
  //       // `this` refers to the entity
  //       console.log('main.js: binding triggered')
  //   })
  // player.trigger("ChangeColor", {color:"blue"});

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
      console.log('main.js new name', name);
      /* Crafty Implementing - Beg */
      // websocket.send()
      /* Crafty Implementing - End */
      websocket.send(JSON.stringify({
          name: name,
          message: $('#message').val(),
      }));
      console.log('main.js websocket post send(JSON): ', websocket);
      // $('#message').focus();
      $('#message').val('');
      return false;
  });
  // websocket.send = () => {
  //   setInterval(() => {
  //     return (player.x, player.y);
  //   }, 250)
  //   console.log('player.pos:', player.x)
  // }

  websocket.onmessage = function(evt) {
    $('#messages').append($('<li>').html(evt.data));
    $('#messages').append($('<li>').html('schmuck-test'));
    console.log('main.js websocket.onmessage: event triggered');
    console.log('main.js websocket.onmessage evt.data: ', evt.data);
  };



  websocket.onerror = function(evt) {
      $('#messages').append($('<li>')
        .text('<span style="color: red;">ERROR:</span> ' + evt.data));
      console.log('main.js websocket.onmessage: event triggered');
  };

  /* WS Integration End */

});

