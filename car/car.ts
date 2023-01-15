// **Car Problem**

// Create an interface for a car that has properties for the make, model, and year.
// The interface should also have a method for starting the car.
// Create a class that implements the car interface, and provide an implementation for the start method
// that logs "The car has started" to the console. Create an instance of the car class and call the start method.

interface Car {
  make: string;
  model: string;
  year: number;
  startCar(): void;
}

/** Class representing a Car */
class DreamCar implements Car {
  make: string;
  model: string;
  year: number;
  /**
   *
   * @param make
   * @param model
   * @param year
   */
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  /**
   * @returns {void} Returns string once called
   */
  startCar(): void {
    console.log("The car has started");
  }
}

export default DreamCar;
