class Persona {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    setName(name: string) {
        this.name = name;
        console.log(`${this.name}`)
    }

    setAge(age: number) {
        this.age = age;
        console.log(`${this.age}`)
    }
}

const per1 = new Persona("", 0);
const per2 = new Persona("", 0);
const per3 = new Persona("", 0);
const per4 = new Persona("", 0);
console.log("-------")
per1.setName("Clara");
per1.setAge(20);
console.log("-------")
per2.setName("Ramiro");
per2.setAge(25);
console.log("-------")
per3.setName("Natalia");
per3.setAge(15);
console.log("-------")
per4.setName("Robeto");
per4.setAge(33);
console.log("-------")
