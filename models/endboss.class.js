class Endboss extends MovableObject {
    y = 160;
    width = 250;
    height = 291;

    IMAGES_WALKING = [ // Bilder für die Gehanimation
        '../img/4_enemie_boss_chicken/2_alert/G5.png',
        '../img/4_enemie_boss_chicken/2_alert/G6.png',
        '../img/4_enemie_boss_chicken/2_alert/G7.png',
        '../img/4_enemie_boss_chicken/2_alert/G8.png',
        '../img/4_enemie_boss_chicken/2_alert/G9.png',
        '../img/4_enemie_boss_chicken/2_alert/G10.png',
        '../img/4_enemie_boss_chicken/2_alert/G11.png',
        '../img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]); // Laden des ersten Geh-Bildes
        this.loadImages(this.IMAGES_WALKING); // Laden der restlichen Bilder der Animation
        this.x = 2500; // Startkoordinate
        this.animate(); //Aufruf der Animation

    }

    animate() {
        setInterval(() => { // Walk Animation
            this.playAnimation(this.IMAGES_WALKING);
        }, 200); // Wiederholen der Animation alle 200 Millisekunden
    }
}







