// Dia de REPASO. Crear una clase personaje y trabajar la herencaia

class Personajes {
    private nombre: string;
    private edad: number;
    private pais: string;
    private poderEspecial: string;
    private rol: string;
    public salud: number;
    public nivel: number;

    constructor(nombre: string, edad: number, pais: string, poderEspecial: string, rol: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
        this.poderEspecial = poderEspecial;
        this.rol = rol;
        this.salud = 100;
        this.nivel = 1;
    }

    recibirDanio(danio: number): void {
        this.salud -= danio;
        console.log(`${this.nombre} recibió ${danio} puntos de daño. Salud actual: ${this.salud}`);
    }

    elegirRol() {
        
    }
}
