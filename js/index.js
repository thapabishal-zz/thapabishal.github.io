$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#header").addClass("navbar-shrink");

    }
    else {
        $("#header").removeClass("navbar-shrink");
    }
});