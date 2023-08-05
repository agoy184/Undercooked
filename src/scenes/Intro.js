class Intro extends Phaser.Scene {
    constructor() {
        super('introScene');
    }

    create() {
        this.cameras.main.setBackgroundColor('rgba(0, 0, 0, 1)')
        this.add.text(game.config.width / 2, game.config.height / 2, 'You come to visit Tokyo with your wife Tomi to visit your children Shige and Koichi, and your daughter-in-law Noriko. You two planned to also visit your youngest son Keizo in Osaka.\n\nIt\'s been over eight years since both you and Tomi last seen them.').setOrigin(0.5).setWordWrapWidth(game.config.width / 2).setAlign('center');

        this.cam = this.cameras.main.fadeIn(2000, 0, 0, 0);

        this.cam.on('camerafadeincomplete', () => {
            this.cam = this.cameras.main.fadeOut(15000, 0, 0, 0);

            this.cam.on('camerafadeoutcomplete', () => {
                this.scene.start('arrivalAndNeglectScene');
            });
        })
    }
}