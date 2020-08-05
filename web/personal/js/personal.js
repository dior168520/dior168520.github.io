//  宣告collapses漢堡條按鈕,選擇綁定class屬性節點。
var collapses = document.querySelector(".collapse");
//  宣告mobile navs手機漢堡條選單,選擇綁定class屬性節點。
var mobile_navs = document.querySelector(".mobile_nav");
// 宣告close_nav關閉手機選單按鈕,選擇綁定class屬性節點。
var close_navs = document.querySelector(".close_nav");
//宣告close_list選單內容,選擇綁定class屬性節點。
var close_lists = document.querySelectorAll(".close_list")



// collapse漢堡條按鈕=>點擊=>執行=>打開mobile_navbar手機選單
// addEventListener事件監聽
collapses.addEventListener("click", function () {
  mobile_navs.classList.add("active");
});

// close_nav關閉按鈕>>點擊=>執行>>關閉mobile_navbars手機選單
close_navs.addEventListener("click", function () {
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



