const swap = require('../../src/algorithms/utilities').swap;
const shuffle = require('../../src/algorithms/utilities').shuffle;

/**
 * Quick sort (Dijkstra 3-way partitioning)
 * Sorts an `array` in ascending order.
 * Time complexity:
 * - Upper bound O(n^2).
 * - Asymptotic growth rate Θ(n lg(n)).
 * Extra space is O(1).
 * Unstable sorting.
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
 * 'Quick sort (3-way)' for an `array` in a range `[low, high]`.
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
  let {lessThan, greaterThan} = partition(array, low, high);
  sort(array, low, lessThan - 1);
  sort(array, greaterThan + 1, high);
}

/**
 * Array partition (Dijkstra 3 way partitioning) (ascending order).
 *
 * Initially `array[low]` is chosen as partitioning element.
 *
 * Function divides an `array` range `[low, high]` into 3 sections:
 * - everything on the left side is lower than partitioning element;
 * - everything on the right side is larger than partitioning element;
 * - everything between those sides is equal to the partitioning element.
 *
 * So, briefly, the `array[low, high]` is partitioned so that
 *
 * `array[low, lessThan - 1] < array[lessThan, greaterThan] < array[greaterThan + 1, high]`.
 *
 * Indexes `lessThan` and `greaterThan` are returned by the function.
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

  let lessThan = low, greaterThan = high;

  let pE = array[low];

  let index = low + 1;
  while (index <= greaterThan) {
    if      (pE > array[index]) swap(array, lessThan++, index++);
    else if (pE < array[index]) swap(array, index, greaterThan--);
    else /* (pE == array[index]) */ index++;
  }

  return {lessThan, greaterThan};
}

module.exports.partition = partition;
module.exports.quickSort = quickSort;