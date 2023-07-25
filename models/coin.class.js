class Coin extends MovableObject {
    y = 100 + Math.random() * 250;
    x = 300 + Math.random() * 2000; // Setzen der x-Position zufällig zwischen 300 und 2200
    width = 150;
    height = 150;
    IMAGES_COIN = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];

    constructor() {
        super().loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.IMAGES_COIN);
    }
}