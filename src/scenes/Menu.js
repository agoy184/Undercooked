class Menu extends Phaser.Scene{
    constructor() {
        super('menuScene');
    }

    create() {
        let menuConfig = {
            fontFamily: 'Fantasy',
            fontSize: '35px',
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
            fontFamily: 'Fantasy',
            fontSize: '27px',
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
        this.add.text(game.config.width/2, game.config.height/6, 'Interning God', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Press SPACE to start', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/5, game.config.height/1.25, 'Press D for credits', smallConfig).setOrigin(0.5);
        this.add.text(game.config.width/1.25, game.config.height/1.25, 'Press A for controls', smallConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/1.05, 'For Narrative Jam & Improve Your Game Jam 2023', smallConfig).setOrigin(0.5);

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            // Play mode
            this.sound.play('sfx_select');            
            this.scene.start("introScene");    
        }

        if (Phaser.Input.Keyboard.JustDown(keyD)) {
            // Credits mode
            this.sound.play('sfx_select');
            this.scene.start("creditsMusicScene");    
        }

        if (Phaser.Input.Keyboard.JustDown(keyA)) {
           // Control mode
           this.sound.play('sfx_select');
           this.scene.start("controlsScene");    
       }
    }
}
