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

//-------------------- Obtener datos de una API -------------------------
const API = "https://run.mocky.io/v3/3125bb45-9751-4875-be32-9f13a91fcb4b";

$(document).ready(function(){
    const perfilId = getUrlVars(); // Funcion que toma el valor de ID del perfil para mostrarlo en la url
    console.log("Id del perfil: ",perfilId);
    getProfileInfo(perfilId); // Trae y renderiza la info del perfil con el id dado
})

function getProfileInfo(_id) {
    $.get(
        API,
        function(data){
            // De la lista de perfiles me quedo solo con el que recibo como parametros con (_id) y selecciono ese de la lista
            const profile = data.profiles[_id];
            // Le agrego el valor del nombre de ese profile al interior del h1 (con id name) del html y los otros datos que quiero
            $('#name').append(profile.nombre);
            $('#valoracion').append(profile.valoracion);
            $('#edad').append(profile.edad);
            $('#zona').append(profile.zona);
            // Agrego la foto de perfil
            $("img").attr("src", profile.foto);
            // Agrego cada instrumento a la la lista #instrumentos y cada genero a la lista #generos del html
            for (let instrumento of profile.instrumentos){
                $('#instrumentos').append('<li>' + instrumento + '</li>');
            };
            for (let genero of profile.generos){
                $('#generos').append('<li>' + genero + '</li>');
            }
            // Agrego las canciones a las etiquetas de audio
            $('#audio1').attr("src",profile.canciones[0].audio);
            $('#audio2').attr("src",profile.canciones[1].audio);
            $('#audio3').attr("src",profile.canciones[2].audio);
            $('#audio4').attr("src",profile.canciones[3].audio);
            // Agrego titulos de las canciones en los cassettes
            $("#song-title-1").append(profile.canciones[0].titulo);
            $("#song-title-2").append(profile.canciones[1].titulo);
            $("#song-title-3").append(profile.canciones[2].titulo);
            $("#song-title-4").append(profile.canciones[3].titulo);
            // Le pongo el color al theme
            $('#banner').css("background-color", profile.color);
            $('.tape').css("background-color", profile.color);
            $('footer').css("background-color", profile.color);
            // Adapto la info del modal para cada artista
            $('#email').append(profile.email);
            $('#whp').append(profile.telefono);
        },
        "json"
        );
};

function getUrlVars()
{
    var products = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        products.push(hash[1]);
        // products[hash[0]] = hash[1];
    }
    return products[0];
}