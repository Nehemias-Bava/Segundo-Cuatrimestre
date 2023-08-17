var Persona = /** @class */ (function () {
    function Persona(name, age) {
        this.name = name;
        this.age = age;
    }
    Persona.prototype.setName = function (name) {
        this.name = name;
        console.log("".concat(this.name));
    };
    Persona.prototype.setAge = function (age) {
        this.age = age;
        console.log("".concat(this.age));
    };
    return Persona;
}());
var per1 = new Persona("", 0);
var per2 = new Persona("", 0);
var per3 = new Persona("", 0);
var per4 = new Persona("", 0);
console.log("-------");
per1.setName("Clara");
per1.setAge(20);
console.log("-------");
per2.setName("Ramiro");
per2.setAge(25);
console.log("-------");
per3.setName("Natalia");
per3.setAge(15);
console.log("-------");
per4.setName("Robeto");
per4.setAge(33);
console.log("-------");
