$('.ultimo').on('click', function () {
    $('.tut-modal').animate({
        top: 0,
        opacity: 1
    }, "fast");
    $('main, nav, footer').fadeTo('fast', .3);
});

$('.modal-cerrar').on('click', function () {
    $('.tut-modal').animate({
        top: "-1000",
        opacity: 0
    }, "fast");
    $('main, nav, footer').fadeTo('fast', 1);
    $('.tut-video').removeAttr('src');
});

var lastScroll = 0;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScroll) {
        $('.user-bar').slideUp("fast");
    } else {
        $('.user-bar').slideDown("fast");
    }
    lastScroll = st;
});

$(document).ready(function () {
    $('#btn-tutoriales').addClass('section-selected');
    $('.page-tutoriales').show().siblings().hide();
});