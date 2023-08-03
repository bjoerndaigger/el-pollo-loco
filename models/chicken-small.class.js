class ChickenSmall extends MovableObject {
    y = 380; // Anfangsposition des Huhns auf der y-Achse
    width = 60; // Breite des Huhn-Bildes
    height = 53; // Höhe des Huhn-Bildes
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png', // Pfad zum ersten Bild der Gehanimation
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png', // Pfad zum zweiten Bild der Gehanimation
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png' // Pfad zum dritten Bild der Gehanimation
    ];

    IMAGES_SMALL_CHICKEN_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];
    
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png'); // Laden des ersten Geh-Bildes
        this.loadImages(this.IMAGES_WALKING); // Laden der restlichen Bilder der Animation
        
        this.x = 500 + Math.random() * 1800; // Setzen der x-Position zufällig zwischen 200 und 2200
        this.speed = 0.15 + Math.random() * 0.5; // Setzen der Geschwindigkeit auf einen zufälligen Wert zwischen 0.15 und 0.65

        this.animate(); // Starten der Animation
    }

    killEnemy() {
        this.enemyIsDead = true;
    }
    
    animate() {
        setInterval(() => {
            if (!this.enemyIsDead) {
                this.moveLeft();
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.enemyIsDead) {
                this.loadImage(this.IMAGES_SMALL_CHICKEN_DEAD);

            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }
}