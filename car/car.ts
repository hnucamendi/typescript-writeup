// ## **Car Problem**

// 2. Create an interface for a car that has properties for the make, model, and year.
// The interface should also have a method for starting the car.
// Create a class that implements the car interface, and provide an implementation for the start method
// that logs "The car has started" to the console. Create an instance of the car class and call the start method.

interface Car {
  make: string;
  model: string;
  year: number;
  startCar(): void;
}

class DreamCar implements Car {
  make: string;
  model: string;
  year: number;
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  startCar(): void {
    console.log("The car has started");
  }
}

export default DreamCar;
