const userLogs = ['Ada','Greta','Vim','Tim']

function validarAdmin (req, res, next){
    
    // Desestructura lo que llega en el req.query
    const { user } = req.query 
    if (userLogs.includes(user)) {
        req.respuesta = `Hola admin: ${user}`;
    } else {
        req.respuesta = `No tiene privilegios para ingresar`;
    }
    next();
}

module.exports = validarAdmin;