module.exports = {
    sumar: (n1,n2) => n1+n2,
    restar: (n1,n2) => n1-n2,

    dividir: (n1,n2) => {
        if (n2 !== 0) {
            return n1/n2
        } else {
            return "No se puede dividir entre 0"
        }
    }, 
    multiplicar: (n1,n2) => n1*n2,
    promedio: (n1,n2) => (n1+n2)/2,
};