const express = require('express')
const cors = require('cors')
const app = express()
const jwt = require('jsonwebtoken');

//Llevar a variable de entorno
const jwt_secret = "dfkj398cvn3i1asd"

app.use(cors())
app.use(express.json())
 

const users = ["Daniel", "Manuel", "Rita", "Juana"]

app.get('/v1/users', function (req, res) {
  res.json(users)
})

app.post('/v1/users', function (req, res) {
  const {nombre} = req.body
  users.push(nombre)
  res.status(201).json(users)
})

app.delete('/v1/users/:username', function (req, res) {
  const username = req.params.username;
  let index = users.indexOf(username);
  if (index > -1) {
    users.splice(index, 1);
    res.status(200).json(users)
  }
  res.status(409).json(users)
})


app.get('/v1/users', validateToken, function (req, res) {
  res.json(users)
})

app.post('/v1/login', function (req, res) {
  //valido user y pass
  if(true){
    let token = jwt.sign({ active: 1 }, jwt_secret);
    return res.json({token})
  }

  res.status(401).json({msj:"Usuario o contraseña incorrecto"})

})

function validateToken (req, res, next) {
  if (!req.headers.authorization || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    return res.status(401).json({msj:"No autorizado"})
  }

  const token = req.headers.authorization.split(' ')[1];
  const user = jwt.decode(token, jwt_secret)

  if(!user || user.active !== 1){
    return res.status(401).json({msj:"No autorizado"})
  }
  
  return next()
  
  
}


app.get('/v1/demo', validateToken, function (req, res) {
  res.json(users)
})


app.listen(3000)

