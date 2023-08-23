class StatusBarBottles extends DrawableObject {
    IMAGES_STATUSBAR_BOTTLES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUSBAR_BOTTLES);
        this.x = 24;
        this.y = 50;
        this.width = 200;
        this.height = 53;
        this.setBottles(0);
        
    }

    setBottles(bottleAmount) {
        this.bottleAmount = bottleAmount; // Bekommt Wert von Variable bottleAmount, die bei jeder Kollision steigt
        let path = this.IMAGES_STATUSBAR_BOTTLES[this.resolveImageIndex()]; // Zuweisung der URL des gewünschten Bildes (Zahl zwischen 0 und 5) an path
        this.img = this.imageCache[path]; // laden des Pfades aus Array imageCache und zuweisen des Bildes an die Variable "img" in DrawableObjects
    }

    resolveImageIndex() {
        if (this.bottleAmount > 8) {
            return 5;
        } else if (this.bottleAmount > 6) {
            return 4;
        } else if (this.bottleAmount > 4) {
            return 3;
        } else if (this.bottleAmount > 2) {
            return 2;
        } else if (this.bottleAmount > 0) {
            return 1;
        } else {
            return 0;
        }
    }
}