  // 手機版按鈕
  var mobile_toggle = document.querySelector(".mobile_navbar_toggle")


  // 手機選單
  var mobile_navbar = document.querySelector(".mobile_navbar_nav")

  // 關掉選單按鈕
  var close_nav = document.querySelector(".close_nav")

 
// 選單內 活動訊息
  var action_a = document.querySelector(".action")

  mobile_toggle.addEventListener("click", function () {
      // 點擊選單要打開

      // 加上class active
      mobile_navbar.classList.add("active");


  });

//   關掉選到按鈕
  close_nav.addEventListener("click", function () {

      mobile_navbar.classList.remove("active")
  });

//  點擊 活動訊息 清單關閉 
  action_a.addEventListener("click" , function(){
    mobile_navbar.classList.remove("active")

  });

 