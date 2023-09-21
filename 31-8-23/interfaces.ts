/*Vamos a centrarnos en el uso de interfaces para modelar diferentes tipos de dispositivos electrónicos y sus funciones. Cada dispositivo tendrá diferentes características y funcionalidades. Vamos a utilizar interfaces para asegurarnos de que los dispositivos cumplan con ciertos métodos específicos.

Definición del problema:
Desarrollar un sistema que modele diferentes tipos de dispositivos electrónicos como teléfonos y televisores. Cada dispositivo tendrá propiedades como marca, modelo, año de fabricacion, asi como funciones especificas. */


interface IElectronic {
    getBrand(): string;
    getModel(): string;
    getYear(): number;
}

interface IPhone extends IElectronic {
    makeCall(number: string): void;
    getColor(): string;
}

interface ITelevision extends IElectronic {
    changeChannel(channel: number): void;
    getChannel(): number;
}

class Electronic implements IElectronic {
    private brand: string;
    private model: string;
    private year: number;
    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getBrand(): string {
        return this.brand;
    }
    getModel(): string {
        return this.model;
    }
    getYear(): number {
        return this.year;
    }
}

class Phone implements IPhone {
    private brand: string;
    private model: string;
    private year: number;
    private color: string;
    
    constructor(brand: string, model: string, year: number, color: string) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    
    getBrand(): string {
        return this.brand;
    }
    getModel(): string {
        return this.model;
    }
    getYear(): number {
        return this.year;
    }
    
    makeCall(number: string): void {
        console.log(`Calling to ${number}...`);
    }
    
    getColor(): string {
        return this.color;
    }
}

class Television implements ITelevision {
    private brand: string;
    private model: string;
    private year: number;
    private channel: number;
    
    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.channel = 0;
    }
    
    getBrand(): string {
        return this.brand;
    }
    getModel(): string {
        return this.model;
    }
    getYear(): number {
        return this.year;
    }
    
    changeChannel(channel: number): void {
        this.channel = channel;
    }
    
    getChannel(): number {
        return this.channel;
    }
}

const phone1: IPhone = new Phone("Nokia", "C3", 2006, "Black");
const tv1: ITelevision = new Television("BGH", "Smart TV", 2023);
//Telefono
console.log("Phone:");
console.log("Brand:", phone1.getBrand());
console.log("Model:", phone1.getModel());
console.log("Year:", phone1.getYear());
console.log("Color:", phone1.getColor());
phone1.makeCall("123-456-7890");
//Televisor
console.log("\nTelevision:");
console.log("Brand:", tv1.getBrand());
console.log("Model:", tv1.getModel());
console.log("Year:", tv1.getYear());
console.log("Channel:", tv1.getChannel());
tv1.changeChannel(5);
console.log("Channel after change:", tv1.getChannel());