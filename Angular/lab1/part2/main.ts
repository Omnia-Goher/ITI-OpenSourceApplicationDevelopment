class Account {
    private acc_no: number
    private balance: number
    constructor(acc_no = 0, balance = 0) {
        this.acc_no = acc_no
        this.balance = balance
    }
    depitAmount(amount = 0) {
        console.log("depitAmount")
    }
    creditAmount(amount = 0) {
        console.log("creditAmount")
    }
    getBalance() {
        console.log("getBalance")
    }
}

interface IAccount {
    date_of_opening: Date;
    addCustomer(id: number): void;
    removeCustomer(id: number): void;
}

class Saving_Account extends Account implements IAccount {
    constructor(acc_no, balance, public date_of_opening: Date, private min_balance: number) {
        super(acc_no, balance);
    }
    addCustomer(id: number): void {
        console.log("Saving_Account " + id);
    }
    removeCustomer(id: number): void {
        console.log("Saving_Account " + id);
    }
}

class Current_Account extends Account implements IAccount {
    constructor(acc_no, balance, public date_of_opening: Date, private interest_rate: number) {
        super(acc_no, balance);
    }
    addCustomer(id: number): void {
        console.log("Current_Account " + id);
    }
    removeCustomer(id: number): void {
        console.log("Current_Account " + id);
    }
}

var saving_account = new Saving_Account(10, 20, new Date(), 30);
saving_account.addCustomer(122);
saving_account.removeCustomer(256);
console.log(saving_account.date_of_opening);

var current_account = new Current_Account(40, 50, new Date(), 60);
current_account.addCustomer(784);
current_account.removeCustomer(148);
console.log(current_account.date_of_opening);
