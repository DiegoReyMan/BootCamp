const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// const productValidator = require ...

/************** MIDDLEWARES GLOBALES **************/
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


/************** ARRAY DE PRODUCTOS **************/
const productos = [{ nombre: "Notebook", precio: 1200, stock: 10 }];


/************** RUTAS **************
*
* El método GET deberá enviar el array de productos como respuesta.
* El método POST deberá almacenar un nuevo producto en el array de productos,
* implementando un middleware que validará previamente los datos del mismo.
*
***********************************/





app.listen(8080, () => {
  console.log("Escuchando en el puerto 3000!");
});