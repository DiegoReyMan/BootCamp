const fs = require('fs');
const generateJWT = require('../helpers/generateJWT');

const main = (req, res) => {
   res.json({
      ok: true,
      msg: 'Usuarios'
   })
}

const login = async (req, res) => {

   const { userName } = req.body;

   try {
      // Se le de users.json
      const dbUsers = fs.readFileSync("/Users/diegoleandrorey/BootCamp/JWT/db/users.json", 'utf-8');
      // Se convierte a objeto
      const users = JSON.parse(dbUsers);

      // Busca el usuario en la db
      const user = users.find(user => user.userName === userName);
      if (!user) {
         return res.status(400).json({
            ok: false,
            msg: "Este usuario no existe"
         })
      }

      const token = await generateJWT(user);

      res.json({
         ok: true,
         user,
         token
      })
   // Contepla el error de no poder accerder a la db
   } catch (error) {
      console.log(error);
      res.status(500).json({
         ok: false,
         msg: 'Login'
      })
   }
}




module.exports = { login, main }

