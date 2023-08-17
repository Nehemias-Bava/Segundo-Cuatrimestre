var Calculador = /** @class */ (function () {
    function Calculador() {
    }
    Calculador.prototype.add = function (a, b) {
        return a + b;
    };
    Calculador.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculador.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculador.prototype.divide = function (a, b) {
        if (b === 0)
            return "No se puede dividir por cero";
        return a / b;
    };
    return Calculador;
}());
var cal01 = new Calculador();
console.log(cal01.add(2, 8));
console.log(cal01.multiply(2, 4));
