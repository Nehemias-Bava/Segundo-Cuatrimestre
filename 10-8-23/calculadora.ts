class Calculador {
    public add(a: number, b: number): number {
        return a + b;
    }

    public subtract(a: number, b: number): number {
        return a - b;
    }

    public multiply(a: number, b: number): number {
        return a * b;
    }

    public divide(a: number, b: number): number | string {
        if (b === 0) return "No se puede dividir por cero";
        return a / b;
    }   
}

    const cal01 = new Calculador();

    console.log(cal01.add(2, 8));
    console.log(cal01.multiply(2, 4));