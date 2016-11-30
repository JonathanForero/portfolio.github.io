var main = function(){
    $('.article').click(function(){
        $('.description').hide();
        $('.article').removeClass('current');
        $(this).addClass('current');
        $(this).children('.description').show();
    });
    $(document).keypress(function(event){
        if( event.which === 111 ){// o
            $('.current').children('.description').toggle();
        }else if( event.which === 110 ){ // n
            var currentArticle = $('.current');
            var nextArticle = currentArticle.next();
            currentArticle.removeClass('current');            
            nextArticle.addClass('current');
        }
    });
};

$(document).ready(main);