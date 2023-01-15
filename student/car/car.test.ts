import { expect, test, jest } from "@jest/globals";
import DreamCar from "./car";

/**
 * DO NOT EDIT
 */

test("create an instance of car class", () => {
  let myCar = new DreamCar("Toyota", "Camry", 2019);
  expect(myCar.make).toBe("Toyota");
  expect(myCar.model).toBe("Camry");
  expect(myCar.year).toBe(2019);
});

test("start the car", () => {
  let myCar = new DreamCar("Toyota", "Camry", 2019);
  console.log = jest.fn();
  myCar.startCar();
  expect(console.log).toHaveBeenCalledWith("The car has started");
});
