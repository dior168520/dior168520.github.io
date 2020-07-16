$(function () {
    /* 按下Top按鈕時的事件 */
    $('.top').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
        return false;
    });


    /* 偵測卷軸滑動時，往下滑超過400px就讓top按鈕出現 */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });
});