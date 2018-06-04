$( document ).ready(function() {
  // Import Tests
  console.log('battle_screen.js: jQuery ready!');
  console.log('battle_screen loaded')
  // console.log('battle_screen.js WS:', websocket);
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
    console.log('battle_screen.js: Loaded');

    /* Battle Mechanics Vars */
    let timer = 5;

    // Points System (Attack and Health)
    let playerHP = 1000;
    let enemyHP = 1000;
    let attackVal = Math.floor(Math.random() * 100) + 80;
    let healVal = Math.floor(Math.random() * 50) + 20;
    let defendVal = Math.floor(Math.random() * 100) + 80;

    // Battle Actions
    let actionChoices = [];
    actionChoices.push('fight', 'defend', 'heal');
    let currentChoice = actionChoices[0];
    let actionChosen = undefined;
    let i = 0;

    // Win Case
    let playerWin = undefined;

    // Announcements
    let playerAnnouncement = 'Choose an action with WASD and E to select!';
    let enemyAnnouncement = '';

    /* Crafty Components */
    // Background Image
    Crafty.sprite('../images/battle-screen-bg-01.png', { background:[ 0, 0, 888, 500 ] });
    const bg = Crafty.e('2D, DOM, background')
    const loadingText = Crafty.e("2D, DOM, Text, Keyboard")
      .attr({
        x: 10,
        y: 10,
      })
    .text("Battle Demo")
    .textFont({
      size: '30px',
      weight: 'bold'
    })
    .textColor("white");

    // Menu Components
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
      .text(playerHP)
      .textFont({
        size: '20px',
        weight: '400',
        family: 'Press Start 2P'
      })
      .textColor('#eee')
      .bind('updatePlayerHP', (health) => {menuTextPlayerHP.text(health)});

      const announcementBox = Crafty.e('2D, DOM, Text, Color, Keyboard')
      .attr({
        x: 0,
        y: 0,
        w: 875,
        h: 90
      })
      .color('blue')
      .css({
        'border': '5px solid #eee',
        'border-radius': '15px'
      })


      const playerAnnouncementText = Crafty.e('2D, DOM, Text, Keyboad')
      .attr({
        x: 20,
        y: 20,
        w: 875,
        h: 90
      })
      .text(playerAnnouncement)
      .textFont({
        size: '15px',
        weight: '400',
        family: 'Press Start 2P'
      })
      .textColor('#eee')
      .bind('updatePlayerAnnouncement', (message) => {playerAnnouncementText.text(message)});

      const enemyAnnouncementText = Crafty.e('2D, DOM, Text, Keyboad')
      .attr({
        x: 20,
        y: 50,
        w: 875,
        h: 90
      })
      .text(enemyAnnouncement)
      .textFont({
        size: '15px',
        weight: '400',
        family: 'Press Start 2P'
      })
      .textColor('#eee')
      .bind('updateEnemyAnnouncement', (message) => {enemyAnnouncementText.text(message)});

    Crafty.sprite('../images/pointer.png', { pointer:[ 0, 0, 60, 50 ] });
    const pointer = Crafty.e('2D, DOM, pointer')
      .attr({
        x: 0,
        y: 355
      })

    /* Avatar Sprites */
    Crafty.sprite('../images/locke_battle_01.png', { lockeBattle01: [ 0, 0, 78, 95 ] });
    const avatar = Crafty.e('2D, DOM, lockeBattle01')
      .attr({
        x: 40,
        y: 200,
        w: 100,
        h: 100,
      })

    Crafty.sprite('../images/gilgamesh.png', { gilgamesh: [ 0, 0, 316, 328 ] });
    const gilgamesh = Crafty.e('2D, DOM, gilgamesh')
      .attr({
        x: 570,
        y: 90,
        w: 210,
        h: 210,
      })

    /* Battle Mechanics */


    // Actions Event Handler
    pointer.bind('KeyDown', function(e) {
      console.log('Pointer heard indecision')
        if (e.key === Crafty.keys.W && this.y > 355) {
          this.y = this.y - 40;
          currentChoice = actionChoices[i - 1];
          i -= 1;
          console.log('Current action choice: ', currentChoice);
        } else if (e.key === Crafty.keys.S && this.y < 430) {
          this.y = this.y + 40;
          currentChoice = actionChoices[i + 1];
          i += 1;
          console.log('Current action choice: ', currentChoice);
        } else if (e.key === Crafty.keys.E) {
          if (timer === 5) {
            actionChosen = currentChoice;
            playerActions(actionChosen);
            timer = 0;
            setTimeout(() => {
              playerAnnouncement = 'Player energy recharging';
              Crafty.trigger('updatePlayerAnnouncement', playerAnnouncement);
            }, 1000)
            setTimeout(() => {
              playerAnnouncement = 'Player energy recharged';
              Crafty.trigger('updatePlayerAnnouncement', playerAnnouncement);
              timer = 5;
            }, 5000);
          }
          console.log('Pointer heard a decision: ', actionChosen);
          playerAnnouncement = (`Player chose: ${actionChosen}`);
          Crafty.trigger('updatePlayerAnnouncement', playerAnnouncement);
        }
    });

    // Player Actions
    function playerActions(action) {
      switch (action) {
        // reduce enemyHP by attackVal
        case 'fight':
          console.log('Player chose: ', action)
          enemyHP -= attackVal;
          console.log('Current enemyHP = ', enemyHP);
          break;
        // next enemy attack reduced by defendVal
        case 'defend':
          console.log('Player chose: ', action);
          break;
        // add healVal to current playerHP
        case 'heal':
          playerHP += healVal;
          console.log('Current playerHP = ', playerHP);
          Crafty.trigger('updatePlayerHP', playerHP);
          break;
      }
    };

    // Enemy Actions
    function enemyActions(action) {
      switch (action) {
        // reduce playerHP by attackVal
        case 'fight':
          playerHP -= attackVal;
          // menuTextPlayerHP.text = playerHP;
          Crafty.trigger('updatePlayerHP', playerHP);
          console.log('Current playerHP = ', playerHP);
          break;
        // next player attack reduced by defendVal
        case 'defend':
          break;
        // add healVal to current playerHP
        case 'heal':
          enemyHP += healVal;
          console.log('Current enemyHP = ', enemyHP);
          break;
      }
    }

    // Enemy "AI"
    const enemyAction = setInterval((action) => {
      action = actionChoices[Math.floor(Math.random() * 2)]
      enemyAnnouncement = `Enemy chose: ${action}`
      Crafty.trigger('updateEnemyAnnouncement', enemyAnnouncement);
      console.log('Enemy chose:', action);
      enemyActions(action);
    }, 5000);

    /* Win Logic */
    const checkWin = setInterval(() => {
      healthCheck();
      // console.log('Checking Healths');
    }, 500);

    function healthCheck() {
      if (playerHP <= 0 && enemyHP >= 0) {
        console.log('Player Loses');
        clearInterval(checkWin);
        clearInterval(enemyAction);
        playerAnnouncement = 'Player Loses';
        Crafty.trigger('updatePlayerAnnouncement', playerAnnouncement);
        return playerWin = true;
      }
      else if (playerHP >= 0 && enemyHP <= 0) {
        console.log('Player Wins');
        clearInterval(checkWin);
        clearInterval(enemyAction);
        playerAnnouncement = 'Player Wins';
        Crafty.trigger('updatePlayerAnnouncement', playerAnnouncement);
        return playerWin = false;
      }
    }


  // Closes Battle Screen
  });
// Closes jQuery ready
});
