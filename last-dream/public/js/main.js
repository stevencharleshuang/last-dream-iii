$( document ).ready(function() {
  console.log( "jQuery ready!" );

  $('#game-link').on('click', () => {
    console.log('Hit main.js jQuery')
    $("#game-load")
      .html('<object data="http://localhost:3001/game"/>').focus();
  });

});
