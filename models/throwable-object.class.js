class ThrowableObject extends MovableObject {
    
    constructor(x, y) {
        super().loadImage('./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width= 100;
        this.throw();
    }

    throw() {
        this.speedY = 30; // Fallgeschwindigkeit
        this.applyGravity(); // Objekt fällt nach unten
        setInterval(() => {
            this.x += 10;
        }, 25);
    }
}



