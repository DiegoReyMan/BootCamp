const fs = require('fs');
const { request } = require('express');
const generateJWT = require('../helpers/generateJWT')

const login = async (req = request, res) => {

   try {
      const dbUsers = fs.readFileSync("/Users/diegoleandrorey/BootCamp/JWT2/db/users.json", 'utf-8');
      const users = JSON.parse(dbUsers);

      const { email, password } = req.body;

      const user = users.find((ele) => {
         return (ele.email === email && ele.password === password);
      })
      
      if (user) {
         const userLog = {
            id: user.id,
            name: user.name,
            age: user.age,
            email: email,
            role: user.role
         }

         const token = await generateJWT(userLog);
         return res.status(200).json({
            ok: true,
            userLog,
            token,
            msg: 'Usuario logueado'
         })
      }

      res.status(401).json({
         ok: false,
         msg: 'Usuario no encontrado'
      })
      
   } catch (error) {
      res.status(500).json({
         ok: false,
         msg: 'Login fallido'
      })
   }
}

module.exports = { login }