class Diner extends Phaser.Scene {
    constructor(){
        super('Diner')
    }

    preload() {
        //character sprites
        this.load.image('Boss', 'sprites/boss.gif')
        this.load.image('Coworker', 'sprites/coworker.gif')
        this.load.image('Customer', 'sprites/customer.gif')
        this.load.image('Player', 'sprites/player.gif')

        //object sprites
        this.load.image('chair1', 'chair (blue).png')
        this.load.image('chair2', 'diner chair.png')
        this.load.image('table', 'table.png')

        //animating sprites
        this.load.spritesheet('playerSS', 'sprites/playerSSwithspatula.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 9});
    }

    create() {
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.add.image(400, 320, 'chair1').setOrigin();
        this.add.image(480, 320, 'chair2').setOrigin();
        this.add.image(440, 310, 'table').setOrigin();

        this.chef = new Player(this, 100, 120, 'Player').setScale(0.2).setOrigin();
        this.boss = new Player(this, 50, 100, 'Boss').setScale(0.2).setOrigin();
        this.coworker = new Player(this, 150, 150, 'Coworker').setScale(0.2).setOrigin();
        this.customer = new Player(this, 300, 350, 'Customer').setScale(0.2).setOrigin();
    }

    update() {
        this.chef.update();

    }
}