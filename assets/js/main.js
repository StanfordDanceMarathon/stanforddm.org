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

    /* Scrolly links */
    $(function() {
        $('a[href*=\\#]:not([href=\\#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
               var target = $(this.hash);
               target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 80
                    }, 400);
                    return false;
                }
            }
        });
    });

    $("#countdown").countdown('2017/02/18', function(event) {
        if (event.elapsed) {
            $(this).remove();
        } else {
            text = "Only "
            if (event.offset.totalDays > 7) {
                text += "%-w weeks, ";
            }
            if (event.offset.totalDays > 0) {
                text += "%-d days, ";
            }
            if (event.offset.totalHours > 0) {
                text += "%-H hours, %-M minutes,<br>and ";
            } else {
                text += "%-M minutes and "
            }

            text += "%-S second%!S until Dance Marathon 2017!";

            $(this).html(event.strftime(text));
        }
    });

    /* I hate CSS */
    function snapAboutBoxes() {
        var one = $("#about1");
        var two = $("#about2");

        one.height('auto');
        two.height('auto');

        var height = Math.max(one.height(), two.height());
        one.height(height);
        two.height(height);
    }

    /* Fix on page load */
    snapAboutBoxes();

    /* Fix when the window is resized */
    $(window).on('resize', function() {
        snapAboutBoxes();
    });

});
