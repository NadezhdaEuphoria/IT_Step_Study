new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    grabCursor: true,
    slideToClickedSlide: true,
    hashNavigation: {
        watchState: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    freeMode: true,
    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    effect: 'cube',
    cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },

});


new Swiper('.image-slider2', {
    pagination: {
        el: '.swiper-pagination3',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return ' страница <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
        },
        // type:'progressbar'
    },
    slidesPerView: 3,
    scrollbar: {
        el: '.swiper-scrollbar2',
        draggable: true
    },
    grabCursor: true,
    autoHeight: true,
    slidesPerGroup: 3,
    initialSlide: 7,
    loop: true,
    loopSlides: 3,
});


new Swiper('.image-slider3', {
    slidesPerView: 3,
    grabCursor: true,
    slidesPerGroup: 3,
    initialSlide: 7,
    loopSlides: 3,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 20,
        stretch: 50,
        slideShadows: true,
    },
});

//
// pagination: {
//     el: '.swiper-pagination2',
//     type: 'fraction',
//     renderFraction: function (currentClass, totalClass) {
//         return ' Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
//     },
//
//


