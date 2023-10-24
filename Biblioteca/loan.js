"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loan = void 0;
var fs = require("node:fs");
var rs = require("readline-sync");
var Loan = /** @class */ (function () {
    function Loan(Item, user, returnDate) {
        this.Item = Item;
        this.user = user;
        this.startDate = new Date();
        this.returnDate = returnDate;
    }
    ;
    Loan.readUsers = function () {
        try {
            var userData = fs.readFileSync("./users.json", { encoding: "utf-8" });
            return JSON.parse(userData);
        }
        catch (err) {
            console.error("Error al leer los datos de usuarios:", err);
            throw err;
        }
    };
    ;
    Loan.readItems = function () {
        try {
            var itemsData = fs.readFileSync("./items.json", { encoding: "utf-8" });
            return JSON.parse(itemsData);
        }
        catch (err) {
            console.error("Error al leer los datos de ítems:", err);
            throw err;
        }
    };
    ;
    Loan.readLoans = function () {
        try {
            var loanData = fs.readFileSync("./loans.json", { encoding: "utf-8" });
            return JSON.parse(loanData);
        }
        catch (err) {
            console.error("Error al leer los datos de préstamos:", err);
            return [];
        }
    };
    Loan.appendLoan = function (data) {
        try {
            fs.writeFileSync("./loans.json", JSON.stringify(data, null, 2), { encoding: "utf-8" });
            console.log("Préstamo registrado con éxito.");
            rs.keyInPause("\n");
        }
        catch (err) {
            console.error("Error inesperado:", err);
            rs.keyInPause("\n");
        }
    };
    Loan.prototype.loanItems = function () {
        var userId = rs.question('Ingrese el ID del usuario que desea tomar prestado un artículo: ');
        var users = Loan.readUsers();
        var user = users.find(function (u) { return u.id === userId; });
        if (!user) {
            console.log('Usuario no encontrado.');
            rs.keyInPause();
            return;
        }
        var items = Loan.readItems();
        console.log('Artículos disponibles:');
        items.forEach(function (item) {
            if (item.isAvailable) {
                console.log("ID: ".concat(item.id, ", T\u00EDtulo: ").concat(item.title));
            }
        });
        var itemId = rs.question('Ingrese el ID del artículo deseado: ');
        var item = items.find(function (i) { return i.id === itemId && i.isAvailable; });
        if (!item) {
            console.log('Artículo no encontrado o no disponible para préstamo.');
            rs.keyInPause();
            return;
        }
        var loan = new Loan(item, user, new Date());
        loan.returnDate.setDate(loan.returnDate.getDate() + 14); // Establecer la fecha de devolución en 14 días
        item.isAvailable = false;
        var loans = Loan.readLoans();
        loans.push(loan);
        Loan.appendLoan(loans);
        console.log('Préstamo realizado con éxito.');
        console.log("Usuario ".concat(user.name, " ha tomado prestado el art\u00EDculo \"").concat(item.title, "\" con ID ").concat(item.id, "."));
        console.log("Fecha de devoluci\u00F3n planificada: ".concat(loan.returnDate.toDateString()));
        rs.keyInPause();
    };
    return Loan;
}());
exports.Loan = Loan;
