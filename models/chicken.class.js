class Chicken extends MovableObject {
    y = 340; // Anfangsposition des Huhns auf der y-Achse
    width = 102; // Breite des Huhn-Bildes
    height = 100; // Höhe des Huhn-Bildes
    chickenIsDead = false;
    chickenScreams = false;

    offset = {
        top: 5,
        left: 5,
        right: 5,
        bottom: 5
    };

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png', // Pfad zum ersten Bild der Gehanimation
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png', // Pfad zum zweiten Bild der Gehanimation
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png' // Pfad zum dritten Bild der Gehanimation
    ];

    IMAGES_CHICKEN_DEAD = ['img/3_enemies_chicken/chicken_normal/2_dead/dead.png'];
    
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'); // Laden des ersten Geh-Bildes
        this.loadImages(this.IMAGES_WALKING); // Laden der restlichen Bilder der Animation

        this.x = 500 + Math.random() * 3100; // Setzen der x-Position zufällig zwischen 500 und 2900
        this.speed = 0.15 + Math.random() * 0.5; // Setzen der Geschwindigkeit auf einen zufälligen Wert zwischen 0.15 und 0.65

        this.animate(); // Starten der Animation
    }

    animate() {
        setInterval(() => {
            if (!this.chickenIsDead) {
                this.moveLeft();
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.chickenIsDead && !this.chickenScreams) {
                chicken_screams.play();
                this.loadImage(this.IMAGES_CHICKEN_DEAD);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }
}






