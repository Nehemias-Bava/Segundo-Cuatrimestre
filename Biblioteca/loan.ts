import { Item } from "./item";
import { User } from "./user";
import * as fs from "node:fs";
import * as rs from "readline-sync";

export class Loan {
    private isActive: boolean;
    public Item: Item;
    public user: User;
    private startDate: Date;
    public returnDate: Date;

    constructor(Item: Item, user: User, returnDate: Date) {
        this.Item = Item;
        this.user = user;
        this.startDate = new Date();
        this.returnDate = returnDate;
    };

    static readUsers(): User[] {
        try {
            const userData = fs.readFileSync("./users.json", { encoding: "utf-8" });
            return JSON.parse(userData) as User[];
        } catch (err) {
            console.error("Error al leer los datos de usuarios:", err);
            throw err;
        }
    };

    static readItems(): Item[] {
        try {
            const itemsData = fs.readFileSync("./items.json", { encoding: "utf-8" });
            return JSON.parse(itemsData) as Item[];
        } catch (err) {
            console.error("Error al leer los datos de ítems:", err);
            throw err;
        }
    };

    static readLoans(): Loan[] {
        try {
            const loanData = fs.readFileSync("./loans.json", { encoding: "utf-8" });
            return JSON.parse(loanData) as Loan[];
        } catch (err) {
            console.error("Error al leer los datos de préstamos:", err);
            return [];
        }
    }

    static appendLoan(data: Loan[]) {
        try {
            fs.writeFileSync("./loans.json", JSON.stringify(data, null, 2), { encoding: "utf-8" });
            console.log("Préstamo registrado con éxito.");
            rs.keyInPause("\n");
        } catch (err) {
            console.error("Error inesperado:", err);
            rs.keyInPause("\n");
        }
    }

    loanItems() {
        const userId = rs.question('Ingrese el ID del usuario que desea tomar prestado un artículo: ');
        const users = Loan.readUsers();
        const user = users.find((u) => u.id === userId);
        if (!user) {
            console.log('Usuario no encontrado.');
            rs.keyInPause();
            return;
        }

        const items = Loan.readItems();
        console.log('Artículos disponibles:');
        items.forEach((item) => {
            if (item.isAvailable) {
                console.log(`ID: ${item.id}, Título: ${item.title}`);
            }
        });

        const itemId = rs.question('Ingrese el ID del artículo deseado: ');
        const item = items.find((i) => i.id === itemId && i.isAvailable);
        if (!item) {
            console.log('Artículo no encontrado o no disponible para préstamo.');
            rs.keyInPause();
            return;
        }

        const loan = new Loan(item, user, new Date());
        loan.returnDate.setDate(loan.returnDate.getDate() + 14); // Establecer la fecha de devolución en 14 días

        item.isAvailable = false;

        const loans = Loan.readLoans();
        loans.push(loan);
        Loan.appendLoan(loans);

        console.log('Préstamo realizado con éxito.');
        console.log(`Usuario ${user.name} ha tomado prestado el artículo "${item.title}" con ID ${item.id}.`);
        console.log(`Fecha de devolución planificada: ${loan.returnDate.toDateString()}`);
        rs.keyInPause();
    }
}