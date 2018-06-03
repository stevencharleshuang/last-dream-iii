$( document ).ready(function() {
  // Import Tests
  console.log('battle_screen.js: jQuery ready!');
  console.log('battle screen loaded')

  // Paths
  Crafty.paths({
    audio : "../audio/",
    images: "../images/"
  });

  // Assets
  let game_assets = {
    "battle_bg": ['battle-screen-bg-01.png']
  };

  // Battle Screen
  Crafty.defineScene("battle_screen", function() {
    // Background Image
    Crafty.sprite('../images/battle-screen-bg-01.png', { background:[ 0, 0, 888, 500 ] });
    const bg = Crafty.e('2D, DOM, background')
    const loadingText = Crafty.e("2D, DOM, Text, Keyboard")
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

    // Menu
    const menuLeft = Crafty.e('2D, DOM, Color')
      .attr({
        x: 0,
        y: 340,
        w: 285,
        h: 150
      })
      .color('blue')
      .css({
        'border': '5px solid #eee',
        'border-radius': '15px'
      });

    const menuRight = Crafty.e('2D, DOM, Color')
      .attr({
        x: 297,
        y: 340,
        w: 580,
        h: 150
      })
      .color('blue')
      .css({
        'border': '5px solid #eee',
        'border-radius': '15px'
      });

    const menuTextFight = Crafty.e('2D, DOM, Text, Keyboard')
      .attr({
        x: 60,
        y: 370
      })
      .text('Fight')
      .textFont({
        size: '20px',
        weight: '400',
        family: 'Press Start 2P'
      })
      .textColor('#eee')

    const menuTextDefend = Crafty.e('2D, DOM, Text, Keyboard')
      .attr({
        x: 60,
        y: 410
      })
      .text('Defend')
      .textFont({
        size: '20px',
        weight: '400',
        family: 'Press Start 2P'
      })
      .textColor('#eee')

    const menuTextHeal = Crafty.e('2D, DOM, Text, Keyboard')
      .attr({
        x: 60,
        y: 450
      })
      .text('Heal')
      .textFont({
        size: '20px',
        weight: '400',
        family: 'Press Start 2P'
      })
      .textColor('#eee')

    const menuTextPlayer = Crafty.e('2D, DOM, Text, Keyboard')
      .attr({
        x: 350,
        y: 370
      })
      .text('Player Name')
      .textFont({
        size: '20px',
        weight: '400',
        family: 'Press Start 2P'
      })
      .textColor('#eee')

    const menuTextPlayerHP = Crafty.e('2D, DOM, Text, Keyboard')
      .attr({
        x: 550,
        y: 370
      })
      .text('1234')
      .textFont({
        size: '20px',
        weight: '400',
        family: 'Press Start 2P'
      })
      .textColor('#eee')

    Crafty.sprite('../images/pointer.png', { pointer:[ 0, 0, 60, 50 ] });
    const pointer = Crafty.e('2D, DOM, pointer')
      .attr({
        x: 0,
        y: 355
      })

    let actionChoices = [];
    actionChoices.push('fight', 'defend', 'heal');
    console.log('action choices: ', actionChoices)
    let currentChoice = undefined;
    let actionChosen = undefined;

    pointer.bind('KeyDown', function(e) {
      console.log('Pointer heard indecision')
      let i = 0;
      while (actionChosen === undefined) {
        if (e.key === Crafty.keys.W && this.y > 355 && i >= 0) {
          this.y = this.y - 40;
          currentChoice = actionChoices[i - 1];
          i -= 1;
        } else if (e.key === Crafty.keys.S && this.y < 430 && i < actionChoices.lenth) {
          this.y = this.y + 40;
          currentChoice = actionChoices[i + 1];
          i += 1;
          console.log('Current action choice: ', actionChoice);
        } else if (e.key === Crafty.keys.ENTER || e.key === Crafty.keys.SPACE) {
          actionChosen = currentChoice;
          console.log('Pointer heard a decision')
          break;
        }
      }
    });

  // Closes Battle Screen
  });
// Closes jQuery ready
});
