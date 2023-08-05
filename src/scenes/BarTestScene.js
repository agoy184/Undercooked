class BarTestScene extends Phaser.Scene {
    constructor() {
        super('barTestScene');
    }

    preload(){
        this.load.image('blueBar', 'assets/sprites/blueBar.png');
        this.load.image('redBar', 'assets/sprites/redBar.png');
        this.load.image('BarCap', 'assets/sprites/barCap.png');
    }

    create(){
        let timeBarLength = 200
        let timeBarHeight = 40
        this.timeBar = new BarUIElement(this, 
            game.config.width/2,
            game.config.height/2,
            timeBarLength,
            timeBarHeight,
            'blueBar',
            "Time Remaining",
            100
        )

        let progBarLength = 400
        let progBarHeight = 80
        this.progressBar = new BarUIElement(this, 
            game.config.width/2,
            game.config.height/2 + 100,
            progBarLength,
            progBarHeight,
            'redBar',
            "Progress",
            0
        )

        this.tickrate = 10
        this.timer = this.tickrate

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }


    update(time, delta){
        this.timer -= delta;
        if(this.timer < this.tickrate){
            this.timer = this.tickrate
            console.log("Hello")
            this.timeBar.updateProgress(-1);
        }
        
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            console.log("asdfasdf")
            this.progressBar.updateProgress(5)
        }
    }
}