//Cerrar modal
$('.modal-cerrar').on('click', function () {
	$('.tut-modal').addClass('tut-modal-hide');
	$('.signup-modal, .login-modal').addClass('sm-hide');
	$('main, nav, footer').css('opacity', '1');
	$('.modal-cerrar').removeClass('cerrar-animate');
	$('.tut-video').removeAttr('src');
	$('.tut-titulo').empty().text();
	$('.tut-descripcion').empty().text();
	$('.materiales-box').empty().html();
	$('#signEmail, #signPass, #logEmail, #logPass').val('');
});

//Pestañas tutoriales
$('.btn-modal').on('click', function () {

	$(this).addClass('bm-activo').siblings().removeClass('bm-activo');

	if ($('.md').hasClass('bm-activo')) {
		$('.box-descripcion').addClass('box-activa').siblings().removeClass('box-activa');
	} else
	if ($('.mp').hasClass('bm-activo')) {
		$('.box-pasos').addClass('box-activa').siblings().removeClass('box-activa');
	} else
	if ($('.mc').hasClass('bm-activo')) {
		$('.box-comentarios').addClass('box-activa').siblings().removeClass('box-activa');
	}
});
