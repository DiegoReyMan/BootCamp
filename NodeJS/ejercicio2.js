/**
 *
 * En este ejercicio tenemos una base de datos que consta de un array, almacenado en la const "products".
 * Necesitamos administrar esta base de datos con algunas funciones que aún no desarrollamos.
 *
 */

 const products = [
    { name: "Monitor", price: 450, discount: false, stock: 10 },
    { name: "Teclado", price: 125, discount: true, stock: 20 },
    { name: "Parlantes", price: 530, discount: true, stock: 10 },
    { name: "Mouse", price: 100, discount: true, stock: 5 },
    { name: "Procesador", price: 700, discount: false, stock: 8 },
    { name: "Placa de video", price: 1100, discount: true, stock: 9 },
  ];
  

  /**
  * Recibimos el nombre del producto y restamos de su stock el stock recibido en el parámetro "qty".
  * Si el stock llega a 0, debemos eliminar el producto del array.
  */
  function buyProduct(arr, productName, qty) {
    let encontre = false;
    for (let i = 0; i < products.length && !encontre; i++) {
        if (products[i].name === productName) {
            encontre = true;
            if (products[i].stock - qty == 0) {
                products.splice(i, 1);
            } else if (products[i].stock - qty <= 0){
                console.log(`No hay stock suficiente. Hay ${products[i].stock} unidades disponibles`)
            } else {
                products[i].stock -= qty;
            }
        }
    }
    if (!encontre) {
        console.log("No se encontro el producto");
    }
 }
  
  /**
   * Del array indicado, buscar el producto del segundo argumento por su "name" y realizar el cambio solicitado.
   * El parámetro "change" es un objeto que contiene una propiedad existente en el producto,
   * y su nuevo valor. Ejemplo: { price: 500 }
  */
  function editProduct(arr, product, change) {
    let encontre = false;
    let parametro = Object.keys(change);
    let valror = Object.values(change);

    for (let i = 0; i < products.length && !encontre; i++) {
        if (products[i].name === product) {
            encontre = true;
            if (parametro[0] === "price") {
                products[i].price = valror[0];
            } else if (parametro[0] === "discount") {
                products[i].discount = valror[0];
            } else if (parametro[0] === "stock") {
                products[i].stock = valror[0];
            } else {
                console.log("No se puede modificar el nombre del articilo");
            }
        }
    }
    if (!encontre) {
        console.log("No se encontro el producto");
    }
}
  
  

 /**
  * Recibimos un objeto y lo agregamos al array. Si ya existe en el array,
  * aumentar su propiedad 'stock' en función del stock del producto que recibimos.
 */
  function addProduct(arr, product) {
    let encontre = false;

    // array.forEach(element => {
    //     if (products[i].name === product) {
    //         encontre = true;
    //         product[i].stock = product[i].stock + 1;
    //         return;
    //     }
    // });

    for (let i = 0; i < products.length && !encontre; i++) {
        if (products[i].name === product) {
            encontre = true;
            product[i].stock = product[i].stock + 1;
        }
    }

    if (!encontre) {
        products.push(product);
    }
  }
  
  console.table(products);

  editProduct(products, "Parlantes", { price: 525 });

  addProduct(products, { name: "Procesador", price: 700, discount: false, stock: 2 });
  addProduct(products, { name: "Silla", price: 120, discount: false, stock: 10 });
  
  buyProduct(products, "Mouse", 200);
  buyProduct(products, "Mouse", 1);
  buyProduct(products, "Mouse", 1);
  buyProduct(products, "Mouse", 1);
  buyProduct(products, "Mouse", 1);
  buyProduct(products, "Mouse", 1);
  buyProduct(products, "Mouse", 1);

  console.table(products);

