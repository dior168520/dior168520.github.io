 
 fetch('http://ajax_lesson.digipack-develop.com/news') //用GET方式
 .then(function(response){ //驗證網站回應
     return response.json()  //.json()函式非必要,端看後端是否先將資料json化
 })

 .then(function(data){

     $.each( data , function(index, news){ //jQuery的forEach 跟JS版不同在第二個變數才是單筆資料的值
         var old_news = $('.cards').html()
         $('.cards').html(`
         <div class="card">
             <a href="${news.href}">
                 <div class="image_box">
                     <img src="${news.image_url}"
                         alt="">
                 </div>
                 <div class="news">
                     <h3 class="title">${news.title}</h3>
                     <span>發布日期:${news.date}
                     </span>
                     <div class="content">
                         ${news.content}
                     </div>
                 </div>
             </a>
         </div>
         ${old_news}
         `)
     }) 
 })


//抓取使用者輸入的表單input的內容
$('.submit_btn').click(function () {
 var post_title = $('#title').val();
 var content = $('#content').val();
 var image_url = $('#image_url').val();
 var href_link = $('#href').val();

 var current_date = new Date()
 var date = current_date.getFullYear() + '年' + (current_date.getMonth() + 1) + '月' + current_date.getDate() + '日';

 $.ajax({
     url: 'http://ajax_lesson.digipack-develop.com/news', // url = action,
     method: 'post', // type = method
     data: {
         'title': post_title,
         'content': content,
         'image_url': image_url,
         'href': href_link,
         'date': date
     }, //data一定是送出物件(Json)
     success: function (res) {  //res = result(成果)
         //JQ版 樣板字串
         var old_news = $('.cards').html()
         $('.cards').html(`
         <div class="card">
             <a href="${href_link}">
                 <div class="image_box">
                     <img src="${image_url}"
                         alt="">
                 </div>
                 <div class="news">
                     <h3 class="title">${post_title}</h3>
                     <span>發布日期:${date}
                     </span>
                     <div class="content">
                         ${content}
                     </div>
                 </div>
             </a>
         </div>
         ${old_news}
         `)

         $('input,textarea').val('')
     },
     error: function (res) {
         console.log(res) //若收取資料失敗,則將結果顯示在這
     }
 })
})
