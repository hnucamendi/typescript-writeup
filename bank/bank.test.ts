import { expect, test } from "@jest/globals";
import Bank from "./bank";

test("create an instance of BankAccount class", () => {
  let account = new Bank("John Doe", "12345", 1000);
  expect(account.name).toBe("John Doe");
  expect(account.accountNumber).toBe("12345");
  expect(account.balance).toBe(1000);
});

test("create an instance of Bank without name, no account number, negative balance", () => {
  expect(() => new Bank("", "", -324)).toThrowError(
    "[error] ensure you fill the correct information. note: you cannot create an account with a negative account balance"
  );
});

test("create an instance of Bank without name, no account number, 0 balance", () => {
  expect(() => new Bank("", "", 0)).toThrowError(
    "[error] ensure you fill the correct information. note: you cannot create an account with a negative account balance"
  );
});

test("deposit money to the account", () => {
  let account = new Bank("John Doe", "12345", 1000);
  account.deposit(500);
  expect(account.checkBalance()).toBe(1500);
});

test("withdraw money from the account", () => {
  let account = new Bank("John Doe", "12345", 1000);
  account.withdraw(500);
  expect(account.checkBalance()).toBe(500);
});

test("deposit or withdraw negative amount throws error", () => {
  let account = new Bank("John Doe", "12345", 1000);
  expect(account.deposit(-100)).toBe(false);
  expect(account.withdraw(-100)).toBe(false);
});

test("withdraw more than the balance throws error", () => {
  let account = new Bank("John Doe", "12345", 1000);
  expect(() => account.withdraw(2000)).toThrowError(
    "[error] insufficient funds"
  );
});
