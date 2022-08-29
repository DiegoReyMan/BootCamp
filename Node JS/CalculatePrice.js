// Imprimir en consola el nombre del producto, el costo del envío del mismo, y el precio final.

function calculatePrice(nom, precio) {
    let envio = precio * 0.05;
    console.log(`El producto ${nom} cuesta ${precio}. Su costo de envío es de ${envio}. Por lo tanto el precio final es de ${precio + envio}`);
}


calculatePrice('Macbook', 2500);
calculatePrice('Celular', 500);
calculatePrice('Playstation', 4500);
