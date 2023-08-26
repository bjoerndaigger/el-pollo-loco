class StatusBarCharacter extends DrawableObject {
    IMAGES_STATUSBAR_CHARACTER = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUSBAR_CHARACTER);
        this.x = 24;
        this.y = 0;
        this.width = 200;
        this.height = 53;
        this.setPercentage(100); // Set initial percentage
    }

     /**
     * Sets the percentage value and updates the image accordingly.
     * @param {number} percentage - The percentage value to set (0 to 100).
     */
     setPercentage(percentage) {
        this.percentage = percentage; // Gets value from 'energy' variable, which decreases on each collision
        let path = this.IMAGES_STATUSBAR_CHARACTER[this.resolveImageIndex()]; // Assigns URL of the desired image (number between 0 and 5) to 'path'
        this.img = this.imageCache[path]; // Loads path from 'imageCache' array and assigns the image to the 'img' variable in DrawableObjects
    }

    /**
     * Resolves the index of the image based on the current percentage value.
     * @returns {number} The index of the image in the array.
     */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}



