 //swiper
 // 關於js
 var swiper = new Swiper('.swiper_banner', {
    autoplay: {
        delay: 5000, //每秒輪播
        disableOnInteraction: false, //在點選之後可以繼續實現輪播
    },

    loop: true, //迴圈
    loopFillGroupWithBlank: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper_pagination', //分頁

    },
});

// 最新消息js
var swiper = new Swiper('.swiper_New', {
    autoplay: {
        delay: 5000, //每秒輪播
        disableOnInteraction: false, //在點選之後可以繼續實現輪播
    },
    slidesPerView: 3, //圖片出現張數
    spaceBetween: 0,  //之間距離
    slidesPerGroup: 1,//滑動張數
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.arrow_R', //arrow
        prevEl: '.arrow_L', //arrow
    },
    // Responsive breakpoints
    breakpoints: {

        // when window width is >= 10px
        10: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 900px
        900: {
            slidesPerView: 2,
            spaceBetween: 30,
            // 
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40
        }

    }
});