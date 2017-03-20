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
    var $pasosToModal = $(event.currentTarget).children('.modal-pasos').html();
    var $comentariosToModal = $(event.currentTarget).children('.modal-comentarios').html();

    $('.tut-video').attr('src', $videoToModal);
    $('.tut-titulo').text($tituloToModal);
    $('.tut-comentarios').html($comentariosToModal);
    $('.tut-descripcion').text($descripcionToModal);
    $('.materiales-box').html($materialesToModal);
    $('.pasos-box').html($pasosToModal);

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

      "materiales": [
        'Madera o listones',
        'Cola blanca',
        'Pintura a la tiza',
        'Cartulina de color',
        'Papel de scrapbook',
        'Cinta de doble cara',
        'Pegamento',
        'Letras troqueladas',
        'Adornos troquelados',
        'Glossy accent'
      ],

      "pasos": [
        'Une listones de madera con cola blanca hasta conseguir una tabla de 39’5×22’5cm y deja secar. Si lo prefieres puedes usar una pieza entera',
        'Marca con lápiz una tira central que hará de separación. Pinta los bordes de la madera y el lomo central con pintura a la tiza del color que prefieras. Deja secar',
        'Mide las dos zonas de madera sin pintar y crea 2 estructuras para álbum de fotos con cartulinas de diferentes tamaños. El lomo debe quedar en la parte superior',
        'Corta las hojas de tu álbum a la medida que prefieras. Aquí hemos utilizado: 2uds de 16’3cm x 22’5cm; 2uds de 15x20cm; 2uds de 14×19’5cm y 2uds de 12’3×18’8cm',
        'Elige papeles de scrap con diferentes diseños que combinen entre sí y corta trozos 1cm más pequeños de cada lado que las páginas de la estructura',
        'Pega con cinta de doble cara a las cartulinas para decorar el interior y las tapas de tus álbumes de fotos dejando un borde de cartulina de 5mm alrededor que hará de marco',
        'Pega la base de cada álbum con cinta de doble cara sobre la madera',
        'Decora las tapas con papel de scrap y motivos troquelados. Con letras troqueladas puedes ponerle el nombre que prefieras a tus recuerdos',
        'Si quieres colgarlo sólo tienes que atornillarle un cáncamo por detrás. Si te da pereza agujerear puedes ponerlo sobre una repisa',
        'Ya sólo queda pegar tus fotos preferidas y el álbum cuadro estará listo para colgar'
      ]
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

      "materiales": [
        '4x cartulinas Din A4',
        'Lápiz', 'Regla',
        'Tijeras/guillotina',
        'Plegadera',
        'Cinta de doble cara'
      ],

      "pasos": [
        'Colocando la primera cartulina en horizontal, marca arriba y abajo varios puntos a 11’5cm, 1’5cm y 11’5 cm del borde',
        'Une los puntos dibujando líneas rectas con la ayuda de una regla y corta el trozo de cartulina sobrante',
        'Dobla por las líneas y marca bien los pliegues con la ayuda de una plegadera o un plástico rígido',
        'Marca arriba y abajo varios puntos en la segunda cartulina, a 11cm, 11cm y 1cm',
        'Une los puntos de arriba y abajo con líneas rectas, luego dobla y marca bien los pliegues como en el caso anterior',
        'Marca la tercera cartulina arriba y abajo a 11cm y 10cm. Corta el trozo de cartulina sobrante y dobla marcando bien los pliegues',
        'Marca la cuarta cartulina a 11cm, 0’5cm y 11cm del borde. Corta el trozo sobrante y dobla marcando bien los pliegues',
        'Une las cartulinas 2 y 3 con cinta de doble cara como se indica en el vídeo',
        'Une la cartulina 4 al interior de estas dos con cinta de doble cara',
        'Une este bloque de cartulinas a la cartulina 3 pegando el lomo a la zona central con cinta de doble cara como se indica en el vídeo',
        'El resultado es un desplegable con páginas de diferente ancho para decorar con los motivos que más te gusten'
      ]
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

      "pasos": [
        'Madera o listones',
        'Cola blanca',
        'Pintura a la tiza',
        'Cartulina de color',
        'Papel de scrapbook',
        'Cinta de doble cara',
        'Pegamento', 'Letras troqueladas',
        'Adornos troquelados',
        'Glossy accent'
      ]
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

      "pasos": [
        'Madera o listones',
        'Cola blanca',
        'Pintura a la tiza',
        'Cartulina de color',
        'Papel de scrapbook',
        'Cinta de doble cara',
        'Pegamento', 'Letras troqueladas',
        'Adornos troquelados',
        'Glossy accent'
      ]
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

      "pasos": [
        'Madera o listones',
        'Cola blanca',
        'Pintura a la tiza',
        'Cartulina de color',
        'Papel de scrapbook',
        'Cinta de doble cara',
        'Pegamento', 'Letras troqueladas',
        'Adornos troquelados',
        'Glossy accent'
      ]
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

      "pasos": [
        'Madera o listones',
        'Cola blanca',
        'Pintura a la tiza',
        'Cartulina de color',
        'Papel de scrapbook',
        'Cinta de doble cara',
        'Pegamento', 'Letras troqueladas',
        'Adornos troquelados',
        'Glossy accent'
      ]
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

      "pasos": [
        'Madera o listones',
        'Cola blanca',
        'Pintura a la tiza',
        'Cartulina de color',
        'Papel de scrapbook',
        'Cinta de doble cara',
        'Pegamento', 'Letras troqueladas',
        'Adornos troquelados',
        'Glossy accent'
      ]
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

      "pasos": [
        'Madera o listones',
        'Cola blanca',
        'Pintura a la tiza',
        'Cartulina de color',
        'Papel de scrapbook',
        'Cinta de doble cara',
        'Pegamento', 'Letras troqueladas',
        'Adornos troquelados',
        'Glossy accent'
      ]
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

      "pasos": [
        'Madera o listones',
        'Cola blanca',
        'Pintura a la tiza',
        'Cartulina de color',
        'Papel de scrapbook',
        'Cinta de doble cara',
        'Pegamento', 'Letras troqueladas',
        'Adornos troquelados',
        'Glossy accent'
      ]
    },

  ];

}]);
