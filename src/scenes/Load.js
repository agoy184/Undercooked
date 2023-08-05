class Load extends Phaser.Scene {
    constructor(){
        super('preLoad')
    }

    preload() {
        this.add.text(game.config.width / 2, game.config.height / 2.5, 'Loading...').setOrigin(0.5, 0.5);

        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();                                 // reset fill/line style
            loadingBar.fillStyle(0xFFFFFF, 1);                  // (color, alpha)
            loadingBar.fillRect(0, game.config.height/2, game.config.width * value, 10);  // (x, y, w, h)
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });

        this.load.path = './assets/';

        // background audio
        this.load.audio('scene_1_background_music', 'audio/Greener_Pastures-Darren_Curtis.mp3');
        this.load.audio('scene_2_background_music', 'audio/Sakuya2-PerituneMaterial.mp3');
        this.load.audio('scene_3_background_music', 'audio/Rain_on_the_Window-Alex_Productions.mp3');

        //sfx
        this.load.audio('sfx_select', 'audio/pop.wav');
        this.load.audio('open_container', ['audio/open_container.wav', 'audio/open_container.mp3', 'audio/open_container.ogg']);
        this.load.audio('tele_ring', ['audio/uk-old-104244.mp3']);

        // images
        // character images
        this.load.image('Tomi', 'sprites/tomi_spr.png')
        this.load.image('TomiDead', 'sprites/tomi_spr_dead.png')
        this.load.image('Shukichi', 'sprites/shukichi_spr.png')
        this.load.image('ShukichiSad', 'sprites/shukichi_spr_sad.png')
        this.load.image('ShukichiL', 'sprites/shukichi_spr_L.png')
        this.load.image('ShukichiR', 'sprites/shukichi_spr_R.png')
        this.load.image('ShukichiB', 'sprites/shukichi_spr_B.png')
        this.load.image('Shige', 'sprites/shige_spr.png')
        this.load.image('ShigeSad', 'sprites/shige_spr_sad.png')
        this.load.image('Koichi', 'sprites/koichi_spr.png')
        this.load.image('KoichiSad', 'sprites/koichi_spr_sad.png')
        this.load.image('Noriko', 'sprites/noriko_spr.png')
        this.load.image('NorikoSad', 'sprites/noriko_spr_sad.png')
        this.load.image('Kyoko', 'sprites/kyoko_spr.png')
        this.load.image('Keizo', 'sprites/keizo_spr.png')

        // tilemap
        this.load.image('wallset', 'tilesets/monoJPWallset.png')
        this.load.image('ocean', 'tilesets/monoBasicBeach.png')
        // scene 1
        this.load.tilemapTiledJSON('s1JSON', 'scene1_tilemap/scene1.json')
        // scene 2
        this.load.tilemapTiledJSON('s2HotelJSON', 'scene2_tilemap/scene2Hotel.json')
        this.load.tilemapTiledJSON('s2OceanJSON', 'scene2_tilemap/scene2Ocean.json')
        this.load.tilemapTiledJSON('s2GroundJSON', 'scene2_tilemap/scene2OceanGround.json')
        // scene 3
        this.load.tilemapTiledJSON('s3JSON', 'scene3_tilemap/scene3.json')

        // dialog images
        this.load.image('dialog_box', '/dialog_images/dialog_box.png');
        // normal
        this.load.image('Shukichi_Dialog', 'dialog_images/shukichi_cu.png');
        this.load.image('Tomi_Dialog', 'dialog_images/tomi_cu.png');
        this.load.image('Shige_Dialog', 'dialog_images/shige_cu.png');
        this.load.image('Noriko_Dialog', 'dialog_images/noriko_cu.png');
        this.load.image('Koichi_Dialog', 'dialog_images/koichi_cu.png');
        // sad
        this.load.image('Shukichi_Dialog_Sad', 'dialog_images/shukichi_cu_sad.png');
        this.load.image('Shige_Dialog_Sad', 'dialog_images/shige_cu_sad.png');
        this.load.image('Koichi_Dialog_Sad', 'dialog_images/koichi_cu_sad.png');
        this.load.image('Kyoko_Dialog_Sad', 'dialog_images/kyoko_cu.png');
        this.load.image('Keizo_Dialog_Sad', 'dialog_images/keizo_cu.png');
        this.load.image('Noriko_Dialog_Sad', 'dialog_images/noriko_cu_sad.png');
    }

    create() {
        this.scene.start('menuScene');
    }
}
