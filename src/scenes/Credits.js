class Credits extends Phaser.Scene {
    constructor() {
        super('creditsScene');
    }

    preload(){

    }

    create(){
        let menuConfig = {
            fontFamily: 'Verdana',
            fontSize: '17px',
            backgroundColor: '#F41D1D',
            color: '#FFFFFF',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // menu text
        this.add.text(game.config.width/2, game.config.height/9, 'Credits', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 2*game.config.height/9, 'Programming: ', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 3*game.config.height/9, 'Game Design: ', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 4*game.config.height/9, 'Sprites: ', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 5*game.config.height/9, 'Music: ', menuConfig).setOrigin(0.5);        
        this.add.text(game.config.width/2, 8*game.config.height/9, 'Press S to go back to the starting menu', menuConfig).setOrigin(0.5);

        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keyS)) {
            this.scene.start("menuScene");    
          }
    }

}