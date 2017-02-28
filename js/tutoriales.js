var tutorialesApp = angular.module('tutorialesApp', ['firebase']);


//Verificador iframe URL's
tutorialesApp.filter('trustAsResourceUrl', ['$sce', function ($sce) {

	return function (val) {
		return $sce.trustAsResourceUrl(val);
	};

}]);


tutorialesApp.controller('TutorialesController', ['$scope', function ($scope) {

	$scope.openModal = function (event) {

		$('.tut-modal').removeClass('tut-modal-hide');
		$('main, nav, footer').css('opacity', '.2');
		$('.modal-cerrar').addClass('cerrar-animate').delay(2000);

		var $videoToModal = $(event.currentTarget).children('.modal-video').attr('ng-src');
		var $tituloToModal = $(event.currentTarget).children('.modal-titulo').text();
		var $descripcionToModal = $(event.currentTarget).children('.modal-descripcion').text();
		var $materialesToModal = $(event.currentTarget).children('.modal-materiales').html();

		$('.tut-video').attr('src', $videoToModal);
		$('.tut-titulo').text($tituloToModal);
		$('.tut-descripcion').text($descripcionToModal);
		$('.materiales-box').html($materialesToModal);

	};

	$scope.tutoriales = [

		{
			"imagen": "ALBUM-CUADRO-QD-CREACIONS-SCRAPBOOKING-DIYCLUB",
			"categoria": "decoracion",
			"titulo": "Álbum de fotos decorativo para pared",
			"master": "QD Creacions",
			"duracion": "1 dia",
			"dificultad": "Fácil",
			"video": "https://www.youtube.com/embed/CsMmxYhIXg4",
			"coste": "10€",

			"descripcion": "Te traemos una idea original y totalmente personalizable, un álbum de fotos para pared que podrás colgar en casa y presumir de los recuerdos de tus últimas vacaciones.",

			"materiales": ['Madera o listones', 'Cola blanca', 'Pintura a la tiza', 'Cartulina de color', 'Papel de scrapbook', 'Cinta de doble cara', 'Pegamento', 'Letras troqueladas', 'Adornos troquelados', 'Glossy accent'],
        },

		{
			"imagen": "BASE-MINI-ALBUM-FIMIKI-PAPEL",
			"categoria": "papeles",
			"titulo": "Estructura para un mini álbum de fotos",
			"master": "Fimiki",
			"duracion": "15 min",
			"dificultad": "Fácil",
			"video": "https://www.youtube.com/embed/N-n-zdAbQk0",
			"coste": "5€",

			"descripcion": "Aprende a crear la estructura para un mini álbum de fotos desplegable que puedes decorar a tu gusto con la temática que quieras. Esta medida es perfecta para los recuerdos de una escapada.",

			"materiales": ['4x cartulinas Din A4', 'Lápiz', 'Regla', 'Tijeras/guillotina', 'Plegadera', 'Cinta de doble cara'],
        },

		{
			"imagen": "COSIDO-COPTO---PAPEL---HAPPY-PROJECTS-DESIGN",
			"categoria": "papeles",
			"titulo": "Aprende encuadernación con cosido copto",
			"master": "Happy Projects Design",
			"duracion": "1 hora",
			"dificultad": "Medio",
			"video": "https://www.youtube.com/embed/WL6PptRu5OY",
			"coste": "2€",

			"descripcion": "Aprende encuadernación con cosido copto, una técnica que data del siglo III y fue inventada por los cristianos coptos que vivían en Egipto. Con ella podrás encuadernar sin necesidad de usar pegamento. ¿Te atreves?",

			"materiales": ['Hojas tamaño din A4', 'Cúter', 'Regla metálica', 'Plegadera', 'Lápiz', 'Punzón', 'Hilo de algodón', 'Aguja de ojal grande'],
        },

		{
			"imagen": "MATERIALES-BASICOS-SCRAPBOOKING-PAPERS-TRENCATS",
			"categoria": "papeles",
			"titulo": "Materiales básicos de scrapbooking",
			"master": "Papers Trencats",
			"duracion": "--",
			"dificultad": "Fácil",
			"video": "https://www.youtube.com/embed/yhClQAktJV8",
			"coste": "--",

			"descripcion": "¿Te encanta el scrap pero con tantos materiales no sabes por dónde empezar? ¡No te preocupes! DIYclub te presenta los materiales básicos de scrapbooking para iniciarte en este hobby sin problemas.",

			"materiales": ['Hojas tamaño din A4', 'Cúter', 'Regla metálica', 'Plegadera', 'Lápiz', 'Punzón', 'Hilo de algodón', 'Aguja de ojal grande'],
        },

		{
			"imagen": "CORONA-FLORES--PEQUES--SMALL-AND-NICE",
			"categoria": "peques",
			"titulo": "Diademas de flores con cartón de huevera",
			"master": "Small and Nice",
			"duracion": "20 min",
			"dificultad": "Fácil",
			"video": "https://www.youtube.com/embed/Icet7MVmavo",
			"coste": "2€",

			"descripcion": "Aprende a hacer divertidas diademas de flores reciclando cartones de hueveras. Esta manualidad es ideal para hacer con los peques de la casa una tarde de lluvia o como actividad en una fiesta de pijamas para princesas.",

			"materiales": ['Hojas tamaño din A4', 'Cúter', 'Regla metálica', 'Plegadera', 'Lápiz', 'Punzón', 'Hilo de algodón', 'Aguja de ojal grande'],
        },

		{
			"imagen": "Portavelas_DE_MADERA-Alquimia",
			"categoria": "decoracion",
			"titulo": "Decora tu casa con este portavelas de madera",
			"master": "Alquimia Deco",
			"duracion": "4 horas",
			"dificultad": "Medio",
			"video": "https://www.youtube.com/embed/QGOcBNrSBfc",
			"coste": "10€",

			"descripcion": "Decora tu casa con este portavelas de madera que puedes personalizar y hacer combinar con la decoración de cualquier rincón de tu casa. Añade detalles, colores, cristales y hasta un asa para darle tu estilo.",

			"materiales": ['Hojas tamaño din A4', 'Cúter', 'Regla metálica', 'Plegadera', 'Lápiz', 'Punzón', 'Hilo de algodón', 'Aguja de ojal grande'],
        },

		{
			"imagen": "ORGANIZADOR-CAJAS-DE-FRUTA-DE-TODO-UN-POCO",
			"categoria": "segunda",
			"titulo": "Organizadores con cajas de fruta",
			"master": "De todo un poco",
			"duracion": "4 horas",
			"dificultad": "Medio",
			"video": "https://www.youtube.com/embed/w5-r2nCeMLw",
			"coste": "12€",

			"descripcion": "Crea fantásticos organizadores con cajas de fruta para guardar papeles, herramientas, pinturas y todo lo que se te ocurra… Y lo mejor, ¡hechos por ti! Una nueva vida para las cajas después de pasar por el mercado.",

			"materiales": ['Hojas tamaño din A4', 'Cúter', 'Regla metálica', 'Plegadera', 'Lápiz', 'Punzón', 'Hilo de algodón', 'Aguja de ojal grande'],
        },

		{
			"imagen": "imanes-nevera",
			"categoria": "otras",
			"titulo": "Transforma viejas chapas en imanes de nevera",
			"master": "MforMonkey",
			"duracion": "30 min",
			"dificultad": "Fácil",
			"video": "https://www.youtube.com/embed/JQu-zJnOUEQ",
			"coste": "30€",

			"descripcion": "En DIYclub te proponemos ideas para esos pins bonitos que ya no usas. Transforma tus antiguas chapas en imanes para nevera con este tutorial, de una forma muy fácil. Les darás un nuevo uso y quedaran preciosas decorando tu cocina.",

			"materiales": ['Hojas tamaño din A4', 'Cúter', 'Regla metálica', 'Plegadera', 'Lápiz', 'Punzón', 'Hilo de algodón', 'Aguja de ojal grande'],
        },

		{
			"imagen": "COSIDO-COPTO---PAPEL---HAPPY-PROJECTS-DESIGN",
			"categoria": "papeles",
			"titulo": "Aprende encuadernación con cosido copto",
			"master": "Happy Projects Design",
			"duracion": "1 hora",
			"dificultad": "Medio",
			"video": "https://www.youtube.com/embed/WL6PptRu5OY",
			"coste": "2€",

			"descripcion": "Aprende encuadernación con cosido copto, una técnica que data del siglo III y fue inventada por los cristianos coptos que vivían en Egipto. Con ella podrás encuadernar sin necesidad de usar pegamento. ¿Te atreves?",

			"materiales": ['Hojas tamaño din A4', 'Cúter', 'Regla metálica', 'Plegadera', 'Lápiz', 'Punzón', 'Hilo de algodón', 'Aguja de ojal grande'],
        },

    ]

}]);
