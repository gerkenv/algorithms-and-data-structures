const partition = require('../../src/algorithms/quick-sort-2-way').partition;
const shuffle = require('../../src/algorithms/utilities').shuffle;

/**
 * Select the n-th element from array (ascending order)
 * Examples:
 * - `index = 0` is the smallest element in array.
 * - `index = array.length - 2` is the 2nd largest element in array.
 * @param {*} array - an `array` to search.
 * @param {*} index - an ascending `index` of element to search.
 * @returns {any} value stored in n-th element.
 * @throws {Error} if array is faulty (`null`, `undefined` or empty).
 * @throws {Error} if `index` is not a valid number.
 * @throws {Error} if `index` in larger than `array.length - 1`.
 *
 * Time complexity:
 * - Upper bound O(n^2).
 * - Asymptotic growth rate Θ(n lg(n)).
 * Extra space is O(n).
 */
function quickSelect(array, index) {
  if (!array)
    throw new Error('Array is faulty (`null`, `undefined` or empty).');
  if (typeof index != 'number')
    throw new Error('`index` is not a valid number.');
  if (index >= array.length)
    throw new Error('`index` in larger than `array.length - 1`.');

  let copy = [...array];
  shuffle(copy);

  let low = 0, high = copy.length - 1;

  while(low < high) {
    let middle = partition(copy, low, high);
    if      (middle < index) low = middle + 1;
    else if (middle > index) high = middle - 1;
    else return copy[index];
  }
  return copy[index];
}

module.exports.quickSelect = quickSelect;