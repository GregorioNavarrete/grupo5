
const   express= require('express');
const indexRouter = require ('./routes/index.routes');
const path=require('path');


const app=express();
const puerto = 3000;

app.listen(puerto, () => {
  console.log(`Levantando un servidor con Express en el puerto ${puerto}`);
});

app.use(express.static('public'));


  /* aqui definimos el motor de plantilla que vamos a usar */
  app.set('view engine','ejs')

  app.set('views', path.join(__dirname, '/views'))

  app.use('/', indexRouter);
  


  