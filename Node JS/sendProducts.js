const cart1 = [
    { name: "Monitor", price: 450, discount: false, amount: 2 },
    { name: "Teclado", price: 125, discount: true, amount: 2 },
    { name: "Parlantes", price: 530, discount: true, amount: 2 },
    { name: "Mouse", price: 100, discount: true, amount: 3 },
    { name: "Procesador", price: 700, discount: false, amount: 1 },
    { name: "Placa de video", price: 1100, discount: true, amount: 1 },
  ];
  
  const cart2 = [
    { name: "Monitor", price: 450, discount: false, amount: 1 },
    { name: "Teclado", price: 125, discount: false, amount: 1 },
    { name: "Parlantes", price: 530, discount: false, amount: 1 },
    { name: "Mouse", price: 100, discount: true, amount: 1 },
    { name: "Procesador", price: 700, discount: false, amount: 1 },
  ];
  
  const cart3 = [
    { name: "Monitor", price: 450, discount: false, amount: 1 },
    { name: "Teclado", price: 125, discount: false, amount: 1 },
    { name: "Procesador", price: 700, discount: false, amount: 1 },
  ];
  
    // Si el costo del envío es superior a 2000, hacer un 5% de descuento sobre el total
    // Si el producto tiene un código promocional, hacer un 5% de descuento sobre su precio, no sobre el total
    // Si el envío supera los 5km, aumentar un 2%
    // Si el envío supera los 100km, aumentar un 10%

  function sendProducts(arr, distance) {

    let precioTotal = 0;

    // Controla el tipo de dato
    if (typeof distance === 'number' && typeof arr === 'object') {

         // Calcuala precio total con descuento y envío
        arr.forEach(element => {
            if (element.discount) {
                precioTotal = precioTotal + ((element.price * element.amount) * 0.95);
            } else {
                precioTotal = precioTotal + (element.price * element.amount);
            }
        });

        // Si el total es > a 2000, aplicar descuento
        if (precioTotal > 2000) {
            precioTotal = precioTotal - (precioTotal * 0.05);
        }

        // Si la distancia es > a 5km, aplicar descuento
        if (distance > 5) {
            precioTotal = precioTotal + (precioTotal * 0.02);
        }

        // Si la distancia es > a 100km, aplicar descuento
        if (distance > 100) {
            precioTotal = precioTotal + (precioTotal * 0.1);
        }

        //return precioTotal;
        console.log(precioTotal);

        } else {
            console.log('Debe ingresar una distancia y un array');
        }

    }
    
  
  sendProducts(cart1, 3.4);
  sendProducts(cart2, 5.2);
  sendProducts(cart3, 112);
  sendProducts(cart3, "112");

