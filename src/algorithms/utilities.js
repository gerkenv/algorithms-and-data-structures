/**
 * checks if an `array` is sorted in ascending order.
 * @param {number[]} array
 */
function isSortedInAscendingOrder(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i-1]) return false;
  }
  return true;
}

module.exports.isSortedInAscendingOrder = isSortedInAscendingOrder;