import { expect, test } from "@jest/globals";
import sumArray from "./sum";

test("sum of [1,2,3,4,5] should return 15", () => {
  expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
});

test("sum of [1,1,1,1,1] should return 5", () => {
  expect(sumArray([1, 1, 1, 1, 1])).toBe(5);
});

test("sum of [-1,3,5] should return 7", () => {
  expect(sumArray([-1, 3, 5])).toBe(7);
});

test("sum of [] should return 0", () => {
  expect(sumArray([])).toBe(0);
});
