const express = require('express');
const cors = require('cors');
require('dotenv').config();


//?------Crear el servidor/aplicacion de express---------
const app = express();


//!DIRECTORIO PUBLICO
app.use(express.static('public'))


//!CORS
app.use( cors() );


//!LECTURA  PARSEO DEL BODY
app.use(express.json())


//!RUTAS
app.use('/api/auth', require('./routes/auth'))


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
})