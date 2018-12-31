const swap = require('../algorithms/utilities').swap;

/**
 * Shell sort
 * Sorts an `array` in ascending order.
 * Time complexity is O(n log3 n).
 * Extra space is O(1).
 * Unstable sorting.
 *
 * @param {number[]} array
 */
function shellSort(array) {
  if (!array)
    throw new Error('Array is faulty (`null`, `undefined` or empty).');

  // Knuth sequence (3x+1)
  let h = 1;
  while (h < array.length / 3) { h = 3 * h + 1; }

  while(h > 0) {
    for (let i = h; i < array.length; i++) {
      for (let j = i; j >= h && array[j] < array[j-h]; j -= h) {
        swap(array, j-h, j);
      }
    }
    // reduce h
    h = ~~(h/3);
  }

}

module.exports.shellSort = shellSort;