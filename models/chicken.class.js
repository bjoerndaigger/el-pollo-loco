class Chicken extends MovableObject {
    y = 340; // Anfangsposition des Huhns auf der y-Achse
    width = 102; 
    height = 100; 
    enemyIsDead = false;

    offset = {
        top: 5,
        left: 5,
        right: 5,
        bottom: 5
    };

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png', 
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png', 
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png' 
    ];

    IMAGES_CHICKEN_DEAD = ['img/3_enemies_chicken/chicken_normal/2_dead/dead.png'];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]); 
        this.loadImages(this.IMAGES_WALKING); 
        this.x = 600 + Math.random() * 3000; 
        this.speed = 0.15 + Math.random() * 0.5; 
        this.animate(); 
    }

    animate() {
        setInterval(() => {
            this.chickenMoves();
        }, 1000 / 60);
        this.chickenAnimation();
    }
    
    chickenAnimation() {
        const chickenAnimation = setInterval(() => {
            if (this.enemyIsDead) {
                this.loadImage(this.IMAGES_CHICKEN_DEAD);
                chicken_screams.play();
                this.stopAnimation(chickenAnimation);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }
    
    chickenMoves() {
        if (!this.enemyIsDead) {
            this.moveLeft();
        }
    }
    
    stopAnimation(chickenAnimation) {
        clearInterval(chickenAnimation);
        setTimeout(() => {
            this.loadImage('');
        }, 750);
    }
    
}






