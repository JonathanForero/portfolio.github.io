var main = function() {
    $('.icon-menu').click(function(){        
        $('.menu').animate({left: '0px'}, 400);
        $('body').animate({left: '285px'}, 400);
    });    
    $('.icon-close').click(function(){
        $('.menu').animate({left: '-285px'}, 400);
        $('body').animate({left: '0px'}, 400);
    });
};

$(document).ready(main);