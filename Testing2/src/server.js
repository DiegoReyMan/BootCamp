const express = require('express')
const app = express()

app.use(express.json())

 const users = [
    {username: "daniel", password: "123456"},
    {username: "gabriela", password: "654321"}
]

app.post('/login', function (req, res) {
  const {username, password} = req.body

  if(!username || !password){
    return res.status(400).json({msj:"bad request"})
  }

  if(users.find(x => x.username === username).password !== password){
    return res.status(401).json({msj:"credenciales invalidas"})
  }

  return res.status(200).json({msj:"credenciales correctas"})
  
})

app.listen(5000)

module.exports = app
