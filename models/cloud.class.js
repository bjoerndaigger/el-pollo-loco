class Cloud extends MovableObject {
    y = 20; // Vertikale Position der Wolke
    width = 500; // Breite der Wolke
    height = 250; // Höhe der Wolke

    constructor() {
        super().loadImage('../img/5_background/layers/4_clouds/1.png'); // Laden des Wolkenbildes
        this.x = Math.random() * 500; // Zufällige horizontale Position im Bereich von 0 bis 500
        this.animate(); // Starten der Animation
    }

    animate() {
       this.moveLeft();
    }
}



