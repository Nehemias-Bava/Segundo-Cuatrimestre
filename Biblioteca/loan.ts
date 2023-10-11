import { Item } from "./item";
import { User } from "./user";
import * as fs from "node:fs";
import * as rs from "readline-sync";
import { itemManager } from "./itemMmanager";
import { UserManager } from "./userManager";

export class Loan {
    private isActive: Loan;
    public Item: Item;
    public user: User;
    private startDate: Date;
    public returnDate: Date;

    constructor(Item: Item, user: User,returnDate) {
        this.Item = Item;
        this.user = user;
        this.startDate = new Date;
        this.returnDate = new Date;
    };

    // static readUsers(): User[] {
    //     try {
    //         const userData = fs.readFileSync("./users.json", { encoding: "utf-8" });
    //         return JSON.parse(userData) as User[];
    //     } catch (err) {
    //         console.error("Error al leer los datos de usuarios:", err);
    //         throw err;
    //     }
    // };


    // static readItems(): Item[] {
    //     try {
    //         const itemsData = fs.readFileSync("./items.json", { encoding: "utf-8" });
    //         return JSON.parse(itemsData) as Item[];
    //     } catch (err) {
    //         console.error("Error al leer los datos de ítems:", err);
    //         throw err;
    //     }
    // };

    static readLoans() {
        try {
            const loan = fs.readFileSync("./loans.json", { encoding: "utf-8" });
            console.log("Prestamos.");
            rs.keyInPause("\n");
            return JSON.parse(loan) as Loan[];
        } catch (err) {
            console.log("Unexpected Error:", err);
            rs.keyInPause("\n");
        }

    };

    static appendLoan(data: Item[]){
        try {
            fs.writeFileSync("./loans.json", JSON.stringify(data, null, 2), { encoding: "utf-8" });
            console.log("COMPLETE")
            rs.keyInPause("\n");
        } catch (err) {
            console.log("Unexpected Error:", err);
            rs.keyInPause("\n");
        }
    };

    loanItems(){
    }
};