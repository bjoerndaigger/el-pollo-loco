let canvas;  // Canvas-Variable
let world;  // World-Variable
let keyboard = new Keyboard();  // Keyboard-Objekt
let game_lost = new Audio('audio/game_lost.mp3');
let chicken_alarm = new Audio('audio/chicken_alarm.mp3')
let collect_bottle = new Audio('audio/collect_bottle.mp3');
let collect_coin = new Audio('audio/collect_coin.mp3');
let chicken_screams = new Audio('audio/chicken_scream.mp3');
let endboss_screams = new Audio('audio/chicken_scream_long.mp3');
let walking_sound = new Audio('./audio/running.mp3');
let character_hit = new Audio('audio/character_getting_hit.mp3');
let character_dies = new Audio('audio/character_dies.mp3');
let game_won = new Audio('audio/game_won.mp3');

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

function backToMenu() {
    document.getElementById('game-over-screen').classList.add('d-none');
    document.getElementById('you-lost-screen').classList.add('d-none');
}

function gameLost() {
    document.getElementById('you-lost-screen').classList.remove('d-none');
    clearAllIntervals();
    game_lost.play();
}

function gameOver() {
    document.getElementById('game-over-screen').classList.remove('d-none');
    clearAllIntervals();
    game_won.play();
}

function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
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