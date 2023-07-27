class Cloud extends MovableObject {
    width = 500; // Breite der Wolke
    height = 250; // Höhe der Wolke

    constructor(imagePath) {
        super().loadImage(imagePath); // Laden des Wolkenbildes
        this.x = 0 + Math.random() * 2800; // Zufällige horizontale Position im Bereich von 0 bis 3000
        this.y = 15 + Math.random() * 30;
        this.animate(); // Starten der Animation
    }

    animate() {
        const speedMoveLeft = 10 + Math.random() + 20;

        setInterval(() => {
            this.moveLeft();
        }, 1000 / speedMoveLeft);
    }
}



