$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
    }
})

const crearPubli = document.querySelector('.crear-publi')
if(crearPubli){
    crearPubli.addEventListener('click', () => {
        crearPubli.location.href="crearPublicacion.html"
    })
}

const Buscar = document.querySelector('.search-container')
    if(Buscar){
        Buscar.addEventListener('click', () => {
            Buscar.classList.toggle('active')
        })
    }