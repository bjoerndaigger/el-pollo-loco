class Bottle extends MovableObject {
    y = 350;
    x = Math.floor(Math.random() * 2300); // Zufällige x-Koordinate
    width = 100;
    height = 100;
    IMAGES_BOTTLES = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    constructor() {
        super();
        this.loadRandomImage();
    }

    // Function to load random bottle image
    loadRandomImage() {
        const randomIndex = Math.floor(Math.random() * this.IMAGES_BOTTLES.length);
        this.loadImage(this.IMAGES_BOTTLES[randomIndex]);
    }
}

