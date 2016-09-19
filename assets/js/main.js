$(document).ready(function () {
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 300) {
            $('.navbar-logo img').fadeIn();
        } else {
            $('.navbar-logo img').fadeOut();
        }
    });
});
