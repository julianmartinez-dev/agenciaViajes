import express from 'express';
import router from './routes/index.js';
import db from './config/db.js'
import  dotenv  from 'dotenv';

const app = express();

//Conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch( () => console.error(error))

//Definir puerto
const port = process.env.PORT || 4000;
const host = process.env.HOST || '0.0.0.0';

//Habilitar PUG
app.set('view engine', 'pug')

//Crear un middleware para obtener fecha
app.use( (req,res,next) =>{
    
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    next()
})

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}))

//Definir la carpeta public
app.use(express.static('public'))

//Agregar router
app.use('/', router)

app.listen(port,host, () =>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})