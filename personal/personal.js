//  collapse漢堡條按鈕
var collapse = document.querySelector(".collapse");
//  mobile nav 手機漢堡條選單
var mobile_navs = document.querySelector(".mobile_nav");

// close_nav關閉手機選單按鈕
var close_nav = document.querySelector(".close_nav");
//close_list 選單內容
var close_lists = document.querySelectorAll(".close_list")


// collapse漢堡條按鈕=>點擊=>執行=>打開mobile_navbar手機選單
// addEventListener事件監聽
collapse.addEventListener("click", function () {

  mobile_navs.classList.add("active");
});

// close_nav關閉按鈕>>點擊=>執行>>關閉mobile_navbars手機選單
close_nav.addEventListener("click", function () {

  mobile_navs.classList.remove("active");
});




// mobile 清單
for (let index = 0; index < close_lists.length; index++) {
  const close_list = close_lists[index];
  // console.log(close_list)

//close_list =>點擊=>執行=>關閉清單
  close_list.addEventListener("click", function () {

    mobile_navs.classList.remove('active');


  });
}





