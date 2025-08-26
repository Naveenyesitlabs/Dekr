jQuery(document).ready(function($){
    // document start
    
    
     // Navbar
     $( "<span class='clickD'></span>" ).insertAfter(".navbar-nav li.menu-item-has-children > a");
     $('.navbar-nav li .clickD').click(function(e) {
         e.preventDefault();
         var $this = $(this);
         if ($this.next().hasClass('show'))
            {
                $this.next().removeClass('show');
                $this.removeClass('toggled');
            } 
            else 
            {
                $this.parent().parent().find('.sub-menu').removeClass('show');
                $this.parent().parent().find('.toggled').removeClass('toggled');
                $this.next().toggleClass('show');
                $this.toggleClass('toggled');
            }
     });
    
     $(window).on('resize', function(){
         if ($(this).width() < 1025) {
             $('html').click(function(){
                 $('.navbar-nav li .clickD').removeClass('toggled');
                 $('.toggled').removeClass('toggled');
                 $('.sub-menu').removeClass('show');
             });
             $(document).click(function(){
                 $('.navbar-nav li .clickD').removeClass('toggled');
                 $('.toggled').removeClass('toggled');
                 $('.sub-menu').removeClass('show');
             });
             $('.navbar-nav').click(function(e){
                e.stopPropagation();
             });
         }
     });
     // Navbar end
    
    
     
    /* ===== For menu animation === */
    $(".navbar-toggler").click(function(){
        $(".navbar-toggler").toggleClass("open");
        $(".navbar-toggler .stick").toggleClass("open");
        $('body,html' ).toggleClass("open-nav");
    });
    
    // Navbar end
    
    
    // Sticky Nav
    
    $(window).on('scroll', function() {
        const scrollTop = $(this).scrollTop();
        const $header   = $('.main-head');
        const $body     = $('body');
        const headerH   = $header.outerHeight();
        if (scrollTop > headerH) {
          $header.addClass('fixed');
          $body.css('padding-top', headerH + 'px');
        } else {
          $header.removeClass('fixed');
          $body.css('padding-top', '0');
        }
    });         
    
    
    // back to top
    // if($("#scroll").length){
    //     $(window).scroll(function(){ 
    //         if ($(this).scrollTop() > 200) { 
    //             $('#scroll').fadeIn(200); 
    //         } else { 
    //             $('#scroll').fadeOut(200); 
    //         } 
    //     }); 
    //     $('#scroll').click(function(){ 
    //         $("html, body").animate({ scrollTop: 0 }, 500); 
    //         return false; 
    //     }); 
    // }


    // $('.responsive').slick({
    //     dots: true,
    //     infinite: false,
    //     speed: 300,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 3,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    // });

    // const date = new Date;
    // document.querySelector(".curryr").innerHTML = date.getFullYear();
    // Fancybox.bind("[data-fancybox]");
    
}); 