
/**
 * Function searches for a `digit` in an `array`.
 * @param {number[]} array - input array with numbers.
 * @param {number} digit - digit to search in `array`.
 * @returns {number} - index of `digit` in `array` if it was found.
 * @returns `-1` - if `digit` is not found within `array`.
 *
 * Time complexity is logarithmic.
 */
const binarySearch = (array, digit) => {
  if (!array) throw new Error("Argument 'array' is invalid");
  if (digit == null) throw new Error("Argument 'digit' is invalid");
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let middle = low + Math.floor((high - low) / 2);
    if (digit < array[middle]) high = middle - 1;
    else if (digit > array[middle]) low = middle + 1;
    else return middle;
  }
  return -1;
}

module.exports.binarySearch = binarySearch;