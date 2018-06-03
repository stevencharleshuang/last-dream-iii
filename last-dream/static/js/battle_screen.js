$( document ).ready(function() {
  console.log('battle_screen.js: jQuery ready!');
  console.log('battle screen loaded')
  Crafty.defineScene("battle_screen", function() {
    Crafty.background("orange");
    var loadingText = Crafty.e("2D, Canvas, Text, Keyboard")
      .attr({
        x: 140,
        y: 120
      })
    .text("Scenes Demo")
    .textFont({
      size: '50px',
      weight: 'bold'
    })
    .textColor("white");
  });
// Closes jQuery ready
});
