class StatusBarBottles extends DrawableObject {
    IMAGES_STATUSBAR_BOTTLES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUSBAR_BOTTLES);
        this.x = 40;
        this.y = 50;
        this.width = 200;
        this.height = 53;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage; // Bekommt Wert von Variable energy, die bei jeder Kollision sinkt
        let path = this.IMAGES_STATUSBAR_BOTTLES[this.resolveImageIndex()]; // Zuweisung der URL des gewünschten Bildes (Zahl zwischen 0 und 5) an path
        this.img = this.imageCache[path]; // laden des Pfades aus Array imageCache und zuweisen des Bildes an die Variable "img" in DrawableObjects
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}