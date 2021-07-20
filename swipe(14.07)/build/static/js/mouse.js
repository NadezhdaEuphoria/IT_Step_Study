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
        },
    },
});


new Swiper('.image-slider2', {
    pagination: {
        el: '.swiper-pagination3',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return ' Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
        },
        // type:'progressbar'
    },
});


// pagination: {
//     el: '.swiper-pagination2',
//     type: 'fraction',
//     renderFraction: function (currentClass, totalClass) {
//         return ' Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
//     },


