let productos = [
  ["Cafe","800"],
  ["Yerba","350"],
  ["Platos","250"],
  ["Alfajor","150"],
  ["Tazas","425"],
  ["Pelota futbol","1500"],
  ["Chocolate","125"],
  ["Té","225"],
  ["Mani","160"],
  ["Leche","220"],
  ["Galletitas","200"],
  ["Tostadas","370"],
  ["Azucar","215"],
  ["Cuchillo","175"],
  ["Tenedor","175"],
  ["Papel Higienico","260"],
]

function consultas(str){
  if (str === "listado") {
    for (let i = 0; i < productos.length; i++) {
      console.log("Producto: " + productos[i][0] + " - Precio: $" + productos[i][1]);
    }

  } else if (str === "mayorprecio") {

    let maxPrecio = 0;
    let articulo;

    for (let i = 0; i < productos.length; i++) {
      if (parseInt(productos[i][1]) > maxPrecio) {
        maxPrecio = parseInt(productos[i][1]);
        articulo = productos[i][0];
      }  
    }

    console.log("El articulo de mayor precio es: " + articulo + " con un cosrto de $ " + maxPrecio)
    
  } else if (str === "menorprecio") {
    
    let menorPrecio = productos[0][1];
    let articulo = productos[0][0];

    for (let i = 0; i < productos.length; i++) {
      if (parseInt(productos[i][1]) < menorPrecio) {
        menorPrecio = parseInt(productos[i][1]);
        articulo = productos[i][0];
      }  
    }

    console.log("El articulo de mayor precio es: " + articulo + " con un cosrto de $ " + menorPrecio)
  } else {
    console.log("Opcion incorrecta. Seleccione entre 1)lsitado, 2)mayorprecio, 3)menorprecio")
  }
}

function iguales(str1, str2){

  let encontrado1 = false;
  let index1; 
  let encontrado2 = false;
  let index2;

  for (let i = 0; i < productos.length; i++) {
    if (productos[i][0] == str1) {
      encontrado1 = true;
      index1 = i;
    } else if (productos[i][0] == str2) {
      encontrado2 = true;
      index2 = i;
    }
  }

  if ((encontrado1 && encontrado2) && (productos[index1][1] === productos[index2][1])) {
    console.log("Los productos seleccionados TIENEN le mismo precio")
  } else {
    console.log("Los productos seleccionados NO tiene le mismo precio")

  }

}

function agragar(nombre, precio){
  let nuevo = [nombre, precio]
  productos.push(nuevo)
  //console.log(productos)
}

function eliminar(str){
  
  let encontrado = false;
  let index; 
  
  for (let i = 0; i < productos.length; i++) {
    if (productos[i][0] === str) {
      encontrado = true;
      index = i;
    }
  }

  if (encontrado) {

    let arrTemp = []

    for (let i = productos.length - 1; i > index; i--) {
      arrTemp.push(productos.pop());
    }

    productos.pop() // Elimina str

    for (let i = arrTemp.length -1; i >= 0; i--) {
      productos.push(arrTemp[i])
      
    }

    console.log("Se elimino el articulo " + str);

  }
}

//consultas("listado");

//iguales("Cuchillo", "Tenedor");

//agragar("Miel", "250");
