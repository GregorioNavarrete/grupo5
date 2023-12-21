

const  express = require('express');
// Este enrutador contendrá las rutas para manejar las solicitudes HTTP para la raíz del sitio web
const indexRouter = require ('./routes/index.routes');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
//necesitamos al modulo "path" para hacer una ruta absoluta 
const path=require('path');

const app=express();//instancia de la aplicación express



const puerto = 3000;
app.listen(puerto, () => {
  console.log(`Levantando un servidor con Express en el puerto ${puerto}`);
});

app.use(express.static('public'));

// **********Template Engine

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

  

//**********funciones que se ejecutan durante el ciclo de vida de la solicitud

//express.urlencoded y express.json: Parsean datos de formularios y solicitudes JSON.
app.use(express.urlencoded({ extended: false }));
//methodOverride: Permite usar los métodos PUT y DELETE en formularios HTML.
app.use(methodOverride('_method'));


 //Se especifica que las rutas definidas en el enrutador indexRouter se usarán
 // para cualquier solicitud que llegue a la raíz del sitio web ('/').
app.use('/', indexRouter);


//se exportaba ???
//module.exports = app; 