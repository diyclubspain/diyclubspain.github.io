//Esconder searchbar en scroll
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


$(document).ready(function () {

    $('#btn-tutoriales').addClass('section-selected');
    $('.page-tutoriales').show().siblings().hide();

});


$('.signup').on('click', function () {

    $('.signup-modal').removeClass('sm-hide');
    $('main, nav, footer').css('opacity', '.2');

});

$('.login').on('click', function () {

    $('.login-modal').removeClass('sm-hide');
    $('main, nav, footer').css('opacity', '.2');

});


$('.ultimo').on('click', function () {

    $('.tut-modal').removeClass('tut-modal-hide');
    $('main, nav, footer').css('opacity', '.2');

});
