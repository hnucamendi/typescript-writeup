import { expect, test } from "@jest/globals";
import Person from "./person";

/**
 * DO NOT EDIT
 */

test("create a person with name, age and address", () => {
  let person = new Person("John Doe", 25, "New York");
  expect(person.name).toBe("John Doe");
  expect(person.age).toBe(25);
  expect(person.address).toBe("New York");
  expect(person.printInfo()).toBe(
    "John Doe is 25 years old. John Doe's current address is: New York"
  );
});

test("create a person with empty name, age less than zero or empty address throws error", () => {
  expect(() => new Person("", 25, "New York")).toThrowError(
    "[error] please ensure to fill all fields name, age, and address"
  );
  expect(() => new Person("John Doe", -5, "New York")).toThrowError(
    "[error] please ensure to fill all fields name, age, and address"
  );
  expect(() => new Person("John Doe", 25, "")).toThrowError(
    "[error] please ensure to fill all fields name, age, and address"
  );
});

test("printInfo method of person class", () => {
  let person = new Person("John Doe", 25, "New York");
  expect(person.printInfo()).toBe(
    "John Doe is 25 years old. John Doe's current address is: New York"
  );
});
