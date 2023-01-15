import { expect, test } from "@jest/globals";
import { Rectangle, Circle } from "./shape";

test("create a rectangle with width and height", () => {
  let rectangle = new Rectangle(3, 4);
  expect(rectangle.width).toBe(3);
  expect(rectangle.height).toBe(4);
  expect(rectangle.calcArea()).toBe(12);
});

test("create a rectangle with negative width and height throws error", () => {
  expect(() => new Rectangle(-3, 4)).toThrowError(
    "[error] please make sure width and height are valid whole numbers"
  );
  expect(() => new Rectangle(3, -4)).toThrowError(
    "[error] please make sure width and height are valid whole numbers"
  );
});

test("create a circle with radius", () => {
  let circle = new Circle(10, 6);
  expect(circle.radius).toBe(5);
  expect(circle.calcArea()).toBeCloseTo(78.53981633974483);
});

test("create a circle with negative radius throws error", () => {
  expect(() => new Circle(-10, 6)).toThrowError(
    "[error] please make sure width and height are valid whole numbers"
  );
});
