const calculadora = require("../src/calculadora");

describe("Sumar", () => {
    test("Sumo 2 números", () => {
        expect(calculadora.sumar(4, 9)).toEqual(13);
    });
    test("No envio parámetros", () => {
        expect(calculadora.sumar()).toEqual(NaN);
    });
});

describe("Restar", () => {
    test("Resto 2 números", () => {
        expect(calculadora.restar(10, 9)).toEqual(1);
    });
});

describe("Dividir", () => {
    test("Dividir 2 números", () => {
        expect(calculadora.dividir(9, 3)).toEqual(3);
    });
    test("Dividir entre 0", () => {
        expect(calculadora.dividir(1, 0)).toEqual("No se puede dividir entre 0");
    });
});

describe("multiplicar", () => {
    test("multiplicar 2 números", () => {
        expect(calculadora.multiplicar(9, 3)).toEqual(27);
    });
});

describe("promedio", () => {
    test("promedio 2 números", () => {
        expect(calculadora.promedio(9, 3)).toEqual(6);
    });
});


