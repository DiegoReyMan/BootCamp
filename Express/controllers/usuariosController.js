let usuariosController = {

     litarUsuarios: (req, res) => {
        res.send('Lista de Usuarios')
    },

    infoUsuario: (req, res) => {
        const usuario = req.params.idUsuario;
        res.send(`Esta es la pagina del usuario ${usuario}`)
    }
    
}

module.exports = usuariosController;