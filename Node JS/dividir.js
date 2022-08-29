function dividir(num1, num2) {
    if (num2 === 0) {
        console.log('No se puede dividir por 0');
    } else {
        return num1 / num2;
    }
}

module.exports.dividir = dividir;