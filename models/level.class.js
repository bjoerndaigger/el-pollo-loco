class Level {
    enemies;  // Deklaration der Eigenschaft "enemies" (Feinde)
    clouds;  // Deklaration der Eigenschaft "clouds" (Wolken)
    backgroundObjects;  // Deklaration der Eigenschaft "backgroundObjects" (Hintergrundobjekte)
    bottles;
    coins;
    level_end_x = 2200; // Deklaration des Endpunktes auf der x-Achse für den Character

    // Konstruktor der Klasse "Level" mit den Parametern "enemies", "clouds" und "backgroundObjects"
    constructor(enemies, clouds, backgroundObjects, bottles, coins) {
        this.enemies = enemies;  // Zuweisen der übergebenen Werte an die entsprechenden Eigenschaften
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottles = bottles;
        this.coins = coins;
    }
}


