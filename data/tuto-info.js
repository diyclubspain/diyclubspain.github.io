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

      "materiales": [
        'Hojas tamaño din A4',
        'Cúter',
        'Regla metálica',
        'Plegadera',
        'Lápiz',
        'Punzón',
        'Hilo de algodón',
        'Aguja de ojal grande'
      ],

      "pasos": [
        'Corta por la mitad 3 hojas tamaño Din A4. Una vez cortadas, dóblalas por la mitad, marca con la plegadera y obtendrás el primer pliegue. Repite el proceso hasta conseguir el grueso deseado para tu libreta (nosotros hemos usado 8)',
        'Marca los puntos por donde coserás los pliegos: un punto central y uno en cada extremo (a 1,5 cm del borde)',
        'Marca 2 puntos más a 1,5 cm del agujero central y marca dos más a la misma distancia de los agujeros laterales',
        'Calcula el hilo que vas a necesitar: largo del pliego x número de pliegos + largo de 2 portadas + 1 de seguridad. En nuestro caso 11 veces el largo del pliego',
        'Empieza a coser en el primer agujero del pliego clavando la aguja de dentro hacia afuera y dejando el extremo del hilo sin pasar',
        'Pasa el hilo por el 1er agujero de la cubierta de fuera hacia adentro',
        'Vuelve a pasar el hilo por el 1er agujero del pliego, esta vez de afuera hacia dentro y asegura haciendo un par de nudos',
        'Sin cortar el hilo, pasa la aguja por el 2º agujero, de dentro hacia afuera y tensa',
        'Pasa el hilo por el 3er agujero del pliego de fuera hacia adentro para unir todas las hojas del pliego',
        'Cose por el agujero central del pliego de dentro hacia fuera y de fuera hacia adentro por el agujero central de la cubierta',
        'Sin cortar el hilo, pasa la aguja por el 4º agujero, de dentro hacia afuera y tensa. Este agujero coincide con el agujero central de la cubierta, cose de afuera hacia adentro y pasa de nuevo por el agujero central del pliego tensando el hilo',
        'Cose el 5º agujero del pliego desde dentro hacia afuera para unir todas las hojas del pliego y de fuera hacia adentro por el siguiente',
        'Tensa y pasa por el último agujero del pliego desde dentro hacia afuera y por el último de la cubierta de fuera hacia adentro',
        'Cierra este último punto pasando el hilo por debajo de la puntada anterior, en la cara exterior del pliego, creando una especie de punto de cadeneta',
        'Une el resto de pliegos repitiendo el proceso pero en lugar de coser a la cubierta en los puntos correspondientes, pasa el hilo por debajo de la puntada creando el punto de cadeneta',
        'Fija la 2ª cubierta siguiendo el mismo proceso que al inicio pero sólo en los puntos que unen los pliegos a la cubierta, tensando y reforzando con cadenetas',
        'Cierra con dos nudos en el interior del último pliego, corta el hilo y quedará terminado'
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

      "materiales": [
        'Kit básico',
        'Kit básico ampliado'
      ],

      "pasos": [
        'Base de corte: Utilízala para proteger tu mesa cuando cortes con cúter',
        'Regla metálica: En las de plástico se te puede enganchar la cuchilla del cúter. Mejor si tiene base antideslizante',
        'Tijeras: Usa tijeras especiales para papel, las de acero son más ligeras. Con mango ergonómico o de goma son más cómodas',
        'Cúter: El cúter de tipo exacto o bisturí te permite llegar a los rinconcitos donde las tijeras no llegan',
        'Glossy accent: Da un acabado brillante y con volumen a los detalles que quieras destacar',
        'Cinta de doble cara: El mejor aliado con el papel. Pégalo todo fácilmente y con el mejor acabado',
        'Almohadillas 3d: Si quieres dar volumen a los detalles y recortes utiliza almohadillas en lugar de cinta o pegamento',
        'Plegadera: Muy útil para marcar las líneas de corte o dobleces de las páginas',
        'Tijeras de forma: Las hay de muchos motivos para dar un acabado original a tus recortes',
        'Perforadora de bordes: Sirve para crear formas complejas y cenefas en los bordes de tus recortes',
        'Perforadora geométrica: Úsala para crear ventanitas en tus láminas o recortes con forma geométrica',
        'Perforadora con formas: Igual que la perforadora geométrica, pero con motivos y diseños más elaborados',
        'Sellos: Los hay con y sin base. Los que no llevan base ocupan menos espacio y suelen ser de silicona',
        'Base de metacrilato: Si tienes sellos de silicona intercambiables necesitarás bases de distintos tamaños para poder estampar todos tus sellos',
        'Tinta: Existen muchas marcas, tipos y colores. Si te gusta aprovechar puedes comprar recambios para para no tener que tirar la base cuando se termine'
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

      "materiales": [
        'Hueveras',
        'Tijeras',
        'Pinturas de colores',
        'Cinta de raso',
        'Pegamento o pistola caliente',
      ],

      "pasos": [
        'Dibuja la forma de los pétalos en el interior de la huevera',
        'Recorta siguiendo el dibujo',
        'Pinta el interior de cada flor de un color diferente',
        'Pinta el exterior del mismo color que el interior y deja secar 10 minutos',
        'Pinta la zona central en un color diferente',
        'Pega las flores a la cinta dejando unos centímetros de separación entre ellas',
        'Deja enfriar unos minutos y tu cinta de flores está lista para usar'
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

      "materiales": [
        'Madera de 1,8cm de grosor',
        'Listones de 1,8cm de grosor',
        'Cola para madera',
        'Cinta adhesiva',
        'Pintura mate',
        'Lija'
      ],

      "pasos": [
        'Corta las maderas. Necesitarás 2 de 14x14cm para la base y la parte de arriba, 8 listones de 8cm, 4 listones de 20cm para las columnas y 3 listones de 10cm',
        'Presenta 4 listones de 8cm y las 4 columnas sobre una de las piezas de 14x14cm en el lugar que les corresponde asegurándote de que están centradas y forman 4 ángulos de 90º',
        'Pega todas las piezas a la base con cola blanca en el lugar que les corresponde poniendo también un poco de cola en las zonas que se unen unas con otras',
        'Refuerza todas las piezas con cinta adhesiva alrededor',
        'Pega los listones de 4cm a las columnas en la parte de arriba, reforzando con cinta adhesiva alrededor',
        'Pega la pieza de 14x14cm de la parte superior. Pega también los 3 listones de 10cm encima de esta pieza centrándolos bien y deja secar 1 hora',
        'Cubre con pintura mate del color que mejor combine en tu casa y deja secar',
        'Lija suavemente toda la pieza, haciendo fuerza en algunas zonas hasta que se empiece a ver la madera si quieres darle un aspecto envejecido',
        'Coloca una vela dentro y estrena tu nuevo porta velas'
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

      "materiales": [
        'Caja de frutas de madera',
        'Adhesivo de contacto',
        'Tornillos, lija y grapadora',
        'Alicates normal y de corte',
        'Destornilladores',
        'Sierra de marquetería',
        'Barniz color roble satinado',
        'Pintura acrílica blanca',
        'Cartón o cartulina',
        'Palitos de helado',
        'Cordel y chinchetas',
        'Taladro'
      ],

      "pasos": [
        'Desmonta las cajas con ayuda de unos alicates de corte, otros normales y destornilladores de diferentes tamaños',
        'Cuando tengas todas las maderas sueltas selecciona las que vas a necesitar. Nosotros hemos guardado dos maderas laterales, los cuatro ángulos de las esquinas y un pequeño listón',
        'Corta 4 tablones de 35 cm para el exterior y 3 tablones unos milímetros más pequeños para la base',
        'Une las maderas con adhesivo universal, espera unos 20 minutos para que se seque el adhesivo y refuerza la estructura con tornillos para que sea más resistente',
        'Recorta por la mitad un listón de los más débiles y grápalo a lado y lado de la parte interior para sujetar los tablones que serán la base del cajón',
        'Pega las tablas de la base a los listones del interior y deja secar',
        'Da una primera capa de barniz en tono roble-satinado',
        'Cuando esté seco da una capa de pintura acrílica color blanco y deja secar',
        'Da una segunda capa de barniz repitiendo el secado rápido pero esta vez deja la pintura un poco húmeda y pasa la lija. Al estar la pintura blanda, el decapado queda con un efecto desconchado',
        'Recorta un trozo de cartón o cartulina vieja a la medida que quieras y dibuja el marco con la ayuda de un palito',
        'Corta los palitos de polo a medida del marco y redondea los cantos con la lija',
        'Haz dos agujeros en el palito que pondrás en la parte superior',
        'Pinta los palitos con barniz. Una vez secos, dales una pasada de pincel seco con acrílica blanca y deja secar',
        'Pega los palitos formando el marco con adhesivo de contacto',
        'Por último, pasa un cordel finito por los dos agujeros, anuda y clávalo en el interior de la caja con una chincheta'
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

      "materiales": [
        'Hojas tamaño din A4',
        'Cúter', 'Regla metálica',
        'Plegadera',
        'Lápiz',
        'Punzón',
        'Hilo de algodón',
        'Aguja de ojal grande'
      ],

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

      "materiales": [
        'Hojas tamaño din A4',
        'Cúter',
        'Regla metálica',
        'Plegadera', 'Lápiz',
        'Punzón',
        'Hilo de algodón',
        'Aguja de ojal grande'
      ],

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
