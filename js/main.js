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

  $('#btn-tutoriales').addClass('section-selected').siblings().removeClass('section-selected');
  $('.section').on('click', function () {

    $(this).addClass('section-selected').siblings().removeClass('section-selected');

    if ($('#btn-tutoriales').hasClass('section-selected')) {
      $('.page-tutoriales').addClass('page-view').siblings().removeClass('page-view');
      $(window).scrollTop(0);
    } else if ($('#btn-articulos').hasClass('section-selected')) {
      $('.page-articulos').addClass('page-view').siblings().removeClass('page-view');
      $(window).scrollTop(0);
    } else if ($('#btn-masters').hasClass('section-selected')) {
      $('.page-masters').addClass('page-view').siblings().removeClass('page-view');
      $(window).scrollTop(0);
    } else if ($('#btn-tiendas').hasClass('section-selected')) {
      $('.page-tiendas').addClass('page-view').siblings().removeClass('page-view');
      $(window).scrollTop(0);
    }

  });

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


//Sections
