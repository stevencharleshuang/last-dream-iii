$( document ).ready(() => {
  console.log('main.js: jQuery ready!');

  Crafty.defineScene("world_screen", () => {
    console.log('world_screen: ready!')
    Crafty.sprite('../images/map.png', { background: [ 0, 0, 888, 500 ] });
    const bg = Crafty.e('2D, DOM, background')
    Crafty.sprite('../images/locke_map.png', { locke: [ 0, 0, 20, 30 ] });

  socket.on('connect', () => {
    console.log(`<<< Client: Socket Connection Open! Client Id: ${socket.id}`);
  });
  socket.on('players-list', (players) => {
    console.log(players)
    $('.players-list').html('');
    players.forEach((player) => {
      $('.players-list').append(`<li>${player.id}</li>`);
    })
  })
  socket.emit('new player');
  });
  socket.on('disconnect', () => {
    console.log(`<<< Client ${socket.id} has disconnected8`)
  });

// Closes jQuery
});
