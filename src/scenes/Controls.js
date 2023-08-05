class Controls extends Phaser.Scene {
    constructor() {
        super('controlsScene');
    }

    create() {
        let menuConfig = {
            fontFamily: 'Verdana',
            fontSize: '28px',
            backgroundColor: '#303030',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        let smallConfig = {
            fontFamily: 'Verdana',
            fontSize: '17px',
            backgroundColor: '#303030',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.text(game.config.width/2, game.config.height/2.5, 'Controls\nWASD to move\nSPACE to continue dialog', menuConfig).setAlign('center').setOrigin(0.5);

        this.add.text(game.config.width/2, 8*game.config.height/9, 'Press R to return to the title screen menu', smallConfig).setOrigin(0.5);

        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start("menuScene");    
        }
    }


}