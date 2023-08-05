class BarUIElement {
    // BARS CAN ONLY GO HORIZONTALLY FOR NOW
    constructor(scene, centerX, centerY, length, width, barImgName, barName, startVal){
        this.scene = scene
        this.centerX = centerX
        this.centerY = centerY
        this.length = length
        this.width = width
        this.name = barName
        this.curVal = startVal

        this.barLayer = scene.add.layer();
        let graphics = scene.make.graphics();
        graphics.fillStyle(0xffffff);
        //graphics.fillCircle(centerX, centerY, 500)
        graphics.fillRect(centerX - length / 2, centerY - width / 2, length, width);

        const mask = graphics.createGeometryMask();
 
        this.barLayer.setMask(mask);
 
        let x = centerX - length
        this.barSprite = this.barLayer.add(scene.make.sprite({x, centerY, key: barImgName}))

        this.startCap = scene.add.sprite(centerX - length / 2, centerY, 'BarCap').setOrigin(0.5)
        this.endCap   = scene.add.sprite(centerX + length / 2, centerY, 'BarCap').setOrigin(0.5)
        this.endCap.flipX = true

        this.startCap.displayHeight = width * 1.1
        this.endCap.displayHeight = width * 1.1
        this.barSprite.displayHeight = width 
        this.barSprite.displayWidth = length * 1.05
    }

    updateProgress(amount){
        this.curVal += amount
        if(this.curVal < 0)  { this.curVal = 0 }
        if(this.curVal > 100){ this.curVal = 100 }

        this.barSprite.x = this.centerX - this.length + (this.curVal / 100) * this.length
        this.barSprite.y = this.centerY
    }   
}