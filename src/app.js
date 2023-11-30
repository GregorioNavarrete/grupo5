
const   express= require('express');// esto no regresaria todas las funcionalidades de expres 
const indexRouter = require ('./routes/index.routes')
//necesitamos al modulo "path" para hacer una ruta absoluta 
const path=require('path');

//en "app" almacenamos la ejecucion express,para luego usar sus metodos
const   app=express();



  
const puerto = 3000;



app.listen(puerto, () => {
  console.log(`Levantando un servidor con Express en el puerto ${puerto}`);
});

// Define una ruta de ejemplo
// usamos el sendfild, para mandar un archivo html


//queremos la carpeta "public" como un recurso estatico, para consumirlo de manera sencilla
// el metodo .resolve , nos permite dar una ruta absoluta 

app.use(express.static('public'));

  
   

  /* aqui definimos el motor de plantilla que vamos a usar */
  app.set('view engine','ejs')

  app.set('views', path.join(__dirname, '/views'))

  app.use('/', indexRouter);
  


  