const fs = require('fs');

const listProducts = (req, res) => {
  try {
    const dbProducts = fs.readFileSync(
      "/Users/diegoleandrorey/BootCamp/JWT2/db/products.json",
      "utf-8"
    );
    const products = JSON.parse(dbProducts);

    res.status(200).json({
      ok: true,
      msg: "Lista de productos",
      products,
    });

  } catch (error) {
   console.log(error);
   res.status(500).json({
      ok: false,
      msg: 'ERROR CATASTROFICO'
   })

  }
};

const newProduct = (req, res) => {
  res.json({
    ok: true,
    msg: "Nuevo producto",
  });
};

const editProduct = (req, res) => {
  res.json({
    ok: true,
    msg: "Producto editado",
  });
};

const deleteProduct = (req, res) => {
  res.json({
    ok: true,
    msg: "Producto eliminado",
  });
};

module.exports = {
  listProducts,
  newProduct,
  editProduct,
  deleteProduct,
};
