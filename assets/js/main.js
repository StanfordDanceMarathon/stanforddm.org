$(document).ready(function () {
    /*
    var top = true;
    var transition = false;
    var cutoff = 300;

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (transition) return;

        if (y > cutoff && top) {
            transition = true;
            top = false;

            $('.navbar-logo h2').fadeOut();
            setTimeout(function (){
                $('.navbar-logo img').fadeIn();
                transition = false;
            }, 400);
            $('.navbar-inverse').animate({height: "90px"}, 400);
        } else if (y < cutoff && !top) {
            transition = true;
            top = true;

            $('.navbar-logo img').fadeOut();
            setTimeout(function (){
                $('.navbar-logo h2').fadeIn();
                transition = false;
            }, 400);
            $('.navbar-inverse').animate({height: "110px"}, 400);
        }
    });
    */

    $(function() {
        $('a[href*=\\#]:not([href=\\#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
               var target = $(this.hash);
               target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 50
                    }, 400);
                    return false;
                }
            }
        });
    });

});
