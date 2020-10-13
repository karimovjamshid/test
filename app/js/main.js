$(document).ready(function(){

        // Sticky navbar
        let header = $('.header-nav');
        let scrollPos = $(window).scrollTop();
    
    
        $(window).on('scroll load resize', function(){
            let headerH = header.innerHeight();
            scrollPos = $(this).scrollTop();
    
            if(scrollPos > headerH){
              header.addClass('fixed');
            }else{
              header.removeClass('fixed');
            }
        });
    
    
    
         // Smooth scroll
        $("[data-scroll]").on('click', function(event){
            event.preventDefault();
        
            let elemID = $(this).data('scroll');
            let elemOffSet = $(elemID).offset().top;
        
            $('html, body').animate({
                scrollTop: elemOffSet - 68
            });
        
        });


})