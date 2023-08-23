class StatusBarEndboss extends DrawableObject {
    IMAGES_STATUSBAR_ENDBOSS = [
        'img/7_statusbars/2_statusbar_endboss/blue/0.png',
        'img/7_statusbars/2_statusbar_endboss/blue/20.png',
        'img/7_statusbars/2_statusbar_endboss/blue/40.png',
        'img/7_statusbars/2_statusbar_endboss/blue/60.png',
        'img/7_statusbars/2_statusbar_endboss/blue/80.png',
        'img/7_statusbars/2_statusbar_endboss/blue/100.png'
    ];
    
    // percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUSBAR_ENDBOSS);
        this.x = 496;
        this.y = 100;
        this.width = 200;
        this.height = 53;
        this.setPercentage(60);
    }

    setPercentage(percentage) {
        this.percentage = percentage; // Bekommt Wert von Variable energy, die bei jeder Kollision sinkt
        let path = this.IMAGES_STATUSBAR_ENDBOSS[this.resolveImageIndex()]; // Zuweisung der URL des gewünschten Bildes (Zahl zwischen 0 und 5) an path
        this.img = this.imageCache[path]; // laden des Pfades aus Array imageCache und zuweisen des Bildes an die Variable "img" in DrawableObjects
    }

    resolveImageIndex() {
        if (this.percentage == 60) {
            return 5;
        } else if (this.percentage > 48) {
            return 4;
        } else if (this.percentage > 36) {
            return 3;
        } else if (this.percentage > 24) {
            return 2;
        } else if (this.percentage > 12) {
            return 1;
        } else {
            return 0;
        }
    }
}