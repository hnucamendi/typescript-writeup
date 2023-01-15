// ## **Shape Problem**

// 5. Create an interface for a shape with properties for width and height and a method for calculating the area.
// Create two classes that implement the shape interface, one for a rectangle and another for a circle.
// Add type annotations to all properties and methods and make sure to catch any errors that may occur when creating instances of the classes.

interface Shape {
  width: number;
  height: number;
  calcArea(): number;
}

export class Rectangle implements Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    if (width < 0 || height < 0) {
      throw new Error(
        "[error] please make sure width and height are valid whole numbers"
      );
    }
    this.width = width;
    this.height = height;
  }
  calcArea(): number {
    return this.width * this.height;
  }
}

export class Circle implements Shape {
  radius: number;
  width: number;
  height: number;
  constructor(width: number, height: number) {
    if (width < 0 || height < 0) {
      throw new Error(
        "[error] please make sure width and height are valid whole numbers"
      );
    }
    this.width = width;
    this.height = height;
    this.radius = this.width / 2;
  }
  calcArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
