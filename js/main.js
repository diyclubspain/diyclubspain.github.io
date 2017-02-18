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

$('.btn-modal').on('click', function () {

    $(this).addClass('bm-activo').siblings().removeClass('bm-activo');

    if ($('.md').hasClass('bm-activo')) {
        $('.b-descripcion').addClass('box-activa').siblings().removeClass('box-activa');
    } else
    if ($('.mp').hasClass('bm-activo')) {
        $('.b-pasos').addClass('box-activa').siblings().removeClass('box-activa');
    } else
    if ($('.mc').hasClass('bm-activo')) {
        $('.b-comentarios').addClass('box - activa ').siblings().removeClass('box-activa');
    }
});
