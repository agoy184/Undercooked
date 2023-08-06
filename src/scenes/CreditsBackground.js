class CreditsBackground extends Phaser.Scene {
    constructor() {
        super('creditsBackgroundScene');
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
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // menu text
        this.add.text(game.config.width/2, game.config.height/9, 'Tileset Credits', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 2*game.config.height/9, 'Game concept takes inspiration from Overcooked/cooking simulators', smallConfig).setOrigin(0.5);

        // tile credits
        this.add.text(game.config.width/3.5, game.config.height/2, '32 Pixel Art Japanese Themed Textures\nhttps://rekkimaru.itch.io/32-pixel-art-japanese-themed-textures', smallConfig).setWordWrapWidth(game.config.width / 1.5).setAlign('center').setFontSize(10).setOrigin(0.5);
        this.add.text(game.config.width/1.3, game.config.height/2, 'AxulArt\'s BasicPlains Tileset\nhttps://axulart.itch.io/axularts-basicplains-tileset', smallConfig).setWordWrapWidth(game.config.width / 2).setAlign('center').setFontSize(10).setOrigin(0.5);

        // instructions
        this.add.text(game.config.width/1.35, 8*game.config.height/9, 'Press R to return to the title screen menu', smallConfig).setOrigin(0.5).setFontSize(12);
        this.add.text(game.config.width/4, 8*game.config.height/9, 'Press D to view music credits', smallConfig).setOrigin(0.5).setFontSize(12);

        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyD)) {
            this.scene.start("creditsMusicScene");    
        }

        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start("menuScene");    
        }
    }

}