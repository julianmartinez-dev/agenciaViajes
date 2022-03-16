import express from 'express';
import router from './routes/index.js';

const app = express();

//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug')

//Crear un middleware para obtener fecha
app.use( (req,res,next) =>{
    
    const year = new Date();
    res.locals.actualYear = year.getFullYear();

    next()
})

//Definir la carpeta public
app.use(express.static('public'))

//Agregar router
app.use('/', router)

app.listen(port, () =>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})