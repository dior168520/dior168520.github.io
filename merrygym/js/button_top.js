var buttonTopName="#button_top";
    var objectName="#navbar";
    //回到最上面按鈕
    btnTop(objectName,buttonTopName);
    function btnTop(obj,btn){
        $(window).on('scroll resize',function(){
            var objH = $(obj).outerHeight(true);
            var windowScrollTop=$(document).scrollTop();
            var boolean = windowScrollTop >= objH;
            if(boolean){
                $(btn).css({"display":"block"});
                $(btn).stop(true,false).animate({"opacity":"1"},300);
            }else{
                $(btn).stop(true,false).animate({"opacity":"0"}
                    ,300
                    ,function(){
                        $(btn).css({"display":"none"});
                    });
            }
        });
        $(btn).click(function(){
            $('body,html').animate({'scrollTop':'0'},300);
        });
    }