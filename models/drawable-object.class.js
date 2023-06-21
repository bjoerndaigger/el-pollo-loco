class DrawableObject {
    img; // Das Bild des Objekts. Diese Variable wird später verwendet, um das Bild zu speichern.
    imageCache = []; // Ein Array, das zum Zwischenspeichern von Bildpfaden verwendet wird.
    currentImage = 0; // Index des aktuellen Bildes in der Animation
    x = 120;
    y = 290;
    width = 100;
    height = 150;

    loadImage(path) { // Methode zum Laden eines Bildes. Der Pfad des Bildes muss als Argument übergeben werden.
        this.img = new Image(); // Erzeugt ein neues Image-Objekt.
        this.img.src = path; // Weist dem Bildpfad den übergebenen Pfad zu.
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);  // Den Character auf dem Canvas zeichnen
    }

    loadImages(arr) { // Methode zum Laden mehrerer Bilder.
        arr.forEach((path) => { // Iteriert über jedes Element des übergebenen Arrays.
            let img = new Image(); // Erzeugt ein neues Image-Objekt.
            img.src = path; // Weist dem Bildpfad den aktuellen Pfad aus dem Array zu.
            this.imageCache[path] = img; // Speichert das Image-Objekt im imageCache-Array unter dem entsprechenden Pfad.
        });
    }
}




