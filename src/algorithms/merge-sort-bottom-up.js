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
  for (let halfLength = 1; halfLength < array.length; halfLength *= 2) {
    for (let low = 0; low < array.length - halfLength; low += halfLength * 2 ) {
      let middle = low + halfLength - 1;
      let high = Math.min((low + halfLength * 2 - 1), (array.length - 1));
      merge(array, copy, low, middle, high);
    }
  }
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