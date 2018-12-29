const swap = require('../../src/algorithms/utilities').swap;

/**
 * Merge sort (top-down)
 * Sorts an `array` in ascending order.
 * Time complexity is O(n lg(n)).
 * Extra space is O(n).
 * Stable sorting.
 *
 * @param {number[]} array
 */
function mergeSort(array) {
  if (!array)
    throw new Error('Array is faulty (`null`, `undefined` or empty).');

  let copy = Array(array.length);
  sort(array, copy, 0, array.length - 1);
}

/**
 * Sort an `array` between indexes `low` and `high` (indexes are inclusive).
 * @param {number[]} array - an `array` with 2 sorted parts.
 * @param {number[]} copy - an `array` to store a copy of original array.
 * @param {number} low - starting index.
 * @param {number} high - end index.
 */
function sort(array, copy, low, high) {
  if (high <= low) return;
  // improvement 1 (cutOff <= 7)
  // if (high <= low + cutOff - 1) {
  //   insertionSort(array, low, high);
  // }
  let middle = low + Math.floor((high - low) / 2);
  sort(array, copy, low, middle);
  sort(array, copy, middle + 1, high);
  // improvement 2
  // if (array[middle] <= array[middle+1]) return;
  merge(array, copy, low, middle, high);
}

/**
 * Merge left sorted half with right sorted half of an `array`.
 * @param {number[]} array - an `array` with 2 sorted parts.
 * @param {number[]} copy - an `array` to store a copy of original array.
 * @param {number} low - starting index of a left half.
 * @param {number} middle - end index of a left half.
 * @param {number} high - end index of a right half.
 */
function merge(array, copy, low, middle, high) {
  // precondition: left subarray [low, middle] and right subarray [middle + 1, high] should be sorted.

  // copy sorted part of array -> [low, high]
  for (let common = low; common <= high; common++) {
    copy[common] = array[common];
  }

  // merge 2 subarrays together
  let left = low, right = middle + 1;
  for (let common = low; common <= high; common++) {
    if      (left > middle)                array[common] = copy[right++];
    else if (right > high)                 array[common] = copy[left++];
    else if (copy[right] < copy[left])     array[common] = copy[right++];
    else /* (copy[right] >= copy[left]) */ array[common] = copy[left++];

    // comment out
    // if (true) console.log(array.join(' '));
  }
}

module.exports.mergeSort = mergeSort;