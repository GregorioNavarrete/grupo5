# datos de la editoriales
INSERT INTO editorial(id_editorial, name)
  VALUES (1 , 'Salamandra' );
INSERT INTO editorial(id_editorial, name)
  VALUES (2 , 'Planeta' );
INSERT INTO editorial(id_editorial, name)
  VALUES (3 , 'Molino' );
INSERT INTO editorial(id_editorial, name)
  VALUES (4 , 'Destino' );
INSERT INTO editorial(id_editorial, name)
  VALUES (5 , 'Minotauro' );
INSERT INTO editorial(id_editorial, name)
  VALUES (6 , 'V&R' );
INSERT INTO editorial(id_editorial, name)
  VALUES (7 , 'Debolsillo' );
INSERT INTO editorial(id_editorial, name)
  VALUES (8 , 'Booket' );
INSERT INTO editorial(id_editorial, name) 
VALUES (9, 'Alfaguara');
INSERT INTO editorial(id_editorial, name) 
VALUES (10, 'Montena');
INSERT INTO editorial(id_editorial, name) 
VALUES (11, 'Del Fondo');
INSERT INTO editorial(id_editorial, name) 
VALUES (12,'Vrya');
INSERT INTO editorial(id_editorial, name) 
VALUES (13,'Contraluz');


 
# insertamos lo posibles lenguajes (cambiar el name a var char)

INSERT INTO language(id_language, name)
VALUES (1, 'Español');
INSERT INTO language(id_language, name)
VALUES (2, 'Ingles');
  
  ## DELETE FROM language WHERE ID_LANGUAGE = 2;
## select * from language;

# agregamos valores a collection (son la sagaSerie) (null si no pertenece a una saga)
INSERT INTO collection(id_collection, name)
VALUES (1, null);
INSERT INTO collection(id_collection, name)
VALUES (2, 'Percy jackson y los dioses de olimpo');
INSERT INTO collection(id_collection, name)
VALUES (3, 'Los juegos del hambre');
INSERT INTO collection(id_collection, name)
VALUES (4, 'Cazadores de sombras');
INSERT INTO collection(id_collection, name)
VALUES (5, 'Crepúsculo');
INSERT INTO collection(id_collection, name)
VALUES (6, 'El señor de los anillos');
INSERT INTO collection(id_collection, name)
VALUES (7, 'Heartstopper');
INSERT INTO collection(id_collection, name)
VALUES (8, 'Las crónicas de narnia');
INSERT INTO collection(id_collection, name)
VALUES (9, 'Dollanganger');
INSERT INTO collection(id_collection, name)
VALUES (10, 'El coleccionista');
INSERT INTO collection(id_collection, name)
VALUES (11, 'It Starts With us');
INSERT INTO collection(id_collection, name)
VALUES (12, 'Los héroes del Olimpo');
INSERT INTO collection(id_collection, name)
VALUES (13, 'Los Origenes');
INSERT INTO collection(id_collection, name)
VALUES (14, 'El Señor de los Anillos');
INSERT INTO collection(id_collection, name)
VALUES (15,'Harry Potter');
##select * from COLLECTION;

### los datos de suppot o de formato de libro

INSERT INTO support(id_support, name)
VALUES (1, 'Físico');
INSERT INTO support(id_support, name)
VALUES (2, 'Electronico');
## select * from SUPPORT;

## datos de la tabla favoritos 1 a 1

INSERT INTO favorites(id_fav, id_user)
VALUES (1, 1);
INSERT INTO favorites(id_fav, id_user)
VALUES (2, 3);


# datos de los autores author (BIOGRAPHY y IMAGE podrian ser null ?)
INSERT INTO author(id_author, name, biography, image)
VALUES (1, 'Antoine de saint-exupéry', 'Antoine Marie Jean-Baptiste Roger Conde de Saint-Exupéry (Lyon, 29 de junio de 1900 - Mar Mediterráneo, en las proximidades de Marsella, 31 de julio de 1944), más conocido como Antoine de Saint-Exupéry, fue un aviador francés y un escritor caracterizado por una prosa rigurosa plagada de retórica, lirismo y aventura, mundialmente conocido por la popular obra El Principito y por una corta obra en la que sus experiencias como piloto fueron su fuente de inspiración.
Nació en la ciudad de Lyon en una familia aristocrática, y, desde la pérdida de su padre cuando tan solo tenía 4 años, mantuvo un fuerte vínculo con su madre, quien le transmitió su sensibilidad y amor a la cultura.', 'antoine-de-saint-exupéry.jpg');
INSERT INTO author(id_author, name, biography, image)
VALUES (2, 'Collen Hoover', 'Empezó a escribir a los cinco años. Autopublicó su primer libro en enero de 2012 y en agosto ya estaba en la lista de los más vendidos de The New York Times. Hasta la fecha es autora de más de veinte novelas y cuenta con el reconocimiento y apoyo incondicional de millones de lectores en todo el mundo. Ha ganado el Goodreads Choice Award a la mejor novela romántica en tres ocasiones y su novela Romper el círculo se ha convertido en uno de los mayores fenómenos literarios globales de los últimos años. En 2015 Hoover fundó junto con su familia The Bookworm Box, un programa de suscripción de libros sin ánimo de lucro cuyos beneficios son donados a distintas organizaciones benéficas.', 'collen-hoover.jpg');
INSERT INTO author(id_author, name, biography, image)
VALUES (3, 'Rick Riordan', 'Rick Riordan (San Antonio, Texas, 1964) es el autor de la exitosa serie de novelas de misterio protagonizadas por el detective Jackson Tres Navarre, galardonada con los más prestigiosos premios en su género. Igualmente exitosos han sido los libros sobre Percy Jackson, el niño que un día descubre que es hijo de un dios de la Antigüedad y tiene una importantísima misión que cumplir. Esta serie, que empezó siendo un cuento para leer a su hijo antes de acostarlo, está basada en sus experiencias como profesor de mitología de niños con diﬁcultades de aprendizaje.', 'rick-riordan.jpg');
INSERT INTO author(id_author, name, biography, image)
VALUES (4, 'Suzanne Collins', 'Escritora de literatura juvenil y guionista americana, Suzanne Collins estudió Arte, Teatro y Comunicación en la Universidad de Indiana, completando su formación con un máster en Escritura Dramática. Collins es conocida a nivel internacional por su saga Los juegos del hambre.
Su carrera comenzó en 1991 como guionista en la cadena Nickelodeon. Tras conocer a James Plumiew, un escritor de libros infantiles, Collins se inspiró y comenzó a escribir sus propios libros del género. En 2003 publicó su primera novela, Gregor: Las Tierras Bajas, cuya historia se vio influida por la de Las aventuras de Alicia en el País de las Maravillas de Lewis Carroll. Con esta novela daría comienzo su primera saga, Las Crónicas de las Tierras Bajas.
Fue en 2008 con la publicación de Los juegos del hambre, la primera de la trilogía bajo el mismo nombre, que Collins saltó a la fama. ', 'suzanne-collins.jpg');
INSERT INTO author(id_author, name, biography, image)
VALUES (5, 'Cassandra Clare', 'Judith Rumelt mejor conocida como Cassandra Clare es la autora estadounidense que escribió la serie de libros para adultos y jóvenes: Las Crónicas de Cazadores de Sombras, las cuales comprenden Cazadores de Sombras, Cazadores de Sombras: Los Orígenes, Cazadores de Sombras: Renacimiento, Cazadores de Sombras: Las Últimas Horas y Cazadores de Sombras: Las Maldiciones Ancestrales entre otras historias cortas, que escribió con ayuda de varios escritores, como Las Crónicas de Magnus Bane, Códice de los Cazadores de Sombras y Cazadores de Sombras y Subterráneos.', 'cassandra-clare.jpg');
INSERT INTO author(id_author, name, biography, image)
VALUES (6, 'Stephenie Meyer', 'Autora americana, Stephenie Meyer estudió Inglés en la Universidad Brigham Young, tras lo que se casó, retirándose para cuidar de sus hijos durante varios años. Sin embargo, en 2003 se convirtió en uno de los fenómenos literarios del momento al publicar la que es, sin duda, su obra más conocida: Crepúsculo.
Pese a los primeros rechazos editoriales que sufrió, logró publicar Crepúsculo tras una subasta de derechos que le proporcionó un trato de 750.000 dólares por tres libros. La novela apareció a finales de 2003 y logró colocarse en lo más alto de la lista de los más vendidos del New York Times, al igual que sus continuaciones, Luna nueva, Eclipse y Amanecer.', 'stephenie-meyer.jpg');
INSERT INTO author(id_author, name, biography, image)
VALUES (7, 'Dan Brown', 'Exeter, New Hampshire, EE.UU, 22 de junio de 1964. Dan Brown ha vendido más de 234 millones de ejemplares de su obra en todo el mundo y sus libros han sido traducidos a 56 idiomas. Es el autor de grandes best sellers internacionales como El código Da Vinci, que a día de hoy sigue siendo el libro más vendido en español con más de ocho millones de ejemplares, Origen, Inferno, El símbolo perdido, Ángeles y demonios, La conspiración y Fortaleza digital.', 'dan-brown.jpg');
INSERT INTO author(id_author, name, biography, image)
VALUES (8, 'Jane Austen', 'Escritora inglesa nacida en Steventon el 16 de diciembre de 1775, Jane Austen es considerada una de las autoras más influyentes dentro de la literatura anglosajona. De inicio precoz, escribió varias obras de niña que serían compiladas años después de su muerte. Fue Sentido y sensibilidad (1811) su primera obra publicada y con la que consiguió cierto nombre dentro del mundo literario. Dos años más tarde publicaría Orgullo y prejuicio (1813), que se convertiría en un gran éxito y, posiblemente, en su obra más conocida. De un estilo innovador, la novela romántica de Austen, cargada de tintes costumbristas, ha logrado influir de manera notable a generaciones posteriores de escritores.', 'jane-austen.jpg');
INSERT INTO author(id_author, name, biography, image)
VALUES (9, 'J.R.R. Tolkien', 'Nació el 3 de enero en Bloemfontein en el Estado Libre de Orange. A principios de 1895, su madre, agotada por el clima, regresó a Inglaterra con Ronald y su hermano pequeño, Hilary. Tras el fallecimiento de su padre, a causa de unas fiebres reumáticas, él y su familia se establecieron brevemente en Sarehole, cerca de Birmingham. Esta hermosa zona rural causó una honda impresión en el joven Ronald, y sus efectos pueden verse en su escritura y en algunos de sus cuadros.
Por su larga y prestigiosa carrera académica, es conocido por ser el creador de El Hobbit, El Señor de los Anillos y El Silmarillion. Sus obras se han traducido a más de cuarenta idiomas en todo elmundo. Fue nombrado caballero del imperio británico y doctor honoris causa por la Universidad de Oxford en 1972. Murió el 2 de septiembre de 1973 a los ochenta y un años.', 'j-r-r-tolkien.jpg');
INSERT INTO author(id_author, name, biography, image)
VALUES (10, 'Alice Oseman', 'Alice Oseman nació en Kent en 1994. Con solo diecisiete años consiguió su primer contrato editorial. Ahora dedica todo su tiempo a la escritura y a la ilustración. Habitualmente, puedes encontrarla distraída mirando la pantalla del ordenador, preguntándose por el sinsentido de la existencia o haciendo cualquier cosa que se le ocurra con tal de evitar el trabajo de oficina.
Alice ha generado un montón de comentarios en las redes, y cuenta con un gran número de fans gracias a sus historietas Heartstooper.
Sus novelas de ficción infantil y juvenil han sido nominadas a los premios I&J Book Prize, los Inky Awards y el Goodreads Choice Awards.', 'alice-oseman.jpg');
INSERT INTO author(id_author, name, biography, image)
VALUES (11, 'C.S. Lewis', 'Clive Staples Lewis (Gran Bretaña, 1898-1963) crítico, académico y novelista inglés, considerado como uno de los mejores escritores de literatura infantil y juvenil en lengua inglesa. Amigo y colega de Tolkien, ambos poseían un agudo intelecto, una sólida formación y una pasión por la mitología nórdica que marcaría sus obras capitales: el Hobbit y El Señor de los anillos, en Tolkien y las Crónicas de Narnia (1950),  en CS Lewis. Con Narnia, una obra fantástica y alegórica sobre la eterna lucha entre el bien y el mal, Lewis inauguraba un género que le convertiría en fundador y referente inexcusable de la narrativa fantástica actual.', 'c-s-lewis.jpg');
INSERT INTO author(id_author, name, biography, image)
VALUES (12, 'V.C. Andrews', 'V.C. Andrews fue el seudónimo con el que firmó sus novelas la escritora estadounidense Virginia Cleo Andrews (1923-1986). No fue hasta su muerte en 1986 que se supo que se trataba de una mujer, puesto que su editor nunca reveló en vida su nombre real. En su adolescencia, sufrió un accidente que la hizo necesitar una silla de ruedas durante el resto de su vida. No se casó ni tuvo hijos y dedicó todo su tiempo a la escritura.
Se hizo conocida gracias a sus novelas de corte gótico, donde mezclaba elementos clásicos de terror con tramas desarrolladas en opresivos ambientes familiares.
Su obra más conocida es la novela Flores en el ático (1979), la primera entrega de la Saga Dollanganger.', 'v-c-andrews.jpg');
INSERT INTO author(id_author, name, biography, image)
VALUES (13, 'Dot Hutchison', 'Dot Hutchinson es autora del bestseller internacional El Jardín de las Mariposas, y La temporada de los niños perdidos, Los niños del verano, Las rosas de mayo, además de A Wounded Name, una novela juvenil basada en Hamlet de Shakespeare. Ha trabajado en un campamento de boy scouts, una tienda de artículos para manualidades, una librería y la Feria Renacentista. Le encantan las tormentas eléctricas, la mitología, la historia y las películas que pueden y deben verse una y otra vez.', 'dot-hutchison.jpg');
INSERT INTO author(id_author, name, biography, image)
VALUES (14, 'Adam Nevill', 'Adam L. G. Nevill nació en Birmingham, Reino Unido, en 1969 y se crió en ese mismo país y en Nueva Zelanda. También es el autor de Apartamento 16 y Banquet for the Damned, una original novela de terror sobrenatural inspirada en M. R. James y la tradición del relato inglés de fantasmas. Ha desempeñado diversos trabajos a lo largo de su vida, entre ellos el de vigilante nocturno y portero de día de 2000 a 2004 en los exclusivos apartamentos del West London.', 'adam-nevill.jpg');
INSERT INTO author(id_author, name, biography, image)
VALUES (15, 'Herbert George Wells', 'Escritor y filósofo británico, H. G. Wells fue unos de los primeros escritores de ciencia ficción, género con el que consiguió convertirse en un clásico de la literatura de anticipación.
Nacido en 1866, tuvo varios trabajos y comenzó a formarse en Biología. Debido a su falta de recursos económicos, tardó varios años en licenciarse. Poco después, debido a problemas físicos, decidió dedicarse a la escritura de manera constante.Su obra es prolífica, con más de cien libros y multitud de cuentos, y en ella podemos encontrar tanto obras de ciencia ficción, como La guerra de los mundos (1898) o La máquina del tiempo (1895) -ambas llevadas al cine en más de una ocasión-, como obras de corte social, Tono Bungay (1909), o centradas en el estudio de la historia.', 'herbert-george-wells.jpg');
INSERT INTO author(id_author, name, biography, image)
VALUES (16, 'Inma Rubiales', 'Inma Rubiales es una joven autora extremeña que nació en marzo de 2002. Su pasión por la literatura surgió cuando solo era una niña, y, después de pasar años leyendo las historias de otros, decidió que ya era hora de crear las suyas.
En 2019, con solo diecisiete años, su primera novela dio el salto al papel tras su éxito en la plataforma Wattpad. Fue en 2022 cuando publicó Hasta que nos quedemos sin estrellas, seguida de El arte de ser nosotros (2023).
Actualmente, Inma cursa sus estudios en Publicidad y Relaciones Públicas mientras trabaja en sus apasionantes novelas.', 'inma-rubiales.jpg');
INSERT INTO author(id_author, name, biography, image)
VALUES (17, 'J. K. Rowling', 'Escritora y productora de cine escocesa, J.K. Rowling es conocida principalmente por su serie de libros juveniles protagonizados por Harry Potter, verdadero fenómeno literario a nivel mundial que ha conseguido vender más de 400 millones de ejemplares, siendo traducida a más de 20 idiomas.
Rowling estudió Filología Clásica y Francesa, trabajando como investigadora y secretaria para Amnistía Internacional antes de trabajar en Portugal como profesora de inglés en 1992. Antes de irse a Portugal, en 1990 le vino la inspiración del personaje de Harry Potter en un viaje de Mánchester a Londres. Al llegar a casa se puso a crear el mundo mágico más influyente de la literatura juvenil y, mientras escribía, su madre falleció, ayudándole a comprender mejor la pérdida que sufrió Harry Potter en sus libros. ', 'jk-rowling.jpg');

INSERT INTO author(id_author, name, biography, image)
VALUES (18, 'Ali Hazelwood', 'Ali Hazelwood es el seudónimo de una profesora italiana de neurociencia y escritora de novelas románticas. Sus historias se centran en mujeres en los campos STEM y académicos. Su primera novela, The Love Hypothesis, fue un éxito de ventas del New York Times.
Ali Hazelwood es autora de múltiples publicaciones... por desgracia, de artículos sobre neurología revisados por pares, en los que nadie se da besos y en los que el para siempre no es siempre feliz. Nacida en Italia, vivió en Alemania y Japón antes de trasladarse a Estados Unidos para doctorarse en neurociencia. Hace poco se convirtió en profesora, algo que la tiene aterrorizada. Cuando Ali no está trabajando, se dedica a correr, hacer ganchillo, comer cake pops y ver películas de ciencia ficción con sus dos jefes supremos felinos (y su algo menos felino marido). Su primera novela, "La hipótesis del amor", ha sido un éxito de ventas mundial. Disponible de Ali Hazelwood en Contraluz: "La hipótesis del amor" y "La química del amor".', 'ali-hazelwood.jpg');


##genreNAMEID_GENRE
##select * from AUTHOR;



#### datos de los libros


INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (1, 1, 1, 1, 1, 'El Principito', null, 7000, 'el-principito.jpg', 'Fábula mítica y relato filosófico que interroga acerca de la relación del ser humano con su prójimo y con el mundo, el principito concentra, con maravillosa simplicidad, la constante reflexión de saint-exupéry sobre la amistad, el amor, la responsabilidad y el sentido de la vida.', '112', '2016', 100, 0, '2024-01-29 10:00:00', '2024-01-29 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (2, 2, 1, 11, 1, 'Romper el Circulo', null, 15600, 'romper-el-circulo.jpg', 'A veces, quien más te quiere es quién más daño te hace. lily no siempre lo ha tenido fácil. por eso, su idílica relación con un magnífico neurocirujano llamado ryle kincaid, parece demasiado buena para ser verdad. cuando atlas, su primer amor, reaparece repentinamente y ryle comienza a mostrar su verdadera cara, todo lo que lily ha construido con él se ve amenazado.', '400', '2022', 10, 10, '2024-01-29 10:00:00', '2024-01-29 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (3, 2, 1, 1, 1, 'Verity', 'La Sombra de un Engaño', 32989, 'verity.jpg', 'Lowen Ashleigh, autora al borde de la bancarrota, recibe un encargo que le cambiará la vida: Jeremy, el flamante marido de Verity Crawford, una de las autoras más importantes del momento, la contrata para terminar la serie de libros en la que trabajaba su mujer antes de sufrir un grave accidente que la ha dejado en coma. Lowen se instala en la mansión del matrimonio para poder trabajar en las notas en las que trabajaba Verity, con la esperanza de encontrar material suficiente para empezar con su encargo, pero lo que no esperaba descubrir en la caótica oficina es una autobiografía de la propia Verity, escondida para que nunca salga a la luz.', '368', '2020', 30, 10, '2024-02-13 10:00:00', '2024-02-13 10:00:00');
  
INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (4, 2, 1, 11, 1, 'Volver a Empezar', null, 27900, 'volver-a-empezar.jpg', 'La esperada continuación de Romper el círculo. Todo final tiene un principio. Y todo empezó con Atlas. Lily y su exmarido, Ryle, acaban de pactar la custodia compartida de su hija cuando Lily se encuentra de nuevo con su primer amor, Atlas. Después de casi dos años sin verse, está entusiasmada porque, por una vez, el tiempo está de su lado, e inmediatamente dice que sí cuando Atlas le pide una cita. Pero su alegría se desvanece cuando piensa que, aunque ya no estén casados, Ryle sigue teniendo un papel en la familia, y no consentirá que Atlas Corrigan esté presente en su vida y en la de su hija. Maravillosa, desgarradora e inolvidable, Volver a empezar alterna las perspectivas de Lily y Atlas, y continúa justo donde nos dejó Romper el círculo.', '384', '2023', 30, 10, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (5, 1, 1, 2, 1, 'El ladrón del rayo', 'Percy Jackson 1', 13800, 'el-ladron-del-rayo.jpg','¿Qué pasaría si un día descubrieras que, en realidad, eres hijo de un dios griego que debe cumplir una misión secreta? Pues eso es lo que le sucede a Percy Jackson, que a partir de ese momento se dispone a vivir los acontecimientos más emocionantes de su vida. El ha de descubrir quién ha robado el rayo de Zeus y así evitar que estalle una guerra entre los dioses. Para cumplir la misión contará con la ayuda de sus amigos Grover, un joven sátiro, y Annabeth, hija de Atenea.', '285', '2019', 60, 10, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (6, 1, 1, 2, 1, 'El mar de los monstruos', 'Percy Jackson 2', 14200, 'el-mar-de-los-monstruos.jpg', 'Desde que sabe que es hijo de un dios del Olimpo, Percy Jackson espera que el destino le depare continuas aventuras. Y sus expectativas se cumplen con creces. Aunque el nuevo curso en la Escuela Meriwether transcurre con inusual normalidad, un simple partido de balón prisionero acaba en batalla campal contra una banda de feroces gigantes. A partir de ahí los acontecimientos se precipitan: el perímetro mágico que protege el Campamento Mestizo es destruido por un misterioso enemigo y la única seguridad con que contaban los semidioses desaparece. Así, para impedir este daño irreparable, Percy y sus amigos inician la travesía del temible Mar de los Monstruos en busca de lo único que puede salvar el campamento: el Vellocino de Oro.', '256', '2019', 50, 10, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (7, 1, 1, 2, 1, 'La maldición del Titán', 'Percy Jackson 3', 14500, 'la-maldicion-del-titan.jpg','Ante la llamada de socorro de su amigo el sátiro Grover, Percy acude inmediatamente en su auxilio. Y aunque va acompañado de Annabeth y Thalia, las dos semidiosas que son sus aliadas, ninguno imagina la sorpresa que los aguarda: una terrible mantícora pretende secuestrarlos y llevarlos ante el general enviado por Cronos, el diabólico señor de los titanes. Sin embargo, gracias a la ayuda de las cazadoras de Artemisa, Percy y sus aliadas logran escapar y volver al campamento mestizo. Una vez allí, emprenderán la búsqueda del monstruo que puede provocar la destrucción del Olimpo, a pesar de que, según la profecía del Oráculo, sólo uno de ellos logrará resistir la maldición del titán.', '280', '2019', 53, 10, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (8, 1, 1, 2, 1, 'La batalla del laberinto', 'Percy Jackson 4', 14750, 'la-batalla-del-laberinto.jpg','A punto de comenzar primero de secundaria, Percy Jackson no espera emociones fuertes, sino más bien un aburrimiento soporífero. Pero cuando en la nueva escuela se presenta una vieja amiga, seguida de un par de animadoras diabólicas, los acontecimientos se precipitan y todo empieza a ir de mal en peor. Cronos, el malvado señor de los titanes, amenaza con destruir el Campamento Mestizo, donde se refugian los jóvenes semidioses. Para evitarlo, Percy y sus amigos deben emprender una arriesgada búsqueda a través del laberinto, un mundo subterráneo plagado de trampas temibles y criaturas perversas, concebido para acabar con quienes se atrevan a profanarlo', '320', '2021', 32, 10, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (9, 1, 1, 2, 1, 'El último héroe del Olimpo', 'Percy Jackson 5', 14750, 'el-ultimo-heroe-del-olimpo.jpg','Mientras en las calles de Manhattan se libra una despiadada batalla por la civilización occidental, Percy abriga la terrible sospecha de estar luchando contra su propio destino... Los mestizos han dedicado mucho tiempo a prepararse para la batalla decisiva contra los titanes, aunque saben que sus posibilidadesde obtener la victoria son mínimas. El ejército de Cronos es ahora más formidable que nunca y, con cada dios y cada mestizo que logra reclutar, aumentan los poderes del maligno titán. Tras fracasar en un primer intento de detener en alta mar las arrolladoras tropas de Cronos, Percy Jackson y los olímpicos se esfuerzan por mantener a raya la furia desatada del monstruo Tifón. Y cuando Cronos ordena el avance definitivo hacia Nueva York, donde el monte Olimpo, en lo alto del Empire State, se encuentra prácticamente indefenso, pararle los pies al implacable Señor del Tiempo dependerá exclusivamente de Percy y su hueste de jóvenes semidioses.', '346', '2019', 50, 10, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (10, 10, 1, 12, 1, 'El Héroe Perdido', 'Los héroes del Olimpo 1', 22409, 'el-heroe-perdido.jpg','Tres semidioses. Una profecía. Y solo cuatro días para conseguir loimposible.Jason tiene un problema: acaba de despertar y no recuerda absolutamentenada.Piper tiene un secreto: su padre lleva tres días desaparecido y sabe que algo va mal.Leo tiene un don: siente las herramientas y las piezas mecánicas comoparte de sí mismo.Los tres van camino de un internado para chicos difíciles..., pero sudestino es otro: liberar a Hera, diosa griega de la venganza. Tres semidioses.Una profecía.Y solo cuatro días paralograr lo imposible.Cuando Jason despierta, sabe que algo va muy mal. Está en un autobúscamino de un campamento para chicos pro-blemáticos. Y lo acompañan Piper una muchacha (bastante bonita, por cierto) que dice que es su novia y el que parece ser su mejor amigo, Leo...Pero él no recuerda nada: ni quién es ni cómo ha llegado allí. Pocashoras después, los tres descubrirán no solo que son hijos de dioses delOlimpo, sino que además su destino es cumplir una profecía de locos:liberar a Hera, diosa de la furia, de las garras de un enemigo que llevamucho tiempo planeando su venganza...', '491', '2012', 33, 10, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (11, 10, 1, 12, 1, 'El hijo de Neptuno', 'Los héroes del Olimpo 2', 36872, 'el-hijo-de-neptuno.jpg','Tres amigos. Una misión de locos. Y un enemigo con poderes sobrehumanos. ¿A qué juegan los dioses del Olimpo? Gea, la madre Tierra, está despertando a un ejército de monstruos para acabar con la humanidad... y ellos se entretienen mareando a los semidioses, los únicos que pueden derrotar sus perversos planes. Ahora han mandado a Percy al campamento Júpiter casi sin recuerdos y con la inquietante sensación de que él, el griego, es el enemigo. Por suerte, contará con el apoyo de Hazel, una chica nacida hace más de ochenta años, y de Frank, un muchacho que todavía no sabe muy bien cuáles son sus poderes (ni si los tiene). Juntos deberán emprender una peligrosa expedición para liberar a Tánatos, el dios de la muerte, de las garras de un gigante...', '464', '2017', 14, 10, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (12, 10, 1, 12, 1, 'La marca de Atenea', 'Los héroes del Olimpo 3', 37997, 'la-marca-de-atenea.jpg','El destino de la humanidad pende de un hilo: gea ha abierto de par en par las puertas de la muerte para liberar a sus despiadados monstruos. Los únicos que pueden cerrarlas son Percy, Jason, Piper, Hazel, Frank, Leo y Annabeth, el equipo de semidioses griegos y romanos elegido por una antigua profecía. Pero su misión es todavía más difícil de lo que parece: sospechan que para encontrar las puertas deberán cruzar el océano, tienen solo seis días para conseguirlo y, por si fuera poco, acaba de estallar la guerra entre sus dos campamentos y ahora ellos son un objetivo... ¿lograrán ganar esta carrera de obstáculos contrarreloj?', '512', '2017', 23, 10, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (13, 10, 1, 12, 1, 'La casa de Hades', 'Los héroes del Olimpo 4', 32743, 'la-casa-de-hades.jpg','Gaia, la madre tierra, se ha propuesto destruir el mundo de los mortalescon sus tropas de monstruos y gigantes, y solo hay un modo de impedirlo:cerrar las Puertas de la Muerte, por donde estas criaturas estánescapando de los infiernos. Y, lo más importante, hay que hacerlo desdefuera... y desde dentro.Hazel, Nico, Piper, Leo, Frank y Jason han descubierto que la parteexterior se halla en Grecia, en el templo de Hades, dios del inframundo,aunque tienen un largo viaje hasta allí e ignoran a qué deberánenfrentarse cuando lleguen.Mientras, Percy y Annabeth se encuentran en algún lugar al otro lado,luchando por su supervivencia, por encontrar las puertas... y por salirantes de que sea demasiado tarde.', '528', '2014', 21, 10, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (14, 10, 1, 12, 1, 'La Sangre del Olimpo', 'Los héroes del Olimpo 5', 22409, 'la-sangre-del-limpo.jpg','Aunque los miembros de la tripulación del Argo II han avanzado en sus muchas misiones, todavía parecen muy lejos de vencer a la diosa Gea. Todos los gigantes de la diosa han resurgido, esta vez más fuertes que nunca. Deberán ser detenidos antes del Banquete de Spes, cuando Gea planea sacrificar a dos semidioses en Atenas. Necesita sangre de héroes del Olimpo para renacer. El grupo de Jason, Piper y Leo tiene visiones más y más frecuentes de una terrible batalla en su campamento. La legión romana del Campamento Júpiter, liderada por Octavian, está a tiro de flecha. Aunque tentados de llevar a Athena Parthenos a Atenas somo arma secreta, los amigos saben que la descomunal estatua debe permanecer en Long Island, donde podría llegar a detener una guerra entre ambos campamentos. Athena Parthenos irá al oeste, y el Argo II, al este. Los dioses, tan caprichosos como siempre, no van a ayudarlos. ¿Cómo pueden unos pocos semidioses vencer al ejército de gigantes de Gea? Ya han sacrificado demasiado pero si Gea renace, el mundo nunca volverá a ser el mismo', '464', '2015', 42, 10, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (15, 3, 1, 3, 1, 'Los juegos del hambre', 'Los juegos del hambre 1', 21509, 'los-juegos-del-hambre.jpg','En una oscura versión del futuro próximo, doce chicos y doce chicas se ven obligados a participar en un reality show llamado Los Juegos del Hambre . Solo hay una regla: matar o morir. Cuando Katniss Everdeen, una joven de dieciséis años se presenta voluntaria para ocupar el lugar de su hermana en los juegos, lo entiende como una condena a muerte. Sin embargo, Katniss ya ha visto la muerte de cerca y la supervivencia forma parte de su naturaleza.', '400', '2021', 27, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (16, 3, 1, 3, 1, 'En llamas', 'Los juegos del hambre 2', 22509, 'en-llamas.jpg','Katniss Everdeen ha sobrevivido a Los juegos del hambre . Pero el Capitolio quiere venganza. Contra todo pronóstico, Katniss Everdeen y Peeta Mellark siguen vivos. Aunque Katniss debería sentirse aliviada, se rumorea que existe una rebelión contra el Capitolio, una rebelión que puede que Katniss y Peeta hayan ayudado a inspirar. La nación les observa y hay mucho en juego. Un movimiento en falso y las consecuencias serán inimaginables.', '416', '2021', 28, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (17, 3, 1, 3, 1, 'Sinsajo', 'Los juegos del hambre 3', 24899, 'sinsajo.jpg','Katniss Everdeen ha sobrevivido dos veces a los Juegos del Hambre , pero no está a salvo. La revolución se extiende y, al parecer, todos han tenido algo que ver en el meticuloso plan, todos excepto Katniss. Aun así su papel en la batalla final es el más importante de todos. Katniss debe convertirse en el Sinsajo, en el símbolo de la rebelión... a cualquier precio. ', '434', '2021', 29, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (18, 3, 1, 3, 1, 'Balada de pájaros cantores y serpientes', 'Los juegos del hambre 4', 23509, 'balada-de-pajaros-cantores-y-serpientes.jpg','Es la mañana de la cosecha que dará comienzo a los décimos Juegos del Hambre. En el Capitolio; Coriolanus Snow; de dieciocho años; se prepara para una oportunidad única: alcanzar la gloria como mentor de los Juegos. La casa de los Snow; antes tan influyente; atraviesa tiempos difíciles; y su destino depende de que Coriolanus consiga superar a sus compañeros en ingenio; estrategia y encanto como mentor del tributo que le sea adjudicado', '592', '2021', 18, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (19, 8, 1, 13, 1, 'Ángel Mecánico', 'Los Origenes 1', 15909, 'angel.mecanico.jpg','Tessa Gray está dispuesta a encontrar a su hermano. Para ello, se dirige a Londres, donde será raptada por una organización secreta llamada el Club de Pandemonium, y rescatada por los Cazadores de Sombras. Pronto, Tessa verá su corazón dividido entre Jem, cuya frágil belleza oculta un oscuro secreto, y Will, cuya hiriente ironía y cambios de humor constantes la mantienen a distancia, mientras los tres intentan salvar... el mundo. La magia es peligrosa, pero el amor lo es todavía más.', '448', '2018', 40, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (20, 8, 1, 13, 1, 'Príncipe Mecánico', 'Los Origenes 2', 13619, 'principe.mecanico.jpg','Consciente del singular poder de Tessa, el Magister sigue tras sus pasos, dispuesto a acabar con los Cazadores de Sombras. Los culpa de una desgracia que destrozó su vida. Tessa, junto con lo bello y autodestructivo Will y el dulce y devoto Jem, iniciará un viaje que los llevará no sólo a descubrir la terrible tragedia de su enemigo, sino también el secreto familiar que esconde la verdadera identidad de la chica.', '464', '2013', 21, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (21, 8, 1, 13, 1, 'Princesa Mecánica', 'Los Origenes 3', 16502, 'princesa.mecanica.jpg','Tessa Gray debería sentirse feliz. ¿No se sienten así todas las novias? Prometida a Jem, no obstante aún recuerda las palabras con las que Will le declaró su amor. Pero los planes de Mortmain, que necesita a la chica para acabar con los Cazadores de Sombras, cambiarán el destino de Tessa. Si la única manera de salvar el mundo fuera destruir a quien más ama, ¿ella lo haría?', '512', '2019', 39, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (22, 8, 1, 4, 1, 'Ciudad de Hueso', 'Cazadores de Sombras 1', 12129, 'ciudad-de-hueso.jpg','En el Pandemonium, la discoteca de moda de Nueva York, Clary sigue a un atractivo chico de pelo azul hasta que presencia su muerte a manos de tres jóvenes cubiertos de extraños tatuajes. Desde esa noche, su destino se une al de esos tres cazadores de sombras, guerreros dedicados a liberar a la tierra de demonios y, sobre todo, al de Jace, un chico con aspecto de ángel y tendencia a actuar como un idiota.', '505', '2015', 78, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (23, 8, 1, 4, 1, 'Ciudad de Ceniza', 'Cazadores de Sombras 2', 13109, 'ciudad-de-ceniza.jpg','Si Clary Fray pudiera dejar atrás el mundo de los cazadores de sombras, tendría más tiempo para Simon, su mejor amigo, que se está convirtiendo en algo más. Pero ni el mundo subterráneo ni ese apuesto y exasperante Jace están preparados para dejarla ir. Además una ola de asesinatos sacude la ciudad. Clary cree que Valentine está detrás, pero Jace parece dispuesto a traicionar todo en lo que cree para ayudar a su padre.', '464', '2021', 68, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (24, 8, 1, 4, 1, 'Ciudad de Cristal', 'Cazadores de Sombras 3', 14312, 'ciudad-de-cristal.jpg','Arriesgando su vida, Clary no duda en entrar en la Ciudad de cristal sin permiso. Además, ha conocido a un misterioso y encantador cazador de sombras llamado Sebastian y está decidida a descubrir los secretos de su pasado familiar. Pero otras urgencias la apreman: lidiar con la insolencia de Jace; reencontrarse con Simon; y, sobre todo, conseguir que licántropos, vampiros y cazadores de sombras dejen a un lado sus diferencias y aúnen fuerzas para vencer a Valentine. ¿Lo conseguira? Los secretos del pasado y el amor pueden llegar a ser mortales en esta trepidante tercera entrega de Cazadores se sombras.', '534', '2015', 68, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (25, 8, 1, 4, 1, 'Ciudad de los Ángeles Caidos', 'Cazadores de Sombras 4', 13654, 'ciudad-de-los-angeles-caidos.jpg','Alguien está dando muerte a los cazadores de sombras del círculo de Valentine, y esas muertes enemistan de nuevo a los cazadores de sombras con los subterráneos. Sólo Simón, ahora convertido en vampiro, podrá evitar el enfrentamiento.Mientras, Clary y Jace descubrirán un misterio que los llevará a fortalecer su relación o... a destruirla para siempre.Amor, sangre, traición y venganza... los peligros son mayores que nunca en esta cuarta entrega de la exitosa serie de Cassandra Clare, que retoma la historia donde la dejó Ciudad de Cristal.', '416', '2011', 34, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (26, 8, 1, 4, 1, 'Ciudad de las Almas perdidas', 'Cazadores de Sombras 5', 16731, 'ciudad-de-las-almas-perdidas.jpg','Jace es ahora un sirviente del mal, vinculado a Sebastian por toda la eternidad. Solo un pequeño grupo de Cazadores de Sombras cree posible su salvación. Para lograrla, deben desafiar al Cónclave, y deben actuar sin Clary. Porque Clary está jugando a un juego muy peligroso por su propia cuenta y riesgo. Si pierde, el precio que deberá pagar no consiste tan solo en entregar su vida, sino también el alma de Jace. Clary está dispuesta a hacer lo que sea por Jace, pero ¿puede seguir confiando en él? ¿O lo ha perdido para siempre? ¿Es el precio a pagar demasiado alto, incluso para el amor?', '512', '2022', 78, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (27, 8, 1, 4, 1, 'Ciudad del Fuego Celestial', 'Cazadores de Sombras 6', 17810, 'ciudad-del-fuego-celestial.jpg','La oscuridad ha regresado al mundo de los cazadores de sombras. Mientras el caos y la destrucción los amenazan, Clary, Jace, Simon y sus amigos deben unirse para luchar contra el mayor enemigo al que se han enfrentado jamás los nefilim el hermano de Clary, Sebastián. En la lucha por intentar derrotarlo se perderán vidas, se sacrificarán amores y el mundo entero cambiará en el sexto volumen de la serie Cazadores de Sombras. Llega el esperado final de la exitosa saga de Cassandra Clare.', '505', '2015', 49, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (28, 7, 1, 5, 1, 'Crepúsculo', 'Crepúsculo 1', 21763, 'crepusculo.jpg','Cuando Isabella Swan se muda a Forks, una pequeña localidad del estado de Washington donde no deja de llover, piensa que es lo más aburrido que le podía haber ocurrido. Pero su vida da un giro excitante y aterrador una vez que se encuentra con el misterioso y seductor Edward Cullen. Hasta ese momento, Edward se las había arreglado para mantener en secreto su identidad vampírica, pero ahora ya nadie está a salvo, ni siquiera la persona a quien él más quiere: Isabella. ', '512', '2015', 19, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (29, 7, 1, 5, 1, 'Luna nueva', 'Crepúsculo 2', 19790, 'luna-nueva.jpg','Cuando el papel me cortó el dedo, salió una gota de sangre del pequeño rasguño. Entonces, todo pasó muy rápido. ¡No!, rugió Edward. Se arrojó sobre mí, lanzándome contra la mesa y aterricé en un montón de cristales hechos añicos. Jasper chocó contra Edward y el sonido pareció el choque de dos rocas... Aturdida y desorientada, miré la brillante sangre roja que salía de mi brazo y después a los ojos enfebrecidos de seis vampiros repentinamente hambrientos.', '574', '2017', 18, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (30, 7, 1, 5, 1, 'Eclipse', 'Crepúsculo 3', 20893, 'eclipse.jpg','Te gustaría oír mi historia, Bella? No tiene un final feliz, pero cuál de nuestras existencias lo tiene? Estaríamos debajo de una lápida si hubiéramos tenido un desenlace afortunado. Bella se encuentra de nuevo en peligro: una serie de misteriosos asesinatos está sembrando el pánico en la localidad y hay un ser maligno tras ella, sediento de venganza. Además, tendrá que elegir entre su amor por Edward y su amistad con Jacob, consciente de que su decisión podrá desencadenar definitivamente la guerra entre vampiros y hombres lobo. Mientras se va acercando su graduación se le presenta una nuevo dilema mucho más complejo: vida o muerte.', '624', '2016', 17, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (31, 7, 1, 5, 1, 'Amanecer', 'Crepúsculo 4', 25879, 'amanecer.jpg','No tengas miedo", le susurré. "Somos como una sola persona". De pronto me abrumó la realidad de mis palabras. Ese momento era tan perfecto. Me rodeó con los brazos, me estrechó contra él y hasta la última de mis terminaciones nerviosas cobró vida propia. "Para siempre", concluyó él.» Te quedas sin opciones cuando amas a tu potencial asesino. ¿Acaso es posible huir o luchar si eso debe causar un grave perjuicio a quien quieres? Si la vida es cuanto puedes darle y de verdad le amas por encima de todo, ¿por qué no entregarla? Ahora que Bella ha tomado una decisión, una inesperada cadena de acontecimientos está a punto de desatarse, con consecuencias inimaginables y potencialmente devastadoras.', '832', '2017', 16, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (32, 2, 1, 1, 1, 'El código Da Vinci', null, 17890, 'el-codigo-da-vinci.jpg','La mayor conspiración de los últimos 2000 años está a punto de ser desvelada. Robert Langdon recibe una llamada en mitad de la noche: el conservador del museo del Louvre ha sido asesinado en extrañas circunstancias y junto a su cadáver ha aparecido un desconcertante mensaje cifrado. Al profundizar en la investigación, Langdon, experto en simbología, descubre que las pistas conducen a las obras de Leonardo Da Vinci… y que están a la vista de todos, ocultas por el ingenio del pintor. Langdon une esfuerzos con la criptóloga francesa Sophie Neveu y descubre que el conservador del museo pertenecía al priorato de Sión, una sociedad que a lo largo de los siglos ha contado con miembros tan destacados como sir Isaac Newton, Botticelli, Victor Hugo o el propio Da Vinci, y que ha velado por mantener en secreto una sorprendente verdad histórica.', '656', '2014', 28, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (33, 11, 1, 1, 1, 'Emma', null, 17991, 'emma.jpg','Cuando la joven Emma -hija soltera del rico y distinguido señor Woodhouse- pierde la compañía de su antigua institutriz, toma bajo su tutela a la humilde Harriet Smith. Su extracción humilde y su simpleza, además de su hermosura, hacen de ella una candidata perfecta para que Emma pueda entregarse a su ocupación favorita: arreglar la vida de los demás. Sus afanes para que Harriet haga un matrimonio ventajoso y su personalidad manipuladora sufrirán, sin embargo, distintos reveses antes de alcanzar un final inesperado y feliz.', '610', '2019', 89, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (34, 11, 1, 1, 1, 'Sentido y Sensibilidad', null, 14060, 'sentido-y-sensibilidad.jpg','Tras la muerte del señor Dashwood, su esposa y sus tres hijas, Elinor, Marianne y la pequeña Margaret, deben abandonar sus posesiones en Norland al heredar sólo el hijo mayor, fruto de un anterior matrimonio. Las acogen unos familiares en Barton Cottage, donde deberán aprender a vivir en condiciones mucho más modestas de las que conocieron. Elinor y Marianne descubrirán el amor, pero también el dolor que produce una mala elección o el no ser correspondido. Marianne, más romántica, se abandona a los impulsos del corazón con sus incontenibles entusiasmos que desembocan en el desencanto y en la desesperación. Elinor, en cambio, sigue los dictámenes de la razón y mantiene un admirable dominio de sí misma al enfrentarse con sus sufrimientos amorosos por el amor que dejó en Norland. ', '452', '2015', 79, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (35, 11, 1, 1, 1, 'Orgullo y Prejuicio', null, 14491, 'orgullo-y-prejuicio.jpg','La señora Bennet ha criado a sus cinco hijas con el único deseo de encontrar marido. La llegada al vecindario de Charles Bingley, un joven rico y soltero, con algunas amistades despierta el interés de las hermanas Bennet y de las familias vecinas, que verán una excelente oportunidad para cumplir su propósito. Elizabeth, una de las hijas de los Bennet, empezará una singular relación con Darcy, uno de los amigos de Bingley, que desencadenará esta historia de orgullo y prejuicios entre los dos hasta llegar a conocer el verdadero amor.', '448', '2020', 98, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (36, 11, 1, 1, 1, 'La Abadia de Northanger', null, 13500, 'la-abadia-de-northanger.jpg','Irónico y divertido retrato de la sociedad inglesa de la época. Catherine Morland es una muchacha "tan corriente como la que más": ni por su espíritu ni por su condición social está llamada a ser una heroína novelesca... y, sin embargo, las novelas son su debilidad. La realidad le revelará al fin un mundo acaso más absurdo y angustioso que el imaginado por la peor de sus fantasías.', '290', '2019', 78, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (37, 5, 1, 14, 1, 'La Comunidad del Anillo', 'El Señor de los Anillos 1', 13980, 'la-comunidad-del-anillo.jpg','En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en la Grieta del Destino. Acompañado por magos, hombres, elfos y enanos, atravesará la Tierra Media y se internará en las sombras de Mordor, perseguido siempre por las huestes de Sauron, el Señor Oscuro, dispuesto a recuperar su creación para establecer el dominio definitivo del Mal.', '756', '2023', 67, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (38, 5, 1, 14, 1, 'Las Dos Torres', 'El Señor de los Anillos 2', 12700, 'las-dos-torres.jpg','La Compañía se ha disuelto y sus integrantes emprenden caminos separados. Frodo y Sam avanzan solos en su viaje a lo largo del río Anduin, perseguidos por la sombra misteriosa de un ser extraño que también ambiciona la posesión del Anillo. Mientras, hombres, elfos y enanos se preparan para la batalla final contra las fuerzas del Señor del Mal', '408', '2023', 90, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (39, 5, 1, 14, 1, 'El Retorno del Rey', 'El Señor de los Anillos 3', 18979, 'el-retorno-del-rey.jpg','Los ejércitos del Señor Oscuro van extendiendo cada vez más su maléfica sombra por la Tierra Media. Hombres, elfos y enanos unen sus fuerzas para presentar batalla a Sauron y sus huestes. Ajenos a estos preparativos, Frodo y Sam siguen adentrándose en el país de Mordor en su heroico viaje para destruir el Anillo de Poder en las Grietas del Destino.', '520', '2022', 97, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (40, 7, 1, 9, 1, 'Flores en el Ático', 'Dollanganger 1', 19784, 'flores-en-el-atico.jpg','Corre el año 1957, y los Dollanganger parecen una familia perfecta que vive sin preocupaciones en su idílica casa de Gladstone, Pensilvania... hasta que la tragedia llama a su puerta. Ocurre el día en que Christopher, el patriarca de la familia, muere en un accidente. Su viuda, Corrine, debe hacer frente al peso de una gran deuda que no puede asumir. Su única opción: regresar a la mansión de sus acaudalados padres en busca de ayuda. Su madre, Olivia Foxworth, la acoge bajo la cruel condición de que los niños se escondan en el desván.', '480', '2015', 37, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (41, 2, 1, 10, 1, 'El Jardín de las Mariposas', 'El coleccionista 1', 11300, 'el-jardin-de-las-mariposas.jpg','Cerca de una aislada mansión existe un jardín donde se cultivan delicadas flores y en él, abrigada por frondosos árboles, habita una exquisita y peculiar colección de mariposas que es resguardadapor el Jardinero, un hombre que desconoce los límites de su obsesión por preservar la belleza. Maya es una sobreviviente del jardín y ahora tendrá que narrar a los agentes del FBI los horrores que vivió mientras permanecía en cautiverio junto con otras chicas que ni siquiera habían alcanzado la mayoría de edad. En su memoria viven las peores pesadillas. En su espalda, como en las de todas las jóvenes mariposas, un tatuaje le recordará por siempre un crimen imperdonable. Más escalofriante que El silencio de los inocentes. La belleza nunca había sido tan aterradora.', '288', '2020', 60, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (42, 2, 1, 10, 1, 'Las Rosas de Mayo', 'El coleccionista 2', 10540, 'las-rosas-de-mayo.jpg','En una antigua iglesia ha aparecido una joven con el cuello cercenado y el cuerpo rodeado de hermosas flores. Un retorcido ritual de violencia, belleza y castidad que el asesino cumple cada invierno con escalofriante puntualidad. La hermana de Priya fue una de esas víctimas y, desde entonces, ella y su madre viven condenadas a cambiar de ciudad constantemente: cuando se mudan a un nuevo lugar con la esperanza de poder empezar de cero, la llegada de un misterioso arreglo floral aparece como un mal presagio, recordándoles que la muerte las acecha y que Priya podría ser la siguiente víctima. Tras resolver el caso de El Jardín de las Mariposas, los detectives del FBI saben que deben emprender una desesperada carrera contra reloj para descubrir al asesino antes de que sea demasiado tarde y, aunque en ello Priya arriesgue su propia vida, es la única oportunidad para conseguirlo.', '296', '2021', 66, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (43, 2, 1, 10, 1, 'Los Niños del Verano', 'El coleccionista 3', 12990, 'los-niños-del-verano.jpg','Cuando la agente Mercedes Ramirez encuentra en la entrada de su casa a un niño golpeado, cubierto de sangre y aferrado a un oso de peluche, no se puede imaginar que ese brutal evento es solo la punta de un iceberg siniestro. El chico le cuenta que sus padres fueron asesinados por un ángel que luego lo llevó hasta su porche para que ella lo cuidara. Sin embargo, no se trató de cualquier asesinato, sino de uno especialmente atroz, más violento que cualquiera que la Unidad de Delitos contra Menores hubiera enfrentado antes. Pero esto es solo el inicio: un ángel vengador está suelto y dispuesto a impartir su justicia salvaje. Uno a uno más niños comienzan a llegar a la puerta de la agente con la misma historia de terror. Todos provienen de hogares violentos y despiertan en ella dolorosos recuerdos que amenazan con desestabilizar su carrera y tranquilidad. Mientras la investigación la arrastra hacia la oscuridad, su propio pasado la acecha para destruirla si no consigue atrapar al asesino pronto.', '312', '2020', 52, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (44, 2, 1, 10, 1, 'La Temporada de Niños Perdidos', 'El coleccionista 4', 13400, 'la-temporada-de-niños-perdidos.jpg','Una niña perdida muy cerca del cuartel general del FBI se convertirá en el inesperado vínculo que puede resolver una terrible tragedia del pasado. Brooklyn Mercer, de ocho años, fue vista por última vez cuando regresaba de la escuela y desde entonces no se sabe nada de ella. A pesar de que podría ser un caso más para los agentes del FBI Eliza Sterling y Brandon Eddison, entre más conocen los estremecedores detalles que envuelven el crimen, este se torna cada vez más indescifrable y complejo: primero, porque descubrirán que la desgracia de Brooklyn guarda asombrosas coincidencias con la desaparición de la hermana de Eddison décadas atrás; y segundo, porque la niña perdida es inquietantemente parecida a Eliza, tanto, que cualquiera diría que son madre e hija. Conforme avanza la investigación, averiguarán que Brooklyn no es la única niña perdida con características idénticas, sino que es solo la más reciente en una larga lista de raptos cometidos a través de los años por todo Estados Unidos. ', '336', '2021', 65, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (45, 5, 1, 1, 1, 'La Casa de las Sombras', null, 19800, 'la-casa-de-las-sombras.jpg','El último trabajo de Catherine terminó mal. El acoso corporativo en una de las principales cadenas de televisión hizo que la despidieran y la obligaran a abandonar Londres, pero estaba decidida a recuperar su vida. Un nuevo trabajo y algunos terapeutas más tarde, las cosas pintan mejor. Especialmente cuando se le presenta un proyecto desafiante: catalogar el alijo salvajemente excéntrico de muñecas y títeres antiguos del difunto M. H. Mason. Lo más raro de todo es que podrá examinar sus elaboradas exhibiciones de animales disecados y disfrazados, que representan escenas sangrientas de la Gran Guerra. Catherine no puede creerse su suerte cuando la anciana sobrina de Mason la invita a quedarse en Red House, donde mantiene la colección hasta que su sobrina la expone al oscuro mensaje de detrás del "Arte" de su tío. Catherine intenta concentrarse en el trabajo, pero las visiones de Mason comienzan a generar sombras oscuras de su propio pasado. Sombras que esperaba que la terapia finalmente hubiera borrado. Pronto, las barreras entre la realidad, la cordura y la memoria comienzan a fusionarse y algunas verdades parecen demasiado terribles para ser reales...', '352', '2023', 70, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (46, 11, 1, 1, 1, 'La Maquina del Tiempo', null , 9330, 'la-maquina-del-tiempo.jpg','Cuando Herbert George Wells creó su ingeniosa máquina del tiempo, no se limitó a trasladar a su inventor al año 802701 para contemplar un Londres totalmente cambiado, una raza humana degenerada, una civilización en ruinas, producto de un progreso científico incontrolado... Influido por el socialismo utópico, Wells hace en esta obra una lúcida sátira de la sociedad capitalista de su tiempo, además de trasladar sus inquietudes científicas y de plantear una reflexión, plenamente actual, sobre la responsabilidad del ser humano respecto al futuro.', '126', '2015', 67, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (47, 2, 1, 1, 1, 'Hasta que nos quedemos sin estrellas', null, 15990, 'hasta-que-nos-quedemos-sin-estrellas.jpg','No tengo ni idea de lo que es el amor. Creo que nunca antes lo había sentido. Lo único que tengo claro es que, cada vez que pienso en eso, eres tú quien se me viene a la cabeza».Maia. Liam. La historia de cómo dos astros colisionanLiam ha perdido su pasión por YouTube. Está metido en una relación falsa que ha tenido un resultado catastrófico: se ha enamorado de la chica, Michelle, y ahora ella sale a escondidas con su mejor amigo.Maia tiene pesadillas desde la noche del accidente. Todos los días va al hospital a visitar a una estrella cuya luz se tambalea.Un cumpleaños caótico. Una botella de vodka y un youtuber borracho que acaba durmiendo en el coche de una desconocida.¿Qué mejor combinación para conseguir que dos astros colisionen?', '552', '2022', 98, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (48, 1, 1, 14, 1, 'La Piedra Filosofal', 'Harry Potter 1', 12700, 'la-piedra-filosofal.jpg','Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Se siente muy triste y solo; hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el colegio interno Hogwarts de magia y hechicería. A partir de ese momento, la suerte de Harry da un vuelco espectacular. En esa escuela tan especial aprenderá encantamientos; trucos fabulosos y tácticas de defensa contra las malas artes. Se convertirá en el campeón escolar de quidditch, especie de fútbol aéreo que se juega montado sobre escobas; y hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Pero, sobre todo, conocerá los secretos que le permitirán cumplir con su destino. Pues, aunque no lo parezca a primera vista, Harry no es un chico común y corriente. ¡Es un verdadero mago!', '264', '2016', 198, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (49, 1, 1, 14, 1, 'La Camara de los Secretos', 'Harry Potter 2', 13200, 'la-camara-de-los-secretos.jpg','Tras derrotar una vez más a lord Voldemort, su siniestro enemigo en Harry Potter y la piedra filosofal, Harry espera impacientemente en casa de sus insoportables tíos el inicio del segundo curso del Colegio Hogwarts de Magia y Hechicería. Sin embargo, la espera dura poco, pues un elfo aparece en su habitación y le advierte que una amenaza mortal se cierne sobre la escuela. Así pues, Harry no se lo piensa dos veces y, acompañado de Ron, su mejor amigo, se dirige a Hogwarts en un coche volador. Pero ¿puede un aprendiz de mago defender la escuela de los malvados que pretenden destruirla? Sin saber que alguien ha abierto la Cámara de los Secretos, dejando escapar una serie de monstruos peligrosos, Harry y sus amigos Ron y Hermione tendrán que enfrentarse con arañas gigantes, serpientes encantadas, fantasmas enfurecidos y, sobre todo, con la mismísima reencarnación de su más temible adversario', '287', '2016', 128, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (50, 1, 1, 14, 1, 'El Prisionero de Azkaban', 'Harry Potter 3', 13990, 'el-prisionero-de-azkaban.jpg','Harry aguarda con impaciencia el inicio del tercer curso en el Colegio Hogwarts de Magia y Hechicería. Tras haber cumplido trece años; solo y lejos de sus amigos de Hogwarts; Harry se pelea con su bigotuda tía Marge; a la que convierte en globo; y debe huir en un autobús mágico. Mientras tanto; de la prisión de Azkaban se ha escapado un terrible villano; Sirius Black; un asesino en serie con poderes mágicos que fue cómplice de lord Voldemort y que parece dispuesto a eliminar a Harry del mapa. Y por si esto fuera poco; Harry debe enfrentarse también a unos terribles monstruos; los dementores; seres abominables capaces de robarles la felicidad a los magos y de borrar todo recuerdo hermoso de aquellos que osan mirarlos. Lo que ninguno de estos malvados personajes sabe es que Harry; con la ayuda de sus fieles amigos Ron y Hermione; es capaz de todo y mucho más', '384', '2016', 138, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (51, 1, 1, 14, 1, 'El Caliz de Fuego', 'Harry Potter 4', 14880, 'el-caliz-de-fuego.jpg','Tras otro abominable verano con los Dursley, Harry se dispone a iniciar el cuarto curso en Hogwarts, la famosa escuela de magia y hechicería. A sus catorce años, a Harry le gustaría ser un joven mago como los demás y dedicarse a aprender nuevos sortilegios, encontrarse con sus amigos Ron y Hermione y asistir con ellos a los Mundiales de quidditch. Sin embargo, al llegar al colegio le espera una gran sorpresa que lo obligará a enfrentarse a los desafíos más temibles de toda su vida. Si logra superarlos, habrá demostrado que ya no es un niño y que está preparado para vivir las nuevas y emocionantes experiencias que el futuro le depara.', '672', '2016', 176, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (52, 1, 1, 14, 1, 'La Orden del Fénix', 'Harry Potter 5', 14970, 'la-orden-del-fenix.jpg','Las tediosas vacaciones de verano en casa de sus tíos todavía no han acabado y Harry se encuentra más inquieto que nunca. Apenas ha tenido noticias de Ron y Hermione, y presiente que algo extraño está sucediendo en Hogwarts.En efecto, cuando por fin comienza otro curso en el famoso colegio de magia y hechicería, sus temores se vuelven realidad. El Ministerio de Magia niega que Voldemort haya regresado y ha iniciado una campaña de desprestigio contra Harry y Dumbledore, para lo cual ha asignado a la horrible profesora Dolores Umbridge la tarea de vigilar todos sus movimientos.Así pues, además de sentirse solo e incomprendido, Harry sospecha que Voldemort puede adivinar sus pensamientos, e intuye que el temible mago trata de apoderarse de un objeto secreto que le permitiría recuperar su poder destructivo.', '928', '2016', 98, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (53, 1, 1, 14, 1, 'El Misterio del Principe', 'Harry Potter 6', 15200, 'el misterio-del-principe.jpg','Con dieciséis años cumplidos, Harry inicia el sexto curso en Hogwarts en medio de terribles acontecimientos que asolan Inglaterra. Elegido capitán del equipo de quidditch, los ensayos, los exámenes y las chicas ocupan todo su tiempo, pero la tranquilidad dura poco.A pesar de los férreos controles de seguridad que protegen la escuela, dos alumnos son brutalmente atacados. Dumbledore sabe que se acerca el momento, anunciado por la Profecía, en que Harry y Voldemort se enfrentarán a muerte: «El único con poder para vencer al Señor Tenebroso se acerca... Uno de los dos debe morir a manos del otro, pues ninguno de los dos podrá vivir mientras siga el otro con vida.»El anciano director solicitará la ayuda de Harry y juntos emprenderán peligrosos viajes para intentar debilitar al enemigo, para lo cual el joven mago contará con un viejo libro de pociones perteneciente a un misterioso personaje, alguien que se hace llamar Príncipe Mestizo.', '576', '2016', 128, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (54, 1, 1, 14, 1, 'Las Reliquias de la Muerte', 'Harry Potter 7', 17820, 'las-reliquias-de-la-muerte.jpg','La fecha crucial se acerca. Cuando cumpla los diecisiete; Harry perderá el encantamiento protector que lo mantiene a salvo. El anunciado combate a muerte con Voldemort es inminente; y la casi imposible misión de encontrar y destruir los Horrocruxes restantes es más urgente que nunca. Ha llegado el momento de tomar las decisiones más difíciles. Harry debe abandonar la calidez y seguridad de La Madriguera para emprender sin miedo ni vacilaciones el inexorable sendero trazado para él. Consciente de lo mucho que está en juego; solo dentro de sí mismo encontrará la fuerza que lo impulsará en la vertiginosa carrera hacia un destino desconocido.', '704', '2016', 197, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (55, 12, 1, 7, 1, 'Heartstopper 1', 'Chico conoce a Chico', 10500, 'heartstoppers-1.jpg','Charlie y Nick van al mismo colegio, aunque nunca se haban cruzado hasta el día en que los hacen sentarse juntos en su grupo de estudio. Muy pronto se vuelven amigos y más pronto aún Charlie comienza a sentir cosas por Nick... aunque sabe que es un imposible. Pero el amor obra de formas inesperadas, y Nick está más interesado en Charlie de lo que ninguno de los dos puede llegar a creer.', '296', '2020', 120, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (56, 12, 1, 7, 1, 'Heartstopper 2', 'Mi Persona Favorita', 10430, 'heartstoppers-2.jpg','Después de lanzarse a besar a Nick, Charlie cree que todo se ha acabado, pero... ¿es así? Heartstopper responde a la manera de sentir de los jóvenes reales, con una visión abierta, natural y sensible sobre el amor y la identidad sexual, sin perder nunca la delicadeza y la emoción.', '328', '2023', 129, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (57, 12, 1, 7, 1, 'Heartstopper 3', 'Un Paso Adelante', 10434, 'heartstoppers-3.jpg','El colegio organiza una excursión a París! Nick y Charlie van a aprovechar su visita a la ciudad del amor para contarles a sus compañeros sobre su relación; pero ¿se animarán? Charlie tiene terror de que Nick sufra el mismo bullying que le hicieron a él un año atrás al salir del armario. Y Nick está preocupado porque sospecha que algo le ocurre a Charlie y no sabe qué hacer. ¿Es normal que coma tan poco? ¿Debería hablar con él? Mientras tanto; Tao y Elle tendrán que hacerle frente a sus sentimientos; y Tara y Darcy van a contar su historia de amor para que Nick y Charlie se animen a compartir la suya con el mundo.', '384', '2023', 120, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (58, 12, 1, 7, 1, 'Heartstopper 4', 'Mas Que Palabras', 10439, 'heartstoppers-4.jpg','Pensar que Charlie creía que jamás podría gustarle a Nick y ahora no solo son novios, sino que Charlie cree estar listo para declararle su amor. Y Nick siente lo mismo, pero... tiene tantas cosas en la cabeza. Salir del clóset con su papá y el hecho de que Charlie quizá tenga un desorden alimenticio. Cuando el verano se vuelva otoño y un nuevo año escolar comience, Nick y Charlie aprenderán lo que significa realmente amar.', '341', '2021', 129, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (59, 12, 1, 7, 1, 'Heartstopper 5', 'Creciendo Contigo', 10580, 'heartstoppers-5.jpg','Nick y Charlie están más enamorados que nunca y dan un paso muy importante en su relación. Mientras tanto, Nick empieza a visitar universidades para el próximo año, entonces una duda se instala en su cabeza: ¿será capaz de vivir sin Charlie? ¿Soportarán una relación a distancia?', '336', '2023', 190, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');

INSERT INTO product(id_product, id_editorial, id_language, id_collection, id_support, title, subtitle, price, image, description, pages, edition, stock, discount, created, updated)
VALUES (60, 13, 1, 1, 1, 'La Hipotesis del Amor', Null, 17820, 'la-hipotesis-del-amor.jpg','Olive Smith es una doctora que no cree en las relaciones amorosas duraderas, pero su mejor amiga, Ahn, sí. A Ahn le gusta el exnovio de Olive. Convencerla de que ha pasado página no va a resultarle fácil a Olive. Por eso, besa al primer hombre con el que se encuentra para que Ahn la vea. Ese hombre es Adam Carlsen, un joven profesor tan reputado por la calidad de su trabajo como por su imbecilidad. Así que Olive se queda de piedra cuando Carlsen accede a mantener su farsa y ser su novio falso. La novela romántica más esperada del año!', '488', '2020', 120, 0, '2024-02-13 10:00:00', '2024-02-13 10:00:00');



#select * from product;
#DELETE FROM PRODUCT WHERE ID_PRODUCT = 1;

###datos de roles
INSERT INTO rol(id_rol, name)
VALUES (1, 'admin');
INSERT INTO rol(id_rol, name)
VALUES (2, 'usuario');



### datos de usuarios 
# PASSWORD tiene que ser de 500
  INSERT INTO user_person(id_user, id_rol, id_fav, name, last_name, name_user, email, password, image)
VALUES (1, 1, 1, 'grego', 'nava', 'gregodh', 'gregonavarrete30@gmail.com', '$2a$10$obMzpsGjB0ylI2WL726oReep1IuZ4iU4TZjp58rQPH2t6YQy3AyM.', 'defecto.png');
    INSERT INTO user_person(id_user, id_rol, id_fav, name, last_name, name_user, email, password, image)
VALUES (2, 1, 1, 'Malú', 'Ortega', 'malu27', 'marialourdesortega.27@gmail.com', '$2a$10$2GxXy0Ii/Au0YfjocZ9hAe9XtHlEDTRYe.hi9lww71dYEM1NydPDa', 'defecto.png');
  INSERT INTO user_person(id_user, id_rol, id_fav, name, last_name, name_user, email, password, image)
VALUES (3, 2, 1, 'Señor', 'Pato', 'patito', 'señorpato123gmail.com', '$2a$10$VMld5GWezc10l5zaGi9zO.DRdrPLEahu.ALb/fOS4tGQkN/4T2Cvy', 'patito.jpg');
 ## select * from user_person;

#######Tablade los generos de libros
INSERT INTO genre(id_genre, name, image)
VALUES (1, 'Ficcion', 'ficcion.png');  
INSERT INTO genre(id_genre, name, image)
VALUES (2, 'No Ficcion', 'no-ficcion.png'); 
INSERT INTO genre(id_genre, name, image)
VALUES (3, 'Clasicos', 'clasicos.png');
INSERT INTO genre(id_genre, name, image)
VALUES (4, 'Terror', 'terror.png');
INSERT INTO genre(id_genre, name, image)
VALUES (5, 'Aventura', 'aventura.png');
INSERT INTO genre(id_genre, name, image)
VALUES (6, 'Fantasia', 'fantasia.png');
INSERT INTO genre(id_genre, name, image)
VALUES (7, 'Romance', 'romance.png');
INSERT INTO genre(id_genre, name, image)
VALUES (8, 'Misterio', 'misterio.png');
INSERT INTO genre(id_genre, name, image)
VALUES (9, 'Best Seller', 'best-seller.png');  
INSERT INTO genre(id_genre, name, image)
VALUES (10, 'Poesía', 'poesia.png');  
INSERT INTO genre(id_genre, name, image)
VALUES (11, 'Suspenso', 'suspenso.png');  
INSERT INTO genre(id_genre, name, image)
VALUES (12, 'Ciencia Ficcion', 'ciencia-ficcion.png'); 
INSERT INTO genre(id_genre, name, image) 
VALUES (13, 'Infantil', 'infantil.png');  
INSERT INTO genre(id_genre, name, image)
VALUES (14, 'Juvenil', 'juvenil.png'); 
  
  
####### tabla de los comentarios  

INSERT INTO comment(id_comment, id_product, id_user, description, publication_date, star)
VALUES (1, 1, 1, 'yo leí el principito y me encanto la analogía de la rosa  <3', '2024-01-29 10:00:00', 5);
INSERT INTO comment(id_comment, id_product, id_user, description, publication_date, star)
VALUES (2, 1, 2, 'El principito es mi infancia amo mucho este libro vale la pena', '2024-01-29 10:00:00', 5);
INSERT INTO comment(id_comment, id_product, id_user, description, publication_date, star)
VALUES (3, 2, 3, 'Estoy ansioso de leerlo esperen uns reseña pronto', '2024-01-29 10:00:00', 5);
INSERT INTO comment(id_comment, id_product, id_user, description, publication_date, star)
VALUES (4, 2, 1, 'Romantica y desgarradora lo mejor para leer en un dia de lluvia', '2024-01-29 10:00:00', 4);
INSERT INTO comment(id_comment, id_product, id_user, description, publication_date, star)
VALUES (5, 3, 2, 'Me tuvo pegada hasta la ultima pagina, no podia dejar de leerlo', '2024-01-29 10:00:00', 5);
INSERT INTO comment(id_comment, id_product, id_user, description, publication_date, star)
VALUES (6, 3, 1, 'No creo que sea lo mejor de la autora, pero no es tan malo', '2024-01-29 10:00:00', 3);
INSERT INTO comment(id_comment, id_product, id_user, description, publication_date, star)
VALUES (7, 4, 2, 'Una segunda parte totalmente inecesaria', '2024-01-29 10:00:00', 2);
INSERT INTO comment(id_comment, id_product, id_user, description, publication_date, star)
VALUES (8, 5, 1, 'Me gusta como el autor logra que vuelva a tener 12 años.Todos somos percy', '2024-01-29 10:00:00', 5);

  
####### tabla del carrito de compra (comienza vacio)
#INSERT INTO SHOPPING_CART( ID, ID_USER, CANT)
#   VALUES ( <BIGINT> , <BIGINT> , <BIGINT> );


######################################## tablas intermedias 

### tabla n:n
#un libro puede estar en varios carritos de diferentes usuarios
#un carrito tiene varios libros 
#INSERT INTO PRODUCT_CARRITO( ID, ID_PRODUCT)
#  VALUES ( <BIGINT> , <BIGINT> );


### tabla (n:n, un libro puede tener varios autores y un autor escribir varios libros)
INSERT INTO product_author(id_author, id_product)
VALUES (1, 1);
INSERT INTO product_author(id_author, id_product)
VALUES (2, 2);
INSERT INTO product_author(id_author, id_product)
VALUES (2, 3);  
INSERT INTO product_author(id_author, id_product)
VALUES (2, 4);
INSERT INTO product_author(id_author, id_product)
VALUES (3, 5);
INSERT INTO product_author(id_author, id_product)
VALUES (3, 6);
INSERT INTO product_author(id_author, id_product)
VALUES (3, 7);
INSERT INTO product_author(id_author, id_product)
VALUES (3, 8);
INSERT INTO product_author(id_author, id_product)
VALUES (3, 9);
INSERT INTO product_author(id_author, id_product)
VALUES (3, 10);
INSERT INTO product_author(id_author, id_product)
VALUES (3, 11);
INSERT INTO product_author(id_author, id_product)
VALUES (3, 12);
INSERT INTO product_author(id_author, id_product)
VALUES (3, 13);
INSERT INTO product_author(id_author, id_product)
VALUES (3, 14);
INSERT INTO product_author(id_author, id_product)
VALUES (4, 15);
INSERT INTO product_author(id_author, id_product)
VALUES (4, 16);
INSERT INTO product_author(id_author, id_product)
VALUES (4, 17);
INSERT INTO product_author(id_author, id_product)
VALUES (4, 18);
INSERT INTO product_author(id_author, id_product)
VALUES (5, 19);
INSERT INTO product_author(id_author, id_product)
VALUES (5, 20);
INSERT INTO product_author(id_author, id_product)
VALUES (5, 21);
INSERT INTO product_author(id_author, id_product)
VALUES (5, 22);
INSERT INTO product_author(id_author, id_product)
VALUES (5, 23);
INSERT INTO product_author(id_author, id_product)
VALUES (5, 24);
INSERT INTO product_author(id_author, id_product)
VALUES (5, 25);
INSERT INTO product_author(id_author, id_product)
VALUES (5, 26);
INSERT INTO product_author(id_author, id_product)
VALUES (5, 27);
INSERT INTO product_author(id_author, id_product)
VALUES (6, 28);
INSERT INTO product_author(id_author, id_product)
VALUES (6, 29);
INSERT INTO product_author(id_author, id_product)
VALUES (6, 30);
INSERT INTO product_author(id_author, id_product)
VALUES (6, 31);
INSERT INTO product_author(id_author, id_product)
VALUES (7, 32);
INSERT INTO product_author(id_author, id_product)
VALUES (8, 33);
INSERT INTO product_author(id_author, id_product)
VALUES (8, 34);
INSERT INTO product_author(id_author, id_product)
VALUES (8, 35);
INSERT INTO product_author(id_author, id_product)
VALUES (8, 36);
INSERT INTO product_author(id_author, id_product)
VALUES (9, 37);
INSERT INTO product_author(id_author, id_product)
VALUES (9, 38);
INSERT INTO product_author(id_author, id_product)
VALUES (9, 39);
INSERT INTO product_author(id_author, id_product)
VALUES (12, 40);
INSERT INTO product_author(id_author, id_product)
VALUES (13, 41);
INSERT INTO product_author(id_author, id_product)
VALUES (13, 42);
INSERT INTO product_author(id_author, id_product)
VALUES (13, 43);
INSERT INTO product_author(id_author, id_product)
VALUES (13, 44);
INSERT INTO product_author(id_author, id_product)
VALUES (14, 45);
INSERT INTO product_author(id_author, id_product)
VALUES (15, 46);
INSERT INTO product_author(id_author, id_product)
VALUES (16, 47);
INSERT INTO product_author(id_author, id_product)
VALUES (17, 48);
INSERT INTO product_author(id_author, id_product)
VALUES (17, 49);
INSERT INTO product_author(id_author, id_product)
VALUES (17, 50);
INSERT INTO product_author(id_author, id_product)
VALUES (17, 51);
INSERT INTO product_author(id_author, id_product)
VALUES (17, 52);
INSERT INTO product_author(id_author, id_product)
VALUES (17, 53);
INSERT INTO product_author(id_author, id_product)
VALUES (17, 54);
INSERT INTO product_author(id_author, id_product)
VALUES (10, 55);
INSERT INTO product_author(id_author, id_product)
VALUES (10, 56);
INSERT INTO product_author(id_author, id_product)
VALUES (10, 57);
INSERT INTO product_author(id_author, id_product)
VALUES (10, 58);
INSERT INTO product_author(id_author, id_product)
VALUES (10, 59);
INSERT INTO product_author(id_author, id_product)
VALUES (18, 60);




### tabla (n:n)
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 1);
INSERT INTO product_genre(id_genre, id_product)
VALUES (3, 1);
INSERT INTO product_genre(id_genre, id_product)
VALUES (9, 1);
INSERT INTO product_genre(id_genre, id_product)
VALUES (13, 1);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 2);
INSERT INTO product_genre(id_genre, id_product)
VALUES (7, 2);
INSERT INTO product_genre(id_genre, id_product)
VALUES (9, 2);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 2);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 3);
INSERT INTO product_genre(id_genre, id_product)
VALUES (11, 3);
INSERT INTO product_genre(id_genre, id_product)
VALUES (8, 3);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 3);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 4);
INSERT INTO product_genre(id_genre, id_product)
VALUES (7, 4);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 4);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 5);
INSERT INTO product_genre(id_genre, id_product)
VALUES (5, 5);
INSERT INTO product_genre(id_genre, id_product)
VALUES (13, 5);
INSERT INTO product_genre(id_genre, id_product)
VALUES (9, 5);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 5);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 6);
INSERT INTO product_genre(id_genre, id_product)
VALUES (5, 6);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 6);
INSERT INTO product_genre(id_genre, id_product)
VALUES (13, 6);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 7);
INSERT INTO product_genre(id_genre, id_product)
VALUES (5, 7);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 7);
INSERT INTO product_genre(id_genre, id_product)
VALUES (13, 7);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 8);
INSERT INTO product_genre(id_genre, id_product)
VALUES (5, 8);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 8);
INSERT INTO product_genre(id_genre, id_product)
VALUES (13, 8);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 9);
INSERT INTO product_genre(id_genre, id_product)
VALUES (5, 9);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 9);
INSERT INTO product_genre(id_genre, id_product)
VALUES (13, 9);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 10);
INSERT INTO product_genre(id_genre, id_product)
VALUES (5, 10);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 10);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 10);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 11);
INSERT INTO product_genre(id_genre, id_product)
VALUES (5, 11);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 11);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 11);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 12);
INSERT INTO product_genre(id_genre, id_product)
VALUES (5, 12);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 12);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 12);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 13);
INSERT INTO product_genre(id_genre, id_product)
VALUES (5, 13);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 13);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 13);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 14);
INSERT INTO product_genre(id_genre, id_product)
VALUES (5, 14);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 14);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 14);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 15);
INSERT INTO product_genre(id_genre, id_product)
VALUES (9, 15);
INSERT INTO product_genre(id_genre, id_product)
VALUES (12, 15);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 15);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 16);
INSERT INTO product_genre(id_genre, id_product)
VALUES (12, 16);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 16);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 17);
INSERT INTO product_genre(id_genre, id_product)
VALUES (12, 17);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 17);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 18);
INSERT INTO product_genre(id_genre, id_product)
VALUES (12, 18);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 18);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 19);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 19);
INSERT INTO product_genre(id_genre, id_product)
VALUES (9, 19);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 19);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 20);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 20);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 20);


INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 21);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 21);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 21);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 22);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 22);
INSERT INTO product_genre(id_genre, id_product)
VALUES (9, 22);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 22);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 23);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 23);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 23);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 24);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 24);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 24);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 25);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 25);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 25);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 26);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 26);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 26);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 27);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 27);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 27);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 28);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 28);
INSERT INTO product_genre(id_genre, id_product)
VALUES (7, 28);
INSERT INTO product_genre(id_genre, id_product)
VALUES (9, 28);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 28);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 28);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 29);
INSERT INTO product_genre(id_genre, id_product)
VALUES (7, 29);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 29);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 30);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 30);
INSERT INTO product_genre(id_genre, id_product)
VALUES (7, 30);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 30);

INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 31);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 31);
INSERT INTO product_genre(id_genre, id_product)
VALUES (7, 31);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 31);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 32);
INSERT INTO product_genre(id_genre, id_product)
VALUES (3, 32);
INSERT INTO product_genre(id_genre, id_product)
VALUES (9, 32);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 33);
INSERT INTO product_genre(id_genre, id_product)
VALUES (3, 33);
INSERT INTO product_genre(id_genre, id_product)
VALUES (7, 33);
INSERT INTO product_genre(id_genre, id_product)
VALUES (9, 33);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 34);
INSERT INTO product_genre(id_genre, id_product)
VALUES (3, 34);
INSERT INTO product_genre(id_genre, id_product)
VALUES (7, 34);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 35);
INSERT INTO product_genre(id_genre, id_product)
VALUES (3, 35);
INSERT INTO product_genre(id_genre, id_product)
VALUES (7, 35);
INSERT INTO product_genre(id_genre, id_product)
VALUES (9, 35);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 36);
INSERT INTO product_genre(id_genre, id_product)
VALUES (3, 36);
INSERT INTO product_genre(id_genre, id_product)
VALUES (7, 36);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 37);
INSERT INTO product_genre(id_genre, id_product)
VALUES (5, 37);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 37);
INSERT INTO product_genre(id_genre, id_product)
VALUES (9, 37);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 38);
INSERT INTO product_genre(id_genre, id_product)
VALUES (5, 38);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 38);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 39);
INSERT INTO product_genre(id_genre, id_product)
VALUES (5, 39);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6, 39);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 40);
INSERT INTO product_genre(id_genre, id_product)
VALUES (11, 40);
INSERT INTO product_genre(id_genre, id_product)
VALUES (4, 40);
INSERT INTO product_genre(id_genre, id_product)
VALUES (9, 40);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 41);
INSERT INTO product_genre(id_genre, id_product)
VALUES (11, 41);
INSERT INTO product_genre(id_genre, id_product)
VALUES (4, 41);
INSERT INTO product_genre(id_genre, id_product)
VALUES (8, 41);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 42);
INSERT INTO product_genre(id_genre, id_product)
VALUES (11, 42);
INSERT INTO product_genre(id_genre, id_product)
VALUES (4, 42);
INSERT INTO product_genre(id_genre, id_product)
VALUES (8, 42);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 43);
INSERT INTO product_genre(id_genre, id_product)
VALUES (11, 43);
INSERT INTO product_genre(id_genre, id_product)
VALUES (4, 43);
INSERT INTO product_genre(id_genre, id_product)
VALUES (8, 43);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 44);
INSERT INTO product_genre(id_genre, id_product)
VALUES (11, 44);
INSERT INTO product_genre(id_genre, id_product)
VALUES (4, 44);
INSERT INTO product_genre(id_genre, id_product)
VALUES (8, 44);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 45);
INSERT INTO product_genre(id_genre, id_product)
VALUES (11, 45);
INSERT INTO product_genre(id_genre, id_product)
VALUES (4, 45);
INSERT INTO product_genre(id_genre, id_product)
VALUES (8, 45);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 46);
INSERT INTO product_genre(id_genre, id_product)
VALUES (12, 46);
INSERT INTO product_genre(id_genre, id_product)
VALUES (9, 46);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 47);
INSERT INTO product_genre(id_genre, id_product)
VALUES (7, 47);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 47);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 48);
INSERT INTO product_genre(id_genre, id_product)
VALUES (5,48);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6,48);
INSERT INTO product_genre(id_genre, id_product)
VALUES (9,48);
INSERT INTO product_genre(id_genre, id_product)
VALUES (13,48);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 49);
INSERT INTO product_genre(id_genre, id_product)
VALUES (5,49);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6,49);
INSERT INTO product_genre(id_genre, id_product)
VALUES (13,49);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 50);
INSERT INTO product_genre(id_genre, id_product)
VALUES (5,50);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6,50);
INSERT INTO product_genre(id_genre, id_product)
VALUES (13,50);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 51);
INSERT INTO product_genre(id_genre, id_product)
VALUES (5,51);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6,51);
INSERT INTO product_genre(id_genre, id_product)
VALUES (13,51);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 52);
INSERT INTO product_genre(id_genre, id_product)
VALUES (5,52);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6,52);
INSERT INTO product_genre(id_genre, id_product)
VALUES (13,52);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 53);
INSERT INTO product_genre(id_genre, id_product)
VALUES (5,53);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6,53);
INSERT INTO product_genre(id_genre, id_product)
VALUES (13,53);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 54);
INSERT INTO product_genre(id_genre, id_product)
VALUES (5,54);
INSERT INTO product_genre(id_genre, id_product)
VALUES (6,54);
INSERT INTO product_genre(id_genre, id_product)
VALUES (13,54);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 55);
INSERT INTO product_genre(id_genre, id_product)
VALUES (7, 55);
INSERT INTO product_genre(id_genre, id_product)
VALUES (9, 55);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 55);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 56);
INSERT INTO product_genre(id_genre, id_product)
VALUES (7, 56);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 56);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 57);
INSERT INTO product_genre(id_genre, id_product)
VALUES (7, 57);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 57);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 58);
INSERT INTO product_genre(id_genre, id_product)
VALUES (7, 58);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 58);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 59);
INSERT INTO product_genre(id_genre, id_product)
VALUES (7, 59);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 59);
INSERT INTO product_genre(id_genre, id_product)
VALUES (1, 60);
INSERT INTO product_genre(id_genre, id_product)
VALUES (7, 60);
INSERT INTO product_genre(id_genre, id_product)
VALUES (9, 60);
INSERT INTO product_genre(id_genre, id_product)
VALUES (14, 60);









  
### tabla n:n
#un lista de favoritos, tiene libros
#varios libros pueden estar en varias listas 
#ejemplo grego tiene como favorito a 2 libros
INSERT INTO PRODUCT_FAVORITES( ID_FAV, ID_PRODUCT)
  VALUES ( 1 , 1 );
  INSERT INTO PRODUCT_FAVORITES( ID_FAV, ID_PRODUCT)
  VALUES ( 1 , 2 );



## y esto ?????


  INSERT INTO user_product ( ID, ID_PRODUCT, ID_USER, CANT) VALUES ( 1 , 2 , 1, 10);
  INSERT INTO user_product ( ID, ID_PRODUCT, ID_USER, CANT) VALUES ( 2 , 1 , 1, 20);
  INSERT INTO user_product ( ID, ID_PRODUCT, ID_USER, CANT) VALUES ( 3 , 1 , 2, 40);
