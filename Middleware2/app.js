const express = require('express');
const app = express();
const fs = require('fs');
const validarAdmin = require('./middleware/userLogs.js');

app.use(express.json());

// Middleware global
app.use((req,res,next) => {
   fs.appendFileSync('./logs/userLogs.txt', 'El usuario ingresó a la ruta: ' + req.url + '\n');
   next();
})


// Usa el middleware validarAdmin 
app.get('/admin', validarAdmin, (req,res) => {
   res.send(req.respuesta);
})

app.get('/', (req, res) => {
   res.status(200).json({
      ok: true,
      msg: 'Inicio'
   });
});

// Devuelve JSON con mesnaje y estado
app.get('/services', (req, res) => {
   res.status(200).json({
      ok: true,
      msg: 'Services'
   });
});

// Devuelve JSON con mesnaje y estado
app.get('/services/design', (req, res) => {
   res.status(200).json({
      ok: true,
      msg: 'Design'
   });
});

app.listen(3000, () => {
   console.log('Servidor corriendo en el puerto 3000');
});