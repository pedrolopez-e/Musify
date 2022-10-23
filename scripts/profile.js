let body = document.querySelector("body");

// Hago que los circuilitos giren cuando se clickea el cassette correspondiente
let tapes = document.querySelectorAll('.tape');
tapes.forEach(tape => tape.addEventListener('click', (event) => {
    let targetCircles = event.target.querySelectorAll('.circle');
    let circles = document.querySelectorAll('.circle'); 
    if ((event.target).classList.contains('playing') == true) {
        (event.target).classList.remove('playing');
        circles.forEach(circle => circle.classList.remove('rotating'));
    } else {
        (event.target).classList.add('playing');
        circles.forEach(circle => circle.classList.remove('rotating'));
        targetCircles.forEach(circle => circle.classList.add('rotating'));
    };
})); // Debería hacer algo para que paren de girar cuadno termina la cancion

let tape1 = document.querySelector('#tape1');
let tape2 = document.querySelector('#tape2');
let tape3 = document.querySelector('#tape3');
let tape4 = document.querySelector('#tape4');
let audio1 = document.querySelector("#audio1");
let audio2 = document.querySelector("#audio2");
let audio3 = document.querySelector("#audio3");
let audio4 = document.querySelector("#audio4");

tape1.addEventListener('click', (event) => {
    if ((event.target).classList.contains("playing") == true) {
        audio1.play();
    } else {
        audio1.load();
        audio1.pause();
    }
});

tape2.addEventListener('click', (event) => {
    if ((event.target).classList.contains("playing") == true) {
        audio2.play();
    } else {
        audio2.load();
        audio2.pause();
    }
});

tape3.addEventListener('click', (event) => {
    if ((event.target).classList.contains("playing") == true) {
        audio3.play();
    } else {
        audio3.load();
        audio3.pause();
    }
});

tape4.addEventListener('click', (event) => {
    if ((event.target).classList.contains("playing") == true) {
        audio4.play();
    } else {
        audio4.load();
        audio4.pause();
    }
});



