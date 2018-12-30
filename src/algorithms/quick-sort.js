const swap = require('../../src/algorithms/utilities').swap;
const shuffle = require('../../src/algorithms/utilities').shuffle;

/**
 * Quick sort
 * Sorts an `array` in ascending order.
 * Time complexity:
 * - Upper bound O(n^2).
 * - Approximate model ~ n lg(n).
 * Extra space is O(1).
 * Stable sorting.
 *
 * @param {number[]} array
 */
function quickSort(array) {
  if (!array)
    throw new Error('Array is faulty (`null`, `undefined` or empty).');

  // shuffle an array
  shuffle(array); // O(n)
  sort(array, 0, array.length - 1); // Θ(n lg(n)) && O(n^2)
}

/**
 * 'Quick sort' for an `array` in a range `[low, high]`.
 * @param {number[]} array - an `array` to sort.
 * @param {number} low - starting index of sorting range.
 * @param {number} high - end index of sorting range.
 */
function sort(array, low, high) {
  if (low >= high) return;
  // improvement 1 (cutOff ~ [10, 20])
  // if (high <= low + cutOff - 1) {
  //   insertionSort(array, low, high);
  // }
  let middle = partition(array, low, high);
  sort(array, low, middle - 1);
  sort(array, middle + 1, high);
}

/**
 * Array partition.
 * Function divides an `array` range from `low` to `high` into 2 sections,
 * where, everything on the left side is lower than `array[low]` and everything
 * on the right side is bigger than `array[low]`. Then `array[low]` is placed
 * between those sections (in a middle) and its index is returned.
 *
 * An array [lo..hi] is divided so that
 * `array[low, middle - 1]` <= `array[middle]` <= `array[middle + 1, high]`.
 * Index `middle` is returned by the function.
 *
 * @param {number[]} array - an `array` to sort.
 * @param {number} low - starting index of sorting range.
 * @param {number} high - end index of sorting range.
 * @returns {number} Index of a middle element.
 */
function partition(array, low, high) {
  // improvement 2 (median of sample)
  // const median3Index = require('../../src/algorithms/utilities').median3Index;
  // let median = median3Index(array, low, (low + (high-low) / 2), high);
  // swap(array, median, low);

  let left = low, right = high + 1;
  while (true) {
    // find an item on left to swap
    while (array[++left] < array[low]) {
      if (left == high) break;
    }
    // find an item on right to swap
    while (array[--right] > array[low]) {
      if (right == low) break;
    }
    // check if pointers crossed
    if (left >= right) break;

    swap(array, left, right);
    // comment out
    // if (true) console.log(array.join(' '));
  }

  swap(array, low, right);
  // comment out
  // if (true) console.log(array.join(' '));

  return right;
}

module.exports.quickSort = quickSort;