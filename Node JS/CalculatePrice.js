// Imprimir en consola el nombre del producto, el costo del envío del mismo, y el precio final.

function calculatePrice(nom, precio) {
    if (typeof nom === 'string' && typeof precio === 'number') {
        let envio = precio * 0.05;
    console.log(`El producto ${nom} cuesta ${precio}. Su costo de envío es de ${envio}. Por lo tanto el precio final es de ${precio + envio}`);
    } else {
        console.log('Ddebe ingresar un nombre y un precio');
    }
    
}


calculatePrice('Macbook', 2500);
calculatePrice('Celular', 500);
calculatePrice('Playstation', 4500);
calculatePrice('Teclado', "100");

