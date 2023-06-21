class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;

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
    
    drawFrame(ctx) { // Rahmen um Movable Objects anzeigen lassen
        if (this instanceof Character || this instanceof Chicken) { // nur für Character und Chicken
            ctx.beginPath(); // Beginne einen neuen Pfad für die Zeichnung.
            ctx.lineWidth = '5'; // Setze die Linienbreite auf 5 Pixel.
            ctx.strokeStyle = 'blue'; // Setze die Linienfarbe auf Blau.
            ctx.rect(this.x, this.y, this.width, this.height); // Zeichne ein Rechteck mit den angegebenen Koordinaten und Abmessungen (x, y, Breite, Höhe)
            ctx.stroke(); // Führe den Strich aus, um das Rechteck zu zeichnen.
        }
    }

    isColliding(mo) { // Überprüft, wann die Kollision stattfindet
        return (
            this.x + this.width > mo.x &&  // Überprüft, ob die rechte Seite des Charakters rechts von der linken Seite des übergebenen Objekts liegt
            this.y + this.height > mo.y &&  // Überprüft, ob die untere Seite des Charakters unterhalb der oberen Seite des übergebenen Objekts liegt
            this.x < mo.x &&  // Überprüft, ob die linke Seite des Charakters links von der rechten Seite des übergebenen Objekts liegt
            this.y < mo.y + mo.height  // Überprüft, ob die obere Seite des Charakters oberhalb der unteren Seite des übergebenen Objekts liegt
        );
    }

    hit() {
        this.energy -= 5; // Wenn Kollision stattfindet, sinkt Wert von Variable energy um 5
        if (this.energy < 0) { // Verhindert, dass energy in den Minusbereich geht.
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime(); // Anzahl der Millisekunden, die seit dem 1. Januar 1970, 00:00:00 UTC vergangen sind
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Millisekunden,seit 1. Januar 1970, 00:00:00 UTC minus Millisekunden der letzten Kollision
        timepassed = timepassed / 1000; // Differenz in Sekunden
        return timepassed < 1; // return true, solange Kollision kleiner als eine Sekunde ist
    }

    isDead() {
        return this.energy == 0;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; // Modulo-Operator: i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, etc. 
        let path = images[i]; // Pfad des aktuellen Bildes in der Animation
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







