var swiper = new Swiper('.blog-slider.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
        invert: false,
    },
    // autoHeight: true,
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
    },
    observe: true,
    observeParents: true,
});

const nonWheel = document.getElementById("test");

nonWheel.addEventListener('wheel', (e) =>{
    e.preventDefault()
}, {
    passive: false,
} )