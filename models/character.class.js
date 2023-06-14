class Character extends MovableObject {
    y = 55;
    width = 142;
    height = 280;
    speed = 10;

    IMAGES_WALKING = [ // Array mit den Bildpfaden für die Animation des Gehens
        '../img/2_character_pepe/2_walk/W-21.png',
        '../img/2_character_pepe/2_walk/W-22.png',
        '../img/2_character_pepe/2_walk/W-23.png',
        '../img/2_character_pepe/2_walk/W-24.png',
        '../img/2_character_pepe/2_walk/W-25.png',
        '../img/2_character_pepe/2_walk/W-26.png',
    ];
    world;
    walking_sound = new Audio('../audio/running.mp3'); // Laufgeräusch

    constructor() {
        super().loadImage('../img/2_character_pepe/2_walk/W-21.png'); // Laden des ersten Bildes der Animation
        this.loadImages(this.IMAGES_WALKING); // Laden der restlichen Bilder der Animation
        this.applyGravity(); // Starten der Fallanimation
        this.animate(); // Starten der Gehanimation
    }

    animate() {
        setInterval(() => {
            this.walking_sound.pause(); // Stoppen des Audios für das Gehen
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) { // Animation wird nur ausgeführt, wenn ich Arrow Right auf Tastatur drücke
                this.x += this.speed; // Bewege den Charakter nach rechts, wenn die Rechtspfeiltaste gedrückt wird
                this.otherDirection = false; // Character wird nicht gespiegelt
                this.walking_sound.play(); // Abspielen des Laufaudios
            }

            if (this.world.keyboard.LEFT && this.x > 0) { // Animation wird nur ausgeführt, wenn ich Arrow Left auf Tastatur drücke
                this.x -= this.speed; // Bewege den Charakter nach links, wenn die Linkspfeiltaste gedrückt wird
                this.otherDirection = true; // Character wird gespiegelt
                this.walking_sound.play(); // Abspielen des Laufaudios
            }
            this.world.camera_x = -this.x + 100; // Aktualisiere die Position der Kamera basierend auf der X-Position des Charakters

        }, 1000 / 60); // Führe die Animation 60 Mal pro Sekunde aus (etwa 16,67 Millisekunden)

        setInterval(() => { // Walk Animation
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) { // Animation wird ausgeführt, wenn ich Arrow Right oder Arrow Left auf Tastatur drücke
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 50); // Wiederholen der Animation alle 50 Millisekunden
    }

    jump() {

    }
}













