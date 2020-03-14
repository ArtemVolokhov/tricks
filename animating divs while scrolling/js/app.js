$(function(){
   
    $(window).scroll(function(){
        $('.box').each(function(){
            var elPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (elPos < topOfWindow + 700){
                $(this).addClass('fadeInLeft');
            }
        });
    });


});