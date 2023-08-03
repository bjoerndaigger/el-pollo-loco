class Chicken extends MovableObject {
    y = 340; // Anfangsposition des Huhns auf der y-Achse
    width = 102; // Breite des Huhn-Bildes
    height = 100; // Höhe des Huhn-Bildes
    enemyIsDead = false;

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png', // Pfad zum ersten Bild der Gehanimation
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png', // Pfad zum zweiten Bild der Gehanimation
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png' // Pfad zum dritten Bild der Gehanimation
    ];

    IMAGES_CHICKEN_DEAD = ['img/3_enemies_chicken/chicken_normal/2_dead/dead.png'];

    chicken_screams = new Audio('audio/chicken_scream.mp3');
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'); // Laden des ersten Geh-Bildes
        this.loadImages(this.IMAGES_WALKING); // Laden der restlichen Bilder der Animation

        this.x = 500 + Math.random() * 1800; // Setzen der x-Position zufällig zwischen 200 und 2200
        this.speed = 0.15 + Math.random() * 0.5; // Setzen der Geschwindigkeit auf einen zufälligen Wert zwischen 0.15 und 0.65

        this.animate(); // Starten der Animation
    }

    animate() {
        setInterval(() => {
            if (!this.enemyIsDead) {
                this.moveLeft();
            }
        }, 1000 / 60);

        const chickenAnimation = setInterval(() => {
            if (this.enemyIsDead) {
                this.chicken_screams.play();
                this.loadImage(this.IMAGES_CHICKEN_DEAD);
                this.stopAnimation(chickenAnimation);

            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }

    stopAnimation(chickenAnimation) {
        clearInterval(chickenAnimation);
        setTimeout(() => {
            this.loadImage('');
        }, 1500);
    }

}






