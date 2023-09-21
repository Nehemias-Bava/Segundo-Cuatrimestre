//Enunciado:
//Crea una clase llamada BankAccount que represente una cuenta bancaria. Esta clase debe tener atributos privados para el titular de la cuenta (owner), el saldo actual (balance) y el tipo de cuenta (accountType). Implementa métodos públicos para depositar dinero //(deposit), retirar dinero (withdraw) y obtener el saldo actual (getBalance). Además, utiliza la abstracción para ocultar los detalles internos del funcionamiento de la cuenta.

class BankAccount {
    private owner: string;
    private balance: number;
    private accountType: string;

    constructor(owner: string,initialBalnce: number, accountType: string) {
        this.owner = owner;
        this.balance = initialBalnce;
        this. accountType = accountType;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${amount} deposited into ${this.accountType} account. New balance: ${this.balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    getBalance(): number {
        return this.balance;
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`${amount} withdrawn from ${this.accountType} account. New balance: ${this.balance}`);
        } else {
            console.log("Invalid withdrawal amount or insufficient funds.");
        }
    }

}

/*Modificar este ejemplo para que el tipo de cuenta se integre en la clase BankAccount por el mecanismo de composición. Además, accountType solo podrá ser de tipo:
cuenta sueldo
cuenta dólares
cuenta corrienta
caja ahorro
*/
