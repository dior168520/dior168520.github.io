
// 選取dom節點
var btn = document.querySelector('.toggle');
var click_ = document.querySelector('ul');
var close_ = document.querySelector('span');




// 點擊出現
btn.addEventListener('click',function(){

    click_.style.display = 'block';

    

  
});

// 點擊取消
close_.addEventListener('click',function(){

    click_.style.display = 'none';

  
});

