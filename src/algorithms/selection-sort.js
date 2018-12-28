const swap = require('../../src/algorithms/utilities').swap;

/**
 * Selection sort
 * Sorts an `array` in ascending order.
 * Time complexity is O(n^2).
 * Extra space is O(1).
 * Unstable sorting.
 *
 * @param {number[]} array
 * @param {boolean} print - print an `array` at each step of sorting.
 */
function selectionSort(array, print) {
  if (!array)
    throw new Error('Array is faulty (`null`, `undefined` or empty).');

  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i+1; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }
    swap(array, i, min);

    if (print) console.log(array.join(' '));
  }
}

module.exports.selectionSort = selectionSort;