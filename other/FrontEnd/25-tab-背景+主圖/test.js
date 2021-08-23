




// 圖片切換
$(".tab_btn").click(function () {
    $(".tab_content").removeClass("active");
    var index = this.dataset.btnid;
    $(`.tab_content:nth-child(${index})`).addClass("active");
    

  });


  // 背景樣式切換
$(".tab_btn_2").click(function () {
  $(".tab_content_2").removeClass("active");
  var index = this.dataset.btnid;
  $(`.tab_content_2:nth-child(${index})`).addClass("active");
  

});






