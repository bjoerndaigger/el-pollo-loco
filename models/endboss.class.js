class Endboss extends MovableObject {
    y = 160;
    x = 2500; // Startkoordinate
    width = 250;
    height = 291;
    speed = 2.5;

    IMAGES_WALKING = [ // Bilder für die Gehanimation
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'

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

    chicken_alarm = new Audio('audio/chicken_alarm.mp3')

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]); // Laden des ersten Geh-Bildes
        this.loadImages(this.IMAGES_WALKING); // Laden der restlichen Bilder der Animation
        this.loadImages(this.IMAGES_ATTACK);
        this.animate();

    }

    animate() {
        setInterval(() => {
            const positionCharacter = world.character.x;
            const positionEndboss = this.x;
            const distance = positionEndboss - positionCharacter;

            if (distance > 400) {
                this.playAnimation(this.IMAGES_WALKING);

            } else if (distance < 400) {
                this.chicken_alarm.play();
                this.playAnimation(this.IMAGES_ATTACK);
            }

            if (distance > 500)
                this.moveLeft();
                console.log('Walks');
        }, 200);


    }
}








