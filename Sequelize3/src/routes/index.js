var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`<img width="250" src='/img/logo-DH.png' /><hr></hr><strong>Hola esto es un buscador de peliculas</strong>`);
});

module.exports = router;
