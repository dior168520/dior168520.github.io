  //  collapse漢堡條按鈕
  var collapse = document.querySelector(".collapse");
  //  mobile nav 手機漢堡條選單
   var mobile_nav = document.querySelector(".mobile_nav");

// close_nav手機選單關閉
   var  close_nav = document.querySelector(".close_nav");

    //close_list 選單內容關閉
    var close_list_A = document.querySelector(".close_list_A")
    //close_list 選單內容關閉
    var close_list_B = document.querySelector(".close_list_B")
    //close_list 選單內容關閉
    var close_list_C = document.querySelector(".close_list_C")
    //close_list 選單內容關閉
    var close_list_D = document.querySelector(".close_list_D")
    
 
// collapse漢堡條按鈕>>點擊>>執行>>打開mobile_navbar手機選單
// addEventListener事件監聽
collapse.addEventListener("click" , function(){

  mobile_nav.classList.add("active");
});

// close_nav取消按鈕>>點擊>>執行>>關閉mobile_navbar手機選單
close_nav.addEventListener("click" ,function(){

mobile_nav.classList.remove("active");
});


// close_list_A >>點擊>>執行>>關閉mobile_navbar手機選單
close_list_A.addEventListener("click" , function(){
  mobile_nav.classList.remove("active");
});
// close_list_B >>點擊>>執行>>關閉mobile_navbar手機選單
close_list_B.addEventListener("click" , function(){
  mobile_nav.classList.remove("active");
});
// close_list_C >>點擊>>執行>>關閉mobile_navbar手機選單
close_list_C.addEventListener("click" , function(){
  mobile_nav.classList.remove("active");
});
// close_list_D >>點擊>>執行>>關閉mobile_navbar手機選單
close_list_D.addEventListener("click" , function(){
  mobile_nav.classList.remove("active");
});





