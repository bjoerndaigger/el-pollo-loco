class MovableObject {
    x = 120;
    y = 290;
    img; // Das Bild des Objekts. Diese Variable wird später verwendet, um das Bild zu speichern.
    width = 100;
    height = 150;
    imageCache = []; // Ein Array, das zum Zwischenspeichern von Bildpfaden verwendet wird.
    currentImage = 0; // Index des aktuellen Bildes in der Animation
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) { // Ausführung nur solange y-Achse kleiner 155px oder speedY größer 0
                this.y -= this.speedY; // y-Achse wird um Wert von speedY reduziert
                this.speedY -= this.acceleration; // speedY wird um Beschleunigung reduziert
            }
        }, 1000 / 25) // 25 mal pro Sekunde
    }

    isAboveGround() { // returned Wert y-Achse kleiner 155 (Wert, wo Character den Boden berührt)
        return this.y < 155;
    }

    loadImage(path) { // Methode zum Laden eines Bildes. Der Pfad des Bildes muss als Argument übergeben werden.
        this.img = new Image(); // Erzeugt ein neues Image-Objekt.
        this.img.src = path; // Weist dem Bildpfad den übergebenen Pfad zu.
    }

    loadImages(arr) { // Methode zum Laden mehrerer Bilder.
        arr.forEach((path) => { // Iteriert über jedes Element des übergebenen Arrays.
            let img = new Image(); // Erzeugt ein neues Image-Objekt.
            img.src = path; // Weist dem Bildpfad den aktuellen Pfad aus dem Array zu.
            this.imageCache[path] = img; // Speichert das Image-Objekt im imageCache-Array unter dem entsprechenden Pfad.
        });
    }

    playAnimation(IMAGES_WALKING) {
        let i = this.currentImage % this.IMAGES_WALKING.length; // Modulo-Operator: i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, etc. 
        let path = this.IMAGES_WALKING[i]; // Pfad des aktuellen Bildes in der Animation
        this.img = this.imageCache[path]; // Zuweisen des Bildes an die Variable "img" in MovableObjects
        this.currentImage++; // Ansteigen des Indexes für das nächste Bild
    }

    moveRight() {
        this.x += this.speed; // Bewege den Charakter nach rechts
        
    }

    moveLeft() {
        this.x -= this.speed; // Bewege den Charakter nach links, wenn die Linkspfeiltaste gedrückt wird
    }

    jump() {
        this.speedY = 30;
    }
}







