class Intro extends Phaser.Scene {
    constructor() {
        super('introScene');
    }

    create() {
        this.cameras.main.setBackgroundColor('rgba(0, 0, 0, 1)')
        this.add.text(game.config.width / 2, game.config.height / 2, 'Day 1 of working at the worst restaraunt ever').setOrigin(0.5).setWordWrapWidth(game.config.width / 2).setAlign('center');

        this.cam = this.cameras.main.fadeIn(2000, 0, 0, 0);

        this.cam.on('camerafadeincomplete', () => {
            this.cam = this.cameras.main.fadeOut(1000, 0, 0, 0);

            this.cam.on('camerafadeoutcomplete', () => {
                this.scene.start('arrivalAndNeglectScene');
            });
        })
    }
}