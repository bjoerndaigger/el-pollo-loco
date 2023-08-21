class Character extends MovableObject {
    y = 155;
    width = 142;
    height = 280;
    speed = 10;
    jumpOnEnemy = false;

    offset = {
        top: 140,
        left: 40,
        right: 50,
        bottom: 10
    };

    IMAGES_IDLE = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png',
    ];

    IMAGES_WALKING = [ // Array mit den Bildpfaden für die Animation des Gehens
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMPING = [ // Array mit den Bildpfaden für die Animation des Springens
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];

    IMAGES_DEAD = [ // Array mit den Bildpfaden für die Animation des Sterbens
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];

    IMAGES_HURT = [ // Array mit den Bildpfaden für die Animation des verletzt werdens
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png',
    ];

    world;
    walking_sound = new Audio('./audio/running.mp3'); // Laufgeräusch

    constructor() {
        super().loadImage(this.IMAGES_IDLE[0]); // Laden des ersten Bildes der Animation
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING); // Laden der restlichen Bilder der Animation
        this.loadImages(this.IMAGES_JUMPING); // Laden der Bilder des Springens
        this.loadImages(this.IMAGES_DEAD); // Laden der Bilder des Sterbens
        this.loadImages(this.IMAGES_HURT); // Laden der Bilder des verletzt werdens
        this.applyGravity(); // Starten der Fallanimation
        this.animate(); // Starten der Animationen
    }

    animate() {
        setInterval(() => {
            this.walking_sound.pause(); // Stoppen des Audios für das Gehen
            // Animation wird nur ausgeführt, wenn ich Arrow Right auf Tastatur drücke und x-Achsenwert kleiner als Endwert der x-Achse ist
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false; // Character wird nicht gespiegelt
                this.walking_sound.play(); // Abspielen des Laufaudios
            }
            // Animation wird nur ausgeführt, wenn ich Arrow Left auf Tastatur drücke
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true; // Character wird gespiegelt
                this.walking_sound.play(); // Abspielen des Laufaudios
            }
            // Animation wird nur ausgeführt, wenn ich Space-Taste drücke und wenn isAboveGround() false zurückgibt
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }
            // Aktualisiere die Position der Kamera basierend auf der X-Position des Charakters
            this.world.camera_x = -this.x + 100;

        }, 1000 / 60); // Führe die Animation 60 Mal pro Sekunde aus (etwa 16,67 Millisekunden)

        setInterval(() => { // Walk/Jump/Dead/Hurt Animation
            if (this.isDead()) { // Animation wird ausgeführt, wenn Character "dead" ist
                this.playAnimation(this.IMAGES_DEAD);
                setTimeout(() => {
                    gameLost();
                }, 1500);
            } else if (this.isHurt()) { // Animation wird ausgeführt, wenn isHurt() true zurückgibt
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isAboveGround()) { // Animation wird ausgeführt bei return von einem bestimmten Wert der x-Achse
                this.playAnimation(this.IMAGES_JUMPING);
            } else { // Animation wird ausgeführt, wenn ich Arrow Right oder Arrow Left auf Tastatur drücke
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                } else {
                    this.playAnimation(this.IMAGES_IDLE);
                }
            }
        }, 50); // Wiederholen der Animation alle 50 Millisekunden
    }
}


















