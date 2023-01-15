// ## **Person Problem**

// 4. Create a class for a person that has properties for the person's name, age, and address.
// The class should have a method that takes a string as an argument and returns the person's name and address concatenated together.
//  Use type annotations for the properties and method, and make sure to catch any errors that may occur when calling the method.

class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    if (!name || age < 0 || !address) {
      throw new Error(
        "[error] please ensure to fill all fields name, age, and address"
      );
    }
    this.name = name;
    this.age = age;
    this.address = address;
  }

  printInfo(): string {
    return `${this.name} is ${this.age} years old. ${this.name}'s current address is: ${this.address}`;
  }
}

export default Person;
