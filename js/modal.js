
//Cerrar modal
$('.modal-cerrar').on('click', function () {
    $('.tut-modal').addClass('tut-modal-hide');
    $('.signup-modal, .login-modal').addClass('sm-hide');
    $('main, nav, footer').css('opacity', '1');
    $('.tut-video').removeAttr('src');
    $('.tut-titulo').empty().text();
    $('.tut-descripcion').empty().text();
    $('.materiales-box').empty().html();
});

//Pestañas tutoriales
$('.btn-modal').on('click', function () {

    $(this).addClass('bm-activo').siblings().removeClass('bm-activo');

    if ($('.md').hasClass('bm-activo')) {
        $('.b-descripcion').addClass('box-activa').siblings().removeClass('box-activa');
    } else
    if ($('.mp').hasClass('bm-activo')) {
        $('.b-pasos').addClass('box-activa').siblings().removeClass('box-activa');
    } else
    if ($('.mc').hasClass('bm-activo')) {
        $('.b-comentarios').addClass('box-activa').siblings().removeClass('box-activa');
    }
});
