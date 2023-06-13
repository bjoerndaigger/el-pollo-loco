class BackgroundObject extends MovableObject {
    width = 720;
    height = 480;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 -this.height; // 480 (Canvas Gesamthöhe) - 400 (Background Höhe) = 80 (Wert y-Koordinate)
    }
}





