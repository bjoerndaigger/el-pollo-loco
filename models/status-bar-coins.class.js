class StatusBarCoins extends DrawableObject {
    IMAGES_STATUSBAR_COINS = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUSBAR_COINS);
        this.x = 24;
        this.y = 100;
        this.width = 200;
        this.height = 53;
        this.setCoins(0);
    }

    setCoins(coinAmount) {
        this.coinAmount = coinAmount; // Bekommt Wert von Variable bottleAmount, die bei jeder Kollision steigt
        let path = this.IMAGES_STATUSBAR_COINS[this.resolveImageIndex()]; // Zuweisung der URL des gewünschten Bildes (Zahl zwischen 0 und 5) an path
        this.img = this.imageCache[path]; // laden des Pfades aus Array imageCache und zuweisen des Bildes an die Variable "img" in DrawableObjects
    }

    resolveImageIndex() {
        if (this.coinAmount > 4) {
            return 5;
        } else if (this.coinAmount > 3) {
            return 4;
        } else if (this.coinAmount > 2) {
            return 3;
        } else if (this.coinAmount > 1) {
            return 2;
        } else if (this.coinAmount > 0) {
            return 1;
        } else {
            return 0;
        }
    }
}