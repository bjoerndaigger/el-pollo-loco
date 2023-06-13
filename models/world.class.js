class World {
    character = new Character();  // Ein Character-Objekt erstellen
    level = level1; // Level-Variable
    canvas;  // Canvas-Variable
    ctx;  // 2D-Kontext-Variable
    keyboard;  // Keyboard-Objekt
    camera_x = 0;  // Kameraposition (Hintergrundbild) auf x-Achse

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');  // Den 2D-Kontext des Canvas-Elements abrufen
        this.canvas = canvas;  // Das Canvas-Element speichern
        this.keyboard = keyboard;  // Das Keyboard-Objekt speichern
        this.draw();  // Die draw-Funktion aufrufen
        this.setWorld();  // Die setWorld-Funktion aufrufen, um die world-Eigenschaft des Character-Objekts festzulegen
    }

    setWorld() {
        this.character.world = this;  // Die world-Eigenschaft des Character-Objekts auf diese World-Instanz setzen
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);  // Das Canvas löschen

        this.ctx.translate(this.camera_x, 0);  // Den Kontext (Hintergrund) um den Wert von camera_x verschieben

        this.addObjectsToMap(this.level.backgroundObjects);  // Die BackgroundObject-Objekte zur Karte hinzufügen
        this.addToMap(this.character);  // Das Character-Objekt zur Karte hinzufügen
        this.addObjectsToMap(this.level.enemies);  // Die Chicken-Objekte zur Karte hinzufügen
        this.addObjectsToMap(this.level.clouds);  // Die Cloud-Objekte zur Karte hinzufügen

        this.ctx.translate(-this.camera_x, 0);  // Die Translation zurücksetzen

        let self = this;  // Hilfsvariable 'self', da 'this' innerhalb von requestAnimationFrame() nicht funktioniert
        requestAnimationFrame(function () {  // Die draw-Funktion erneut ausführen
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);  // Jedes Objekt zur Karte hinzufügen
        });
    }

    addToMap(mo) { // mo steht für Movable Object und hier kommt der Character als Argument (Parameter) an
        if (mo.otherDirection) { // Wenn der Character in die andere Richtung zeigt
            this.ctx.save(); // Den aktuellen Zustand des Kontexts (der gezeichneten Bilder) speichern
            this.ctx.translate(mo.width, 0); // Den Kontext um die Breite des Characters in x-Richtung verschieben
            this.ctx.scale(-1, 1); // Die x-Achse spiegeln, um den Character umzukehren
            mo.x = mo.x * -1; // Die x-Position des Characters umkehren
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);  // Den Character auf dem Canvas zeichnen
        if (mo.otherDirection) {
            mo.x = mo.x * -1; // Die x-Position des Characters wieder umkehren, um den ursprünglichen Wert wiederherzustellen
            this.ctx.restore(); // Den vorherigen Zustand des Kontexts wiederherstellen
        }
    }
}





