$( document ).ready(function() {
  console.log('main.js: jQuery ready!');

  // Crafty Init Game Board
  Crafty.init(888,500, document.getElementById('game'));
  Crafty.sprite('../images/splash.png', { background:[ 0, 0, 888, 500 ] });
    const bg = Crafty.e('2D, DOM, background')
    const title = Crafty.e('2D, DOM, Text, Keyboard')
      .attr({
        x: 340,
        y: 400,
        w: 600,
        h: 100
      })
    .text("Last Dream III")
    .textFont({
      size: '90px',
      weight: '400',
      letterspacing: '1px',
      family: 'Vidaloka, serif'
    })
    .textColor("Black");
    const play = Crafty.e('2D, DOM, Text, Keyboard')
      .attr({
        x: 10,
        y: 350,
        w: 600,
        h: 100
      })
    .text("Press 'e' to begin")
    .textFont({
      size: '20px',
      weight: '400',
      letterspacing: '1px',
      family: 'Vidaloka, serif'
    })
    .textColor("Black");

    play.bind('KeyDown', function(e) {
      if (e.key === Crafty.keys.E) {
        Crafty.enterScene('world_screen');
        console.log('Loading World Screen');
      }
    })

  // // Crafty.enterScene('world_screen');

  /* JQuery Funcs */
  // TESTING ONLY - TBR
    // Fight Button
  $('#fight-btn').on('click', () => {
    console.log('Loading Battle Screen');
    // $('#fight-btn').replaceWith('<button id="world-btn btn">World View Test Btn</button>');
    Crafty.enterScene('battle_screen');
  });
    // World Button
  $('#world-btn').on('click', () => {
    console.log('Loading World Screen');
    // $('#world-btn').replaceWith('<button id="fight-btn btn">Fight Screen Test Btn</button>');
    Crafty.enterScene('world_screen');
  });

// Closes jQuery ready
});

