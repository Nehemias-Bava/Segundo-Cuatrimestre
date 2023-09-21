import {Forma} from "./forma"
export class Rectangulo extends Forma {
    constructor(ancho: number, alto: number) {
        super(ancho, alto);
    }

    areaRectangulo() {
        const resultado = 0;
        this.ancho * this.alto / 2; 
        return resultado; 
    }
}