let body = document.querySelector("body");

// Hago que los circuilitos giren cuando se clickea el cassette correspondiente
let tapes = document.querySelectorAll('.tape');
tapes.forEach(tape => tape.addEventListener('click', (event) => {
    let targetCircles = event.target.querySelectorAll('.circle');
    let circles = document.querySelectorAll('.circle'); 
    if ((event.target).classList.contains('playing')) {
        (event.target).classList.remove('playing');
        circles.forEach(circle => circle.classList.remove('rotating'));
    } else {
        (event.target).classList.add('playing');
        circles.forEach(circle => circle.classList.remove('rotating'));
        targetCircles.forEach(circle => circle.classList.add('rotating'));
    };
})); // Debería hacer algo para que paren de girar cuando termina la cancion

let tape1 = document.querySelector('#tape1');
let tape2 = document.querySelector('#tape2');
let tape3 = document.querySelector('#tape3');
let tape4 = document.querySelector('#tape4');
let audio1 = document.querySelector("#audio1");
let audio2 = document.querySelector("#audio2");
let audio3 = document.querySelector("#audio3");
let audio4 = document.querySelector("#audio4");

function stopTapes() {
    audio1.load();
    audio1.pause();
    audio2.load();
    audio2.pause();
    audio3.load();
    audio3.pause();
    audio4.load();
    audio4.pause();
}

tape1.addEventListener('click', (event) => {
    stopTapes();
    if ((event.target).classList.contains("playing")) {
        audio1.play();
    } 
});

tape2.addEventListener('click', (event) => {
    stopTapes();
    if ((event.target).classList.contains("playing")) {
        audio2.play();
    }
});

tape3.addEventListener('click', (event) => {
    stopTapes();
    if ((event.target).classList.contains("playing")) {
        audio3.play();
    } 
});

tape4.addEventListener('click', (event) => {
    stopTapes();
    if ((event.target).classList.contains("playing")) {
        audio4.play();
    }
});



