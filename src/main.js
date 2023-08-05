// Abel Goy 
// Marlene Inoue

/**
 * Phaser Components Used
 * physics: player and other sprites
 * cameras: fading in and out between sceens
 * text objects: menu text, dialog text
 * tween manager: tweening the music
 * tilemaps: the background
 */

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    backgroundColor: '#8C8C8C',
    pixelArt: true,
    autoCenter: true,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          x:0,
          y:0
        }
      }
    },
    scene:  [ Load, Intro, Menu, Ending, CreditsMusic, CreditsBackground, Controls, BarTestScene ]
}

let game = new Phaser.Game(config);

// Reserve keyboard vars
let keySPACE;
let keyW, keyA, keyS, keyD, keyR

// Set UI Sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
