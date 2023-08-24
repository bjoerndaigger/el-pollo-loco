class Coin extends MovableObject {
    y = 80 + Math.random() * 120; // setzen der y-Position
    x = 300 + Math.random() * 2600; // Setzen der x-Position zufällig zwischen 300 und 2200
    width = 150;
    height = 150;

    offset = {
        top: 50,
        left: 50,
        right: 50,
        bottom: 50
    };

    IMAGES_COIN = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_COIN[0]);
        this.loadImages(this.IMAGES_COIN);
        this.animate();
    }

    animate() {
        setInterval(() => { 
            this.playAnimation(this.IMAGES_COIN);
        }, 250); 
    }
}