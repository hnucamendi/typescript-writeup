// **Sum Problem**

// Create a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.
// Use type annotations to indicate the type of the parameter and return value.

/**
 *
 * @param arr
 * @returns {number} returns the sum calculated from values in given array
 */
const sumArray = (arr: number[]): number => {
  let sum: number = 0;
  for (const n of arr) {
    sum += n;
  }
  return sum;
};

export default sumArray;
