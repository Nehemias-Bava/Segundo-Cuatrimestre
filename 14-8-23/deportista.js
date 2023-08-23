//Ejercicio para empezar en clase y terminar de tarea sobre clase de deportistas olimpicos:
//Crear un super clase llamada Deportista (que tenga al menos 3 atributos [al menos 1 atributo en protected] y 2 métodos. Crear 3 subclases hijas de esa superclase Deportista, cada una con al menos un nuevo método especifico y un atributo extra tambien.
//Bonus: una de las sub clases podria estar compuesta por otras clases. 
var Deportista = /** @class */ (function () {
    function Deportista(nombreCompleto, fechaNacimiento, nacionalidad, especialidad, medallas) {
        this.nombreCompleto = nombreCompleto;
        this.fechaNacimiento = fechaNacimiento;
        this.nacionalidad = nacionalidad;
        this.especialidad = especialidad;
        this.medallas = medallas;
    }
    Deportista.prototype.elNombre = function () {
        return this.nombreCompleto;
    };
    Deportista.prototype.calcularEdad = function () {
        var hoy = new Date();
        var edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        var mesActual = hoy.getMonth();
        var mesNacimiento = this.fechaNacimiento.getMonth();
        if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < this.fechaNacimiento.getDate())) {
            return edad - 1;
        }
        else {
            return edad;
        }
    };
    Deportista.prototype.pais = function () {
        return this.nacionalidad;
    };
    Deportista.prototype.obtenerEspecialidad = function () {
        return this.especialidad;
    };
    Deportista.prototype.obtenerMedallas = function () {
        return this.medallas;
    };
    return Deportista;
}());
var deportista1 = new Deportista("Lionel Messi", new Date(1987, 6, 24), "Argentino", "Futbolista", 2);
console.log(deportista1.elNombre());
console.log(deportista1.calcularEdad(), "Anios");
console.log(deportista1.pais());
console.log(deportista1.obtenerEspecialidad());
console.log(deportista1.obtenerMedallas(), "Medallas olimpicas");
