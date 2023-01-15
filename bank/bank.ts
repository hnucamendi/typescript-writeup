// ## **Bank Problem**

// 1. Create a class for a bank account that has properties for the account holder's name, account number, and balance.
// The class should have methods for depositing and withdrawing money, as well as a method to check the account balance.
// Use type annotations for the properties and methods, and make sure to catch any errors that may occur during the deposit and withdrawal process.

class Bank {
  name: string;
  accountNumber: string;
  balance: number;
  constructor(name: string, accountNumber: string, balance: number) {
    if (!name || !accountNumber || balance < 0) {
      throw new Error(
        "[error] ensure you fill the correct information. note: you cannot create an account with a negative account balance"
      );
    }
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount: number): boolean {
    if (!amount || amount < 0) return false;
    this.balance += amount;
    return true;
  }

  withdraw(amount: number): boolean {
    if (!amount || amount < 0) return false;
    if (amount > this.balance) throw new Error("[error] insufficient funds");
    this.balance -= amount;
    return true;
  }

  checkBalance(): number {
    return this.balance;
  }
}

export default Bank;
