
feature/sistema/malu
const   express= require('express');
const indexRouter = require ('./routes/index.routes');

const app=express();
const puerto = 3000;

app.listen(puerto, () => {
  console.log(`Levantando un servidor con Express en el puerto ${puerto}`);
});

app.use(express.static('public'));


app.set('view engine', 'ejs');


app.set('views', path.join(__dirname, '/views'));

app.use('/', indexRouter);
  


  