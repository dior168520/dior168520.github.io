$(".tab_btn").click(function () {
    //取得目前是第幾個按鈕
    // 方法一 用資料屬性(data-* attribute)
    // console.log(this.dataset.btnid);
    //
    // 方法二 索引值 + indexof
    // $(".tab_btn").index(this);

    //刪除所有tab_content的active
    $(".tab_content").removeClass("active");

    //加上自己的active
    var index = this.dataset.btnid;
    $(`.tab_content:nth-child(${index})`).addClass("active");

  });
