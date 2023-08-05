let canvas;  // Canvas-Variable
let world;  // World-Variable
let keyboard = new Keyboard();  // Keyboard-Objekt

function init() {
    canvas = document.getElementById('canvas');  // Das Canvas-Element abrufen
    world = new World(canvas, keyboard);  // Ein neues World-Objekt erstellen
}

function toggleFullscreen() {
    if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        closeFullscreen();
    } else {
        openFullscreen();
    }
}

function openFullscreen() {
    let content = document.getElementById('content');
    if (content.requestFullscreen) {
        content.requestFullscreen();
    } else if (content.webkitRequestFullscreen) { /* Safari */
        content.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        content.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

window.addEventListener("keydown", (e) => {  // Event-Listener für das keydown-Ereignis
    if(e.keyCode == 39) {  // Rechte Pfeiltaste
        keyboard.RIGHT = true;  // Die RIGHT-Eigenschaft des Keyboard-Objekts auf true setzen
    }

    if(e.keyCode == 37) {  // Linke Pfeiltaste
        keyboard.LEFT = true;  // Die LEFT-Eigenschaft des Keyboard-Objekts auf true setzen
    }

    if(e.keyCode == 38) {  // Obere Pfeiltaste
        keyboard.UP = true;  // Die UP-Eigenschaft des Keyboard-Objekts auf true setzen
    }

    if(e.keyCode == 40) {  // Untere Pfeiltaste
        keyboard.DOWN = true;  // Die DOWN-Eigenschaft des Keyboard-Objekts auf true setzen
    }

    if(e.keyCode == 32) {  // Leertaste
        keyboard.SPACE = true;  // Die SPACE-Eigenschaft des Keyboard-Objekts auf true setzen
    }

    if(e.keyCode == 68) {  // D-Taste
        keyboard.D = true;  // Die D-Eigenschaft des Keyboard-Objekts auf true setzen
    }
});

window.addEventListener("keyup", (e) => {  // Event-Listener für das keyup-Ereignis
    if(e.keyCode == 39) {  // Rechte Pfeiltaste
        keyboard.RIGHT = false;  // Die RIGHT-Eigenschaft des Keyboard-Objekts auf false setzen
    }

    if(e.keyCode == 37) {  // Linke Pfeiltaste
        keyboard.LEFT = false;  // Die LEFT-Eigenschaft des Keyboard-Objekts auf false setzen
    }

    if(e.keyCode == 38) {  // Obere Pfeiltaste
        keyboard.UP = false;  // Die UP-Eigenschaft des Keyboard-Objekts auf false setzen
    }

    if(e.keyCode == 40) {  // Untere Pfeiltaste
        keyboard.DOWN = false;  // Die DOWN-Eigenschaft des Keyboard-Objekts auf false setzen
    }

    if(e.keyCode == 32) {  // Leertaste
        keyboard.SPACE = false;  // Die SPACE-Eigenschaft des Keyboard-Objekts auf false setzen
    }

    if(e.keyCode == 68) {  // D-Taste
        keyboard.D = false;  // Die D-Eigenschaft des Keyboard-Objekts auf false setzen
    }
});