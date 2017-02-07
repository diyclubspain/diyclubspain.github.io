var tutorialesApp = angular.module('tutorialesApp', []);

//Verificador iframe URL's
tutorialesApp.filter('trustAsResourceUrl', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsResourceUrl(val);
    };
    }]);

tutorialesApp.controller('TutorialesController', ['$scope', function ($scope) {

    $scope.openModal = function (event) {
        
        $('.tut-modal').animate({
            top: 0,
            opacity: 1
        }, "fast");
        $('main, nav, footer').fadeTo('fast', .3);

        var $videoToModal = $(event.currentTarget).children('.modal-video').attr('ng-src');
        var $tituloToModal = $(event.currentTarget).children('.modal-titulo').text();
        var $descripcionToModal = $(event.currentTarget).children('.modal-descripcion').text();

        $('.tut-video').attr('src', $videoToModal);
        $('.tut-titulo').text($tituloToModal);
        $('.tut-descripcion').text($descripcionToModal);

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
        },
        
    ]

}]);