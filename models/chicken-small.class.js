class ChickenSmall extends MovableObject {
    y = 380; // Anfangsposition des Huhns auf der y-Achse
    width = 60; 
    height = 53; 
    enemyIsDead = false;

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };
    
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png', 
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png', 
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png' 
    ];

    IMAGES_SMALL_CHICKEN_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];
    
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]); 
        this.loadImages(this.IMAGES_WALKING); 
        this.x = 600 + Math.random() * 3000; 
        this.speed = 0.15 + Math.random() * 0.5; 
        this.animate(); 
    }

    animate() {
        setInterval(() => {
            if (!this.enemyIsDead) {
                this.moveLeft();
            }
        }, 1000 / 60);

        const chickenSmallAnimation = setInterval(() => {
            if (this.enemyIsDead) {
                this.loadImage(this.IMAGES_SMALL_CHICKEN_DEAD);
                chicken_screams.play();
                this.stopAnimation(chickenSmallAnimation);

            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }

    stopAnimation(chickenSmallAnimation) {
        clearInterval(chickenSmallAnimation);
        setTimeout(() => {
            this.loadImage('');
        }, 750);
    }
}