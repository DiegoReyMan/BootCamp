const jwt = require('jsonwebtoken');
const { request } = require('express');
const extractToken = (req) => {
   if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
   }
   return null;
}
const verifyJWT = (req = request, res, next) => {
   //const { authorization: token } = req.headers;
   const token = extractToken(req);
   try {
      const { name } = jwt.verify(token, process.env.JWT_PRIVATE);
      req.name = name;
      next();
   } catch (error) {
      console.log(error);
      return res.status(401).json({
         ok: false,
         msg: "Token invalido"
      })
   }
}
module.exports = verifyJWT;