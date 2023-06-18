class Chicken extends MovableObject {
    y = 330; // Anfangsposition des Huhns auf der y-Achse
    width = 102; // Breite des Huhn-Bildes
    height = 100; // Höhe des Huhn-Bildes
    IMAGES_WALKING = [
        '../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png', // Pfad zum ersten Bild der Gehanimation
        '../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png', // Pfad zum zweiten Bild der Gehanimation
        '../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png' // Pfad zum dritten Bild der Gehanimation
    ];
    
    constructor() {
        super().loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'); // Laden des ersten Geh-Bildes
        this.loadImages(this.IMAGES_WALKING); // Laden der restlichen Bilder der Animation
        
        this.x = 200 + Math.random() * 500; // Setzen der x-Position zufällig zwischen 200 und 700
        this.speed = 0.15 + Math.random() * 0.5; // Setzen der Geschwindigkeit auf einen zufälligen Wert zwischen 0.15 und 0.65

        this.animate(); // Starten der Animation
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60); // Aktualisierung alle 1/60 Sekunde (60 mal pro Sekunde)
       

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200); // Wiederholen der Animation alle 200 Millisekunden
    }
}






