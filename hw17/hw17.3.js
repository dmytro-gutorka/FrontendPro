class BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance
    }


    deposit(value) {
        this.#balance += value;
    }


    withdraw(value) {
        if (value > this.#balance) {
            console.log('You try to withdraw more money than you have on your balance')
            return
        }
        this.#balance -= value;
    }


    getBalance() {
        return this.#balance
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000
account1.deposit(500);

console.log(account1.getBalance()); // 1500
account1.withdraw(200);

console.log(account1.getBalance()); // 1300