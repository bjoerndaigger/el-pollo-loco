class Endboss extends MovableObject {
    y = 160;
    x = 2500; // Startkoordinate
    width = 250;
    height = 291;
    speed = 2.5;

    offset = {
        top: 80,
        left: 70,
        right: 70,
        bottom: 40
    };

    IMAGES_WALKING = [ // Bilder für die Gehanimation
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'

    ];

    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];


    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]); // Laden des ersten Geh-Bildes
        this.loadImages(this.IMAGES_WALKING); // Laden der restlichen Bilder der Animation
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.animate();

    }

    animate() {
        let i = 0;
        setInterval(() => {
            const positionCharacter = world.character.x;
            const positionEndboss = this.x;
            const distance = positionEndboss - positionCharacter;

            if (distance < 400) {
                if (i < 8) {
                    this.playAnimation(this.IMAGES_ALERT)
                } else {
                    chicken_alarm.play();
                    this.playAnimation(this.IMAGES_ATTACK);
                }
                i++;
                
            } else {
                this.playAnimation(this.IMAGES_WALKING);
                this.moveLeft();
            }
        }, 200);
    }
}


/* else if (world.checkCollisionEndbossThrownBottle()) {
    this.bottleSplash();
    console.log('Collision Endboss');
} */





