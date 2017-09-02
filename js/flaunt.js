(function($) {

    // DOM ready
    $(function(){
        //add class nav-mobile
        $(".top-nav").append($('<div class="nav-mobile"></div>'));

        //add a <span> tag to every .nav-item
        $(".nav-item").has('ul').prepend('<span class="nav-click"><i class="nav-arrow"></i></span>');

        //click on square to reveal mobile navigation
        $(".nav-mobile").click(function(){
            $("ul.nav-list").toggle();
        });

        // Set screen display back to normal when bigger screen
        $( window ).resize(function(){
            if ( $( window ).width() > 640 ) {
                //top menu
                $("ul.nav-list").css("display", "inline-block");

                //submenu
                $("li.nav-item").hover(function(){
                    $(this).$("ul.nav-submenu").css("display", "block");
                }, function(){
                    $(this).$("ul.nav-submenu").css("display", "none");
                });

                //nav-mobile (square)
                $(".nav-mobile").css("display", "none");
            } else if ( $( window ).width() <= 640 ) {
                //top menu
                $("ul.nav-list").css("display", "none");

                //submenu
                $("li.nav-item").has("ul.nav-submenu").hover(function(){
                    $("ul.nav-submenu").css("display", "none");
                });

                //nav-mobile (square) 
                $(".nav-mobile").css("display", "block");
            }
        });


        // Dynamic binding to on 'click'
        $("ul.nav-list").on("click", ".nav-click", function(){

            //toggle the nested nav
            $(this).siblings("ul.nav-submenu").toggle();

            //toggle the arrow using CSS3 transforms
            $(this).children(".nav-arrow").toggleClass("nav-rotate");
        });
    });

})(jQuery);
