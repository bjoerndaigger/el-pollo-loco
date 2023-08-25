class Endboss extends MovableObject {
    y = 160;
    x = 3600; // Startkoordinate
    width = 250;
    height = 291;
    speed = 5;
    energy = 60;
    distanceTimer = 0;

    /**
     * Offset values for collision detection.
     * @type {{ top: number, left: number, right: number, bottom: number }}
     */
    offset = {
        top: 80,
        left: 70,
        right: 70,
        bottom: 40
    };

    IMAGES_WALKING = [
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

    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
    }

    /**
    * Animate the end boss character.
    */
    animate() {
        setInterval(() => {
            this.endbossAnimations();
        }, 200);
    }

    /**
    * Perform various animations and actions based on the character's state.
    */
    endbossAnimations() {
        const distance = this.x - world.character.x;

        if (distance < 400) {
            if (this.distanceTimer < 8) {
                this.endbossAlert();
            } else {
                this.endbossAttacks();
            }
            this.distanceTimer++;
            if (world.checkCollisionEndbossThrownBottle()) {
                this.endbossHurt();
            }
            if (this.isDead() && world.collectedCoins.length >= 5) {
                this.endbossDead();
            }
        } else {
            this.endbossWalks();
        }
    }

    /**
    * Perform the walking animation and movement of the end boss.
    */
    endbossWalks() {
        this.playAnimation(this.IMAGES_WALKING);
        this.moveLeft();
    }

    /**
    * Perform the alert animation of the end boss.
    */
    endbossAlert() {
        this.playAnimation(this.IMAGES_ALERT)
    }

    /**
     * Perform the attack animation of the end boss and play a sound.
     */
    endbossAttacks() {
        chicken_alarm.play();
        this.playAnimation(this.IMAGES_ATTACK);
    }

    /**
    * Perform the hurt animation of the end boss and update the game state.
    */
    endbossHurt() {
        this.playAnimation(this.IMAGES_HURT);
        world.endbossHasBeenHit = false;
    }

    /**
    * Perform the death animation of the end boss, play sounds, and trigger a game victory after a delay.
    */
    endbossDead() {
        this.playAnimation(this.IMAGES_DEAD);
        chicken_alarm.pause();
        endboss_screams.play();
        setTimeout(() => {
            gameWon();
        }, 2000);
    }
}




