const verifyAdmin = (req, res, next) => {
    const fs = require('fs');
    const jwt = require('jsonwebtoken');
    const dbUsers = fs.readFileSync(
        "/Users/diegoleandrorey/BootCamp/JWT2/db/users.json",
        "utf-8"
      );
      const users = JSON.parse(dbUsers);

    const { authorization: token } = req.headers;

    try {
        const { id } = jwt.verify(token, process.env.JWT_PRIVATE);
        
        const user = users.find((ele) => {
            return (ele.id === Number(id));
        })

        if(user && user.role == 'ADMIN'){
            next();
        }else{
            return res.status(403).json({
                ok: false,
                msg: "No autorizado"
             })
        }
        

        
     } catch (error) {
        console.log(error);
        return res.status(401).json({
           ok: false,
           msg: "Token invalido"
        })
     }

}

module.exports = verifyAdmin;