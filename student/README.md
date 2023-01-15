# Table of Contents

- [Table of Contents](#table-of-contents)
- [Important](#important)
  - [How to test code](#how-to-test-code)
  - [File Tree](#file-tree)
- [**Installation**](#installation)
- [**The Basics**](#the-basics)
  - [**How does TypeScript relate to JavaScript?**](#how-does-typescript-relate-to-javascript)
  - [**Main features of Typescript**](#main-features-of-typescript)
    - [**Static typing**](#static-typing)
    - [**Classes**](#classes)
    - [**Interface**](#interface)
  - [**Why is Typescript useful?**](#why-is-typescript-useful)
- [**Examples**](#examples)
  - [**The Basics: examples**](#the-basics-examples)
    - [**Defining variables with specific types:**](#defining-variables-with-specific-types)
    - [**Creating classes:**](#creating-classes)
    - [**Creating interfaces:**](#creating-interfaces)
    - [**Using type annotations:**](#using-type-annotations)
    - [**Summary**](#summary)
  - [**Javascript vs Typescript**](#javascript-vs-typescript)
    - [**JavaScript code**](#javascript-code)
    - [**TypeScript code**](#typescript-code)
    - [**Summary**](#summary-1)
- [**Practice**](#practice)
  - [**Bank Problem**](#bank-problem)
  - [**Car Problem**](#car-problem)
  - [**Sum Problem**](#sum-problem)
  - [**Person Problem**](#person-problem)
  - [**Shape Problem**](#shape-problem)
- [**Resources**](#resources)
- [**Additional Notes**](#additional-notes)

# Important

The objective is to write code that allows the existing tests to pass. You should write code that solve the problem in the prompt, and should be able to read and understand the tests in order to write code for the tests to pass. You should not edit the tests!

## How to test code

1. Make sure you are in the root directory
2. run `pwd` and ensure you are not in the directory of a specific problem
3. run `jest ./{directory}` Example: `jest ./sum/`
4. This should run jest to test your code and will provide logs (passing or not passing)

## File Tree

```
.
├── README.md
├── babel.config.js
├── bank
│   ├── bank.test.ts
│   └── bank.ts
├── car
│   ├── car.test.ts
│   └── car.ts
├── jest.config.cjs
├── package.json
├── person
│   ├── person.test.ts
│   └── person.ts
├── shape
│   ├── shape.test.ts
│   └── shape.ts
└── sum
├── sum.test.ts
└── sum.ts
```

# **Installation**

Installing and setting up TypeScript is relatively simple, here are the basic steps:

- Install Node.js: TypeScript is built on top of Node.js, so you'll need to have it installed on your computer before you can install TypeScript. You can download the latest version of Node.js from[ https://nodejs.org/en/download/](https://nodejs.org/en/download/)

- Install TypeScript: Once you have Node.js installed, you can install TypeScript by running the following command in your terminal or command prompt:

```
npm install -g typescript
```

This will install the TypeScript compiler globally on your computer, allowing you to use it from any directory.

- Create a new TypeScript file: Create a new file with the .ts extension, for example "example.ts".

- Compile the TypeScript file: You can use the TypeScript compiler to convert the TypeScript code into JavaScript code by running the following command:

```
tsc example.ts
```

This will create a new file with the same name but with a .js extension.\

- Run the JavaScript file: You can then run the JavaScript file by using the node command, for example:

```
node example.js
```

# **The Basics**

## **How does TypeScript relate to JavaScript?**

TypeScript is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. TypeScript adds optional static typing, classes, and interfaces to JavaScript, which can make the development process more efficient and improve code quality.

TypeScript code is transpiled into JavaScript, which can then be run in any JavaScript runtime environment. This means that developers can write code in TypeScript and then deploy it as JavaScript, making it compatible with any system that can run JavaScript.

By using TypeScript, developers can catch errors early in the development process, and have a better understanding of the codebase, which can lead to more maintainable, and robust code.

In summary, TypeScript is a typed version of JavaScript that adds features that are not present in JavaScript, and then transpiles the code to JavaScript, so it can be run in any JavaScript runtime environment.

## **Main features of Typescript**

### **Static typing**

Static typing is a feature of programming languages that allows variables, function arguments and return types to be defined with a specific data type, such as string, number, or boolean. This means that the type of a variable is determined at compile-time, rather than at runtime.

In contrast, dynamic typing is a feature of languages where the type of a variable is determined at runtime, rather than being explicitly defined by the developer.

The main advantage of static typing is that it can help catch errors early in the development process. For example, if a variable is defined as a number, and a string is later assigned to it, the compiler will raise an error.

Additionally, with static typing, it is easier to understand the codebase, and the developers can have a better understanding of the expected inputs and outputs of the functions they are using. In summary, static typing is a feature that allows developers to explicitly define the data types of variables and function arguments, which can help catch errors early in the development process, and make the codebase more readable, and maintainable.

### **Classes**

Classes are a fundamental concept in object-oriented programming (OOP) that provide a blueprint for creating objects. A class defines the properties and methods that an object of that class should have.

In TypeScript (and other OOP languages) classes are a way to create new types, and instances of those types can be created using the `new` keyword.

The properties of a class are defined as fields or variables and the methods are defined as functions. The properties and methods of a class can be accessed using the dot notation, for example `object.property` or `object.method()`.

A class can also have a constructor, which is a special method that is called when an object is created, and can be used to set the initial state of the object.

Classes can also have inheritance, which allows a class to inherit properties and methods from a parent class. This enables code reuse and organization.

In summary, a class is a blueprint for creating objects in object-oriented programming, that defines the properties and methods that an object of that class should have. Classes can be used to create new types, and instances of those types can be created using the `new` keyword, can have a constructor and can be inherited by other classes.

### **Interface**

An interface in TypeScript (and other OOP languages) is a way to define a contract for the properties and methods that a class or object should have. An interface defines a set of property and method signatures, but does not provide an implementation for them.

A class that implements an interface is required to have the properties and methods defined by the interface, and to match the signature of those properties and methods. This ensures that the class has a specific set of properties and methods, and that they are used in a specific way.

Interfaces can be used to define the expected shape of objects, and to make sure that a class or object has the properties and methods that are needed for a certain task.

Interfaces can be extended, which means that an interface can inherit the properties and methods of another interface.

In summary, an interface is a way to define a contract for the properties and methods that a class or object should have, it defines the shape of the object and ensure that a class or object has the properties and methods that are needed for a certain task. Interfaces can be implemented by classes and extended by other interfaces.

## **Why is Typescript useful?**

TypeScript can improve code quality and make it easier to catch errors early in the development process in several ways:

1. Static Typing: As I mentioned earlier, TypeScript introduces static typing to JavaScript, which allows variables, function arguments, and return types to be defined with a specific data type. This can help catch type errors early in the development process, as the TypeScript compiler will raise an error if a variable is assigned a value of a different type. This can help prevent bugs that would have been difficult to find at runtime.

2. Interfaces: TypeScript interfaces can be used to define the expected shape of an object and the methods it should have, by using interfaces the developer can make sure that the objects used in their codebase have the properties and methods that are needed for a certain task. This can help prevent subtle bugs that can be caused by using the wrong type of object.

3. Classes and Inheritance: TypeScript classes and inheritance features can be used to organize and structure code in a logical way, making it easier to understand and maintain. Classes also provide a way to create new types, which can be used to ensure that objects have a specific set of properties and methods. This can help prevent bugs that can be caused by using the wrong type of object.

4. TypeScript tooling: TypeScript provides a rich set of tooling that can help catch errors early in the development process, such as the TypeScript compiler, which can catch errors before the code is even run. Additionally, TypeScript integrates with many popular development tools, such as IDEs, text editors, and build systems, which can provide additional features such as code completion and type checking as you type.

In summary, TypeScript can improve code quality by providing static typing, interfaces, classes and inheritance, and a rich set of tooling that can help catch errors early in the development process, making it easier to find and fix bugs, and making the codebase more readable, maintainable and robust.

# **Examples**

## **The Basics: examples**

Here are some code examples that demonstrate how to define variables, create classes, and interfaces, and use type annotations in TypeScript:

### **Defining variables with specific types:**

```typescript
let myNumber: number = 5;

let myString: string = "hello";

let myBoolean: boolean = true;
```

In this example, variables `myNumber`, `myString` and `myBoolean` are defined with the specific types number, string and boolean respectively.

### **Creating classes:**

```typescript
class Student {
  name: string;

  age: number;

  constructor(name: string, age: number) {
    this.name = name;

    this.age = age;
  }

  getName(): string {
    return this.name;
  }
}
const student = new Student("John Doe", 25);

console.log(student.getName()); // "John Doe"
```

In this example, a class `Student` is defined with properties `name` and `age` of type string and number respectively, and a constructor method that sets the initial state of the object. The class also has a method `getName()` that returns the name of the student. An instance of the class can be created using the `new` keyword.

### **Creating interfaces:**

```typescript
interface Shape {
  width: number;

  height: number;

  getArea(): number;
}

class Rectangle implements Shape {
  width: number;

  height: number;

  constructor(width: number, height: number) {
    this.width = width;

    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(10, 20);

console.log(rectangle.getArea()); // 200
```

In this example, an interface `Shape` is defined with properties `width` and `height` of type number, and a method `getArea()` that returns a number. A class Rectangle is defined that implements the `Shape` interface, and provides an implementation for the `getArea()` method, that calculates the area of the rectangle.

### **Using type annotations:**

```typescript
function getName(person: { name: string }): string {
  return person.name;
}

const person = { name: "John Doe", age: 25 };

console.log(getName(person)); // "John Doe"
```

In this example, the function `getName()` is defined with a type annotation for the parameter `person`, which indicates that the parameter should be an object with a property `name` of type string. This is an example of using type annotations to indicate the expected shape of an object.

### **Summary**

In summary, TypeScript provides several ways to define variables with specific types, create classes and interfaces, and use type annotations, which can help make code more readable, maintainable, and catch errors early in the development process.

## **Javascript vs Typescript**

Here's an example of how TypeScript can improve JavaScript code:

### **JavaScript code**

```javascript
// JavaScript code

function add(a, b) {
  return a + b;
}

console.log(add(10, "20")); // '1020'
```

In this example, the `add()` function takes two arguments `a` and `b`, and returns their sum. However, there is no way to know the type of the parameters passed to the function. It could be numbers, strings or any other type, and if we pass a string instead of a number, JavaScript will try to concatenate them and return a string.

Here's how the same function would look in TypeScript:

### **TypeScript code**

```typescript
// TypeScript code

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(10, 20)); // 30

console.log(add(10, "20")); // Error: Argument of type '"20"' is not assignable to parameter of type 'number'.
```

In this example, the `add()` function is defined with the `: number` notation after each parameter, which indicates that the function expects two numbers as arguments. Also, the return type of the function is defined as `: number`.

The TypeScript compiler will raise an error if we pass a string instead of a number, which can help us catch this type of error early in the development process.

### **Summary**

In summary, TypeScript can improve JavaScript code by providing static typing, which can help catch type errors early in the development process, and make the code more readable and maintainable.

# **Practice**

Here are some practice problems that students can do to apply the information on how to define variables, create classes, and interfaces, and use type annotations in TypeScript:

## **Bank Problem**

1. Create a class for a bank account that has properties for the account holder's name, account number, and balance. The class should have methods for depositing and withdrawing money, as well as a method to check the account balance. Use type annotations for the properties and methods, and make sure to catch any errors that may occur during the deposit and withdrawal process.

## **Car Problem**

2. Create an interface for a car that has properties for the make, model, and year. The interface should also have a method for starting the car. Create a class that implements the car interface, and provide an implementation for the start method that logs "The car has started" to the console. Create an instance of the car class and call the start method.

## **Sum Problem**

3. Create a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array. Use type annotations to indicate the type of the parameter and return value.

## **Person Problem**

4. Create a class for a person that has properties for the person's name, age, and address. The class should have a method that takes a string as an argument and returns the person's name and address concatenated together. Use type annotations for the properties and method, and make sure to catch any errors that may occur when calling the method.

## **Shape Problem**

5. Create an interface for a shape with properties for width and height and a method for calculating the area. Create two classes that implement the shape interface, one for a rectangle and another for a circle. Add type annotations to all properties and methods and make sure to catch any errors that may occur when creating instances of the classes.

# **Resources**

Here are some resources, documentation, tutorials, and example projects that can help students learn more about TypeScript:

1. TypeScript documentation: The official TypeScript documentation is a great resource for learning about the language and its features. It includes tutorials, guides, and API reference. You can find the documentation at [typescrip docs](https://www.typescriptlang.org/docs/home/)
2. TypeScript handbook: The TypeScript handbook is a comprehensive guide to the language, covering all of its features and best practices. You can find it at [typescript handbook](https://www.typescriptlang.org/docs/handbook/)
3. TypeScript in 5 minutes: This tutorial is a quick introduction to TypeScript and its main features. It's a good starting point for beginners. You can find it at [typescript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
4. TypeScript tutorials on FreeCodeCamp: FreeCodeCamp has a series of tutorials that cover the basics and advanced features of TypeScript. You can find them at [freecodecamp typescript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/typescript/)
5. TypeScript on GitHub: GitHub has a large collection of open-source TypeScript projects that you can use as examples. You can find them by searching for "TypeScript" on GitHub.
6. TypeScript on npm: npm has a large collection of packages that you can use to add functionality to your TypeScript projects. You can find them by searching for "TypeScript" on npm.

# **Additional Notes**

Here are some additional notes to keep in mind when working with TypeScript:

1. TypeScript is a strict superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. This allows you to gradually adopt TypeScript in your projects, and start using its features as you need them.

2. TypeScript has a rich set of built-in types, such as number, string, boolean, and more. You can also create your own custom types using interfaces and classes.

3. TypeScript has a powerful type inference system that can automatically infer the types of variables, function arguments, and return values based on the way they are used in the code.

4. TypeScript supports decorators, which are a way to add metadata to classes, methods, and properties. Decorators can be used to add functionality to your code, such as logging, validation, and more.

5. TypeScript has a strong focus on making it easy to catch errors early in the development process, and it provides a powerful type checking system that can help you find and fix bugs before they make it into production.

6. TypeScript has a community of developers that is constantly creating new libraries and frameworks that can be used with TypeScript, making it easy to find existing solutions for common problems.

7. TypeScript has great integration with popular development tools such as IDEs, text editors, and build systems, which can provide additional features such as code completion and type checking as you type.
