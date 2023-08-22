class World {
    character = new Character();  // Ein Character-Objekt erstellen
    level = level1; // Level-Variable
    canvas;  // Canvas-Variable
    ctx;  // 2D-Kontext-Variable
    keyboard;  // Keyboard-Objekt
    bottle; // Bottle Variable
    camera_x = 0;  // Kameraposition (Hintergrundbild) auf x-Achse
    statusBarCharacter = new StatusBarCharacter(); // Ein StatusBar-Objekt erstellen
    statusBarBottles = new StatusBarBottles();
    statusBarCoins = new StatusBarCoins();
    throwableObjects = [];
    collectedBottles = []; // Array for collected Bottles
    collectedCoins = []; // Array for collected coins
   

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
        }, 100);
    }

    checkThrowObjects() {
        if (this.keyboard.D && this.collectedBottles.length > 0) { // wenn Key D gedrückt wird und Wert in Array enthalten ist, wird neue Flasche in den Array throwableObjects gepusht und geworfen
            const characterOtherDirection = this.character.otherDirection;
            if (!characterOtherDirection) { // neue Flasche mit Abwurfkoordinaten des Characters
                this.bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            }
            if (characterOtherDirection) { // neue Flasche mit Abwurfkoordinaten des Characters wenn Richtung gedreht
                this.bottle = new ThrowableObject(this.character.x - 50, this.character.y + 100);
            }
            this.throwableObjects.push(this.bottle);
            this.collectedBottles.pop(); // Nach Abwurf einen Wert aus Array entfernen
            this.statusBarBottles.setBottles(this.collectedBottles.length); // Wert an StatusBarBottles übergeben
        }
    }

    checkCollisions() {
        this.checkCollisionBottlesToCollect();
        this.checkCollisionCoinsToCollect();
        this.checkCollisionEndbossThrownBottle();
        this.checkCollisionCharacterEnemies();
    }


    checkCollisionCharacterEnemies() {
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isColliding(enemy)) {
                if (this.character.isAboveGround()) {
                    this.character.jumpOnEnemy = true;
                    if (enemy instanceof Chicken) {
                        enemy.chickenIsDead = true;
                    } else if (enemy instanceof ChickenSmall) {
                        enemy.chickenSmallIsDead = true;
                    }
                    setTimeout(() => {
                        this.level.enemies.splice(index, 1);
                        enemy.chickenScreams = true;
                        this.character.jumpOnEnemy = false;
                    }, 1000);
                }
                else if (!this.character.jumpOnEnemy) {
                    this.character.hit();
                    this.statusBarCharacter.setPercentage(this.character.energy);
                }
            }
        });
    }

    // checks if character collides with bottles
    checkCollisionBottlesToCollect() {
        this.level.bottles.forEach((bottle, index) => { // Mit Index des Elements im Array
            if (this.character.isColliding(bottle)) { // wird nur ausgeführt, wenn Wert noch nicht vorhanden
                if (!this.collectedBottles.includes(bottle)) {
                    collect_bottle.play();
                    this.collectedBottles.push(bottle);
                    this.statusBarBottles.setBottles(this.collectedBottles.length); // Wert an StatusBarBottles übergeben
                    this.level.bottles.splice(index, 1); // Entferne die kollidierte Flasche aus dem Array und entferne Bild
                }
            }
        })
    }


    checkCollisionCoinsToCollect() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                if (!this.collectedCoins.includes(coin)) { // wird nur ausgeführt, wenn Wert noch nicht vorhanden
                    collect_coin.play();
                    this.collectedCoins.push(coin);
                    this.statusBarCoins.setCoins(this.collectedCoins.length);
                    this.level.coins.splice(index, 1); // Entferne die kollidierte Flasche aus dem Array und entferne Bild
                }

            }
        })
    }

    // checks if endboss collides with bottles
    checkCollisionEndbossThrownBottle() {
        let collisionEndboss = false;
        this.throwableObjects.forEach((bottle) => {
            if (bottle.isColliding(this.level.endboss)) {
                collisionEndboss = true;
                return;
            }
        });
        return collisionEndboss;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);  // Da£s Canvas löschen
        this.ctx.translate(this.camera_x, 0);  // Den Kontext (Hintergrund) um den Wert von camera_x verschieben
        this.addObjectsToMap(this.level.backgroundObjects);  // Die BackgroundObject-Objekte zur Karte hinzufügen
        this.addObjectsToMap(this.level.clouds);  // Die Cloud-Objekte zur Karte hinzufügen

        this.ctx.translate(-this.camera_x, 0);  // Die Translation für fixierten StatusBar zurücksetzen
        // --- Space for fixed objects --- //
        this.addToMap(this.statusBarCharacter); // Das StatusBar-Objekt zur Karte hinzufügen
        this.addToMap(this.statusBarBottles);
        this.addToMap(this.statusBarCoins);
        this.ctx.translate(this.camera_x, 0);  // Den Kontext (Hintergrund) um den Wert von camera_x erneut verschieben

        this.addToMap(this.character);  // Das Character-Objekt zur Karte hinzufügen

        this.addObjectsToMap(this.level.enemies);  // Die Chicken-Objekte zur Karte hinzufügen
        this.addToMap(this.level.endboss); // Den Endboss zur Karte hinzufügen
        this.addObjectsToMap(this.throwableObjects); // Die Throwable-Objekte zur Karte hinzufügen
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);


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





