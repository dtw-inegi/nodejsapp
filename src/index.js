//const express = require('express'); //FORMA COMMON JS
import express from 'express'; //FORMA ECMA SCRIPT, NUEVA
import indexRoutes from './routes/index.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url)); //Ruta absoluta, __ Indica algo interno de la app

//console.log(join(__dirname, 'views'));
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs'); //Motor de plantillas, nos permite extender el html y añadir lógica de programación, html con caracteristicas extras
app.use(indexRoutes);
app.use(express.static(join(__dirname, 'public')));
app.listen(PORT, () => {
  console.log(`Server is running on port: `, PORT);
});