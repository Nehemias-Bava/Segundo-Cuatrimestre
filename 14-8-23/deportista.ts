//Ejercicio para empezar en clase y terminar de tarea sobre clase de deportistas olimpicos:
//Crear un super clase llamada Deportista (que tenga al menos 3 atributos [al menos 1 atributo en protected] y 2 métodos. Crear 3 subclases hijas de esa superclase Deportista, cada una con al menos un nuevo método especifico y un atributo extra tambien.
//Bonus: una de las sub clases podria estar compuesta por otras clases. 

class Deportista {
    private nombreCompleto: string;
    private fechaNacimiento: Date;
    private nacionalidad: string;
    private especialidad: string;
    private medallas: number;


    constructor(nombreCompleto: string, fechaNacimiento: Date, nacionalidad: string, especialidad: string, medallas: number) {
        this.nombreCompleto = nombreCompleto;
        this.fechaNacimiento = fechaNacimiento;
        this.nacionalidad = nacionalidad;
        this.especialidad = especialidad;
        this.medallas = medallas;
    }

    elNombre(): string{
        return this.nombreCompleto;
    }

    //.getFullYear() = devuelve el año de la fecha indicada acorde a la hora local.
    //.getDate() = devuelve el día del mes para la fecha especificada de acuerdo con la hora local.
    //.getMonth() = devuelve el mes del objeto Date según la hora local, donde el número cero indica el primer mes del año.

    calcularEdad(): number{
        const hoy = new Date();
        const edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mesActual = hoy.getMonth();
        const mesNacimiento = this.fechaNacimiento.getMonth();

        if(mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < this.fechaNacimiento.getDate())){
            return edad - 1;
        } else {
            return edad;
        }
    }

    pais(): string {    
        return this.nacionalidad;
    }

    obtenerEspecialidad(): string {
        return this.especialidad;
    }
    
    obtenerMedallas(): number {
        return this.medallas;
    }
}

const deportista1 = new Deportista("Lionel Messi", new Date(1987, 6, 24), "Argentino", "Futbolista", 2);
console.log(deportista1.elNombre());
console.log(deportista1.calcularEdad(), "Anios");
console.log(deportista1.pais());
console.log(deportista1.obtenerEspecialidad());
console.log(deportista1.obtenerMedallas(), "Medallas olimpicas");