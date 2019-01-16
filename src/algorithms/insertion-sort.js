const swap = require('../../dist/algorithms/utilities').swap;

/**
 * Insertion sort
 * Sorts an `array` in ascending order.
 * Time complexity is O(n^2).
 * Extra space is O(1).
 * Stable sorting.
 *
 * @param {number[]} array
 */
function insertionSort(array) {
  if (!array)
    throw new Error('Array is faulty (`null`, `undefined` or empty).');

  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0 && array[j] < array[j-1]; j--) {
      swap(array, j-1, j);
    }
  }
}

module.exports.insertionSort = insertionSort;