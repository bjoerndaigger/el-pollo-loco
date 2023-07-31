class ThrowableObject extends MovableObject {

    IMAGES_THROWING = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    IMAGES_SPLASHING_BOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];


    constructor(x, y) {
        super().loadImage('./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES_THROWING);
        this.loadImages(this.IMAGES_SPLASHING_BOTTLE);
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 100;
        this.throw();
    }


    throw() {
        this.speedY = 30; // Fallgeschwindigkeit
        this.applyGravity(); // Objekt fällt nach unten
        this.animate();

        setInterval(() => {
            if (this.y < 325) {
                this.x += 8;
            }
        }, 25);
    }

    animate() {
        const bottleAnimation = setInterval(() => {
            const collisionDetected = world.checkCollisionEndbossThrownBottle();

            if (this.y < 240) {
                this.playAnimation(this.IMAGES_THROWING);
            }
    
            if (this.y > 240) {
                this.playAnimation(this.IMAGES_SPLASHING_BOTTLE);
                this.stopAnimation(bottleAnimation);
            }

            if (collisionDetected) {
                this.playAnimation(this.IMAGES_SPLASHING_BOTTLE);
                this.stopAnimation(bottleAnimation);
            }
        }, 75);
    }

    stopAnimation(bottleAnimation) {
        clearInterval(bottleAnimation);
        setTimeout(() => {
            this.loadImage('');
        }, 150);
    }
}


