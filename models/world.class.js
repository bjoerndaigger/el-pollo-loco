class World {
    character = new Character();  // Ein Character-Objekt erstellen
    level = level1; // Level-Variable
    canvas;  // Canvas-Variable
    ctx;  // 2D-Kontext-Variable
    keyboard;  // Keyboard-Objekt
    camera_x = 0;  // Kameraposition (Hintergrundbild) auf x-Achse
    statusBarCharacter = new StatusBarCharacter(); // Ein StatusBar-Objekt erstellen
    statusBarBottles = new StatusBarBottles();
    throwableObjects = [new ThrowableObject()];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');  // Den 2D-Kontext des Canvas-Elements abrufen
        this.canvas = canvas;  // Das Canvas-Element speichern
        this.keyboard = keyboard;  // Das Keyboard-Objekt speichern
        this.draw();  // Die draw-Funktion aufrufen
        this.setWorld();  // Die setWorld-Funktion aufrufen, um die world-Eigenschaft des Character-Objekts festzulegen
        this.run(); // ruft verschiedene Funktionen mit Intervallen auf
    }

    setWorld() {
        this.character.world = this;  // Die world-Eigenschaft des Character-Objekts auf diese World-Instanz setzen
    }

    run() {
        setInterval(() => { // Die Funktion wird in regelmäßigen Intervallen aufgerufen
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200); // Das Intervall beträgt 200 Millisekunden (0,2 Sekunden)
    }

    checkThrowObjects() {
        if(this.keyboard.D) { // wenn Key D gedrückt wird, wird neue Flasche in den Array throwableObjects gepusht und geworfen
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100); // neue Flasche mit Abwurfkoordinaten des Characters
            this.throwableObjects.push(bottle);
        }
    }

    checkCollisions() {
        this.checkCollisionCharacterEnemies();
        this.checkCollisionBottlesToCollect();
    }

    // checks if character collides with enemies
    checkCollisionCharacterEnemies() { // Überprüft ob zwei Objekte kollidieren
        this.level.enemies.forEach((enemy) => { // Durchlaufe die Liste der Gegner im Level
            if (this.character.isColliding(enemy)) { // Überprüfe, ob der Charakter mit dem aktuellen Gegner kollidiert
               this.character.hit();
               this.statusBarCharacter.setPercentage(this.character.energy); // Aufruf der StatusBar Images bei jeder Kollision
            }
        })
    }

   // checks if character collides with bottles
    checkCollisionBottlesToCollect() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                console.log('Hit');
                this.character.hit();
                this.statusBarBottles.setPercentage(this.character.energy); // Aufruf der StatusBar Images bei jeder Kollision
            }
        })
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);  // Da£s Canvas löschen
        this.ctx.translate(this.camera_x, 0);  // Den Kontext (Hintergrund) um den Wert von camera_x verschieben
        this.addObjectsToMap(this.level.backgroundObjects);  // Die BackgroundObject-Objekte zur Karte hinzufügen

        this.ctx.translate(-this.camera_x, 0);  // Die Translation für fixierten StatusBar zurücksetzen
        // --- Space for fixed objects --- //
        this.addToMap(this.statusBarCharacter); // Das StatusBar-Objekt zur Karte hinzufügen
        this.addToMap(this.statusBarBottles);
        this.ctx.translate(this.camera_x, 0);  // Den Kontext (Hintergrund) um den Wert von camera_x erneut verschieben

        this.addToMap(this.character);  // Das Character-Objekt zur Karte hinzufügen
        this.addObjectsToMap(this.level.clouds);  // Die Cloud-Objekte zur Karte hinzufügen
        this.addObjectsToMap(this.level.enemies);  // Die Chicken-Objekte zur Karte hinzufügen
        this.addObjectsToMap(this.throwableObjects); // Die Throwable-Objekte zur Karte hinzufügen
        this.addObjectsToMap(this.level.bottles);


        this.ctx.translate(-this.camera_x, 0);  // Die Translation zurücksetzen

        let self = this;  // Hilfsvariable 'self', da 'this' innerhalb von requestAnimationFrame() nicht funktioniert
        requestAnimationFrame(function () {  // Die draw-Funktion erneut ausführen
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => { // forEach funktioniert nur mit Arrays, weswegen ich Objekte als Array hineingeben muss
            this.addToMap(o);  // Jedes Objekt zur Karte hinzufügen
        });
    }

    addToMap(mo) { // mo steht für Movable Object und hier kommt der Character als Argument (Parameter) an
        if (mo.otherDirection) { // Character spiegeln beim rückwärtsgehen
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {  // Drehung rückgängig machen
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save(); // Den aktuellen Zustand des Kontexts (der gezeichneten Bilder) speichern
        this.ctx.translate(mo.width, 0); // Den Kontext um die Breite des Characters in x-Richtung verschieben
        this.ctx.scale(-1, 1); // Die x-Achse spiegeln, um den Character umzukehren
        mo.x = mo.x * -1; // Die x-Position des Characters umkehren
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1; // Die x-Position des Characters wieder umkehren, um den ursprünglichen Wert wiederherzustellen
        this.ctx.restore(); // Den vorherigen Zustand des Kontexts wiederherstellen
    }
}





