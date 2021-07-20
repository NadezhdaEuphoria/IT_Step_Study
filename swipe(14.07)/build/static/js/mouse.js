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
    slideToClickedSlide:true,
    hashNavigation: {
        watchState:true,
    },
    keyboard: {
        enabled:true,
        onlyInViewport:true,
        pageUpDown:true,
    },
    centeredSlides:true,
    // mousewheel: {
    //   sensitivity:1,
    //     eventsTarget: ".image-slider"
    // },
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
    slidesPerView:3,
    scrollbar: {
        el: '.swiper-scrollbar2',
        draggable: true
    },
    grabCursor: true,
    autoHeight: true,
    slidesPerGroup: 3,
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


