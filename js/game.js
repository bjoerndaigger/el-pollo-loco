let canvas;  // Canvas-Variable
let world;  // World-Variable
let keyboard = new Keyboard();  // Keyboard-Objekt

function startGame() {
    document.getElementById('start-screen').classList.add('d-none');
    init();
}

function init() {
    initLevel();
    canvas = document.getElementById('canvas');  // Das Canvas-Element abrufen
    world = new World(canvas, keyboard);  // Ein neues World-Objekt erstellen
    touchEventsStart();
    touchEventsEnd();
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

function openInfo() {
    document.getElementById('info-content').classList.remove('d-none');
}

function closeInfo() {
    document.getElementById('info-content').classList.add('d-none');
}

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        keyboard.RIGHT = true;
    }

    if (e.key === "ArrowLeft") {
        keyboard.LEFT = true;
    }

    if (e.key === "ArrowUp") {
        keyboard.UP = true;
    }

    if (e.key === "ArrowDown") {
        keyboard.DOWN = true;
    }

    if (e.key === " ") {
        keyboard.SPACE = true;
    }

    if (e.key === "d") {
        keyboard.D = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.key === "ArrowRight") {
        keyboard.RIGHT = false;
    }

    if (e.key === "ArrowLeft") {
        keyboard.LEFT = false;
    }

    if (e.key === "ArrowUp") {
        keyboard.UP = false;
    }

    if (e.key === "ArrowDown") {
        keyboard.DOWN = false;
    }

    if (e.key === " ") {
        keyboard.SPACE = false;
    }

    if (e.key === "d") {
        keyboard.D = false;
    }
});


function touchEventsStart() {
    document.getElementById('btn-left').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById('btn-right').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById('btn-jump').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById('btn-throw').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.D = true;
    });

}

function touchEventsEnd() {
    document.getElementById('btn-left').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.LEFT = false;
    });

    document.getElementById('btn-right').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.RIGHT = false;
    });

    document.getElementById('btn-jump').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.SPACE = false;
    });

    document.getElementById('btn-throw').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.D = false;
    });
}