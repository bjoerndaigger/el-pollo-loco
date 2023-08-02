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

    bottle_breaks = new Audio('audio/breaking_bottle.mp3');

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
            const characterOtherDirection = world.character.otherDirection;
            if (this.y < 325 && !characterOtherDirection) {
                this.x += 8;
            }
            if (this.y < 325 && characterOtherDirection) { // Flasche in andere Richtung werdeb
                this.x -= 8;
            }
        }, 25);
    }

    animate() {
        const bottleAnimation = setInterval(() => {
            const collisionEndboss = world.checkCollisionEndbossThrownBottle();
            // console.log(collisionEndboss);

            if (this.y < 260) {
                this.playAnimation(this.IMAGES_THROWING);
            }
    
            if (this.y > 260) {
                this.bottle_breaks.play();
                this.playAnimation(this.IMAGES_SPLASHING_BOTTLE);
                this.stopAnimation(bottleAnimation);
            }

            if (collisionEndboss) {
                setTimeout(() => {
                    this.bottle_breaks.play();
                    this.playAnimation(this.IMAGES_SPLASHING_BOTTLE);
                    this.stopAnimation(bottleAnimation);
                }, 500)
            }
        }, 100);
    }

    stopAnimation(bottleAnimation) {
        clearInterval(bottleAnimation);
        setTimeout(() => {
            this.loadImage('');
        }, 150);
    }
}


