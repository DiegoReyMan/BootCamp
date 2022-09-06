const productosContrller = {

    listarProductos: function(req, res){
        res.send('Lista de Productos')
    },

    infoProducto: function(req, res){
        const producto = req.params.idPoducto;
        res.send(`Esta es la pagina del producto ${producto}`)
    },

    comentarioProducto: function(req, res) {
        const producto = req.params.idPoducto;
        const comentario = req.params.idComentario;
        if (comentario == undefined) {
            res.send(`Esta es la pagina del comentario del ${producto}`)
        } else {
            res.send(`Esta es la pagina del comentario del ${producto} viendo el comentarios ${comentario}`)
        }
    }


}

module.exports = productosContrllers;