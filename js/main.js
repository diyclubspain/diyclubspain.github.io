var iScrollPos = 0;

$(window).scroll(function () {
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > iScrollPos) {
        //Scrolling Down
        $('.user-bar').addClass('user-bar-hide');
    } else {
        //Scrolling Up
        $('.user-bar').removeClass('user-bar-hide');
    }
    iScrollPos = iCurScrollPos;
});

$('.ultimo').on('click', function () {
    $('.tut-modal').removeClass('tut-modal-hide');
    $('main, nav, footer').css('opacity', '.2');
});

$('.modal-cerrar').on('click', function () {
    $('.tut-modal').addClass('tut-modal-hide');
    $('main, nav, footer').css('opacity', '1')
    $('.tut-video').removeAttr('src');
    $('.tut-titulo').empty().text();
    $('.tut-descripcion').empty().text();
    $('.materiales-box').empty().html();
});

$(document).ready(function () {
    $('#btn-tutoriales').addClass('section-selected');
    $('.page-tutoriales').show().siblings().hide();
});
