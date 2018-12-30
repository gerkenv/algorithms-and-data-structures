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

/**
 * Swap values of two array elements.
 * @param {any} indexA
 * @param {any} indexB
 */
function swap(array, indexA, indexB) {
  var temporaryValue = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temporaryValue;
}

module.exports.swap = swap;

/**
 * Shuffle an array randomly.
 * 'Knuth-Fisher-Yates shuffle' algorithm.
 * @param {any[]} array - an `array` to shuffle.
 * @param {boolean} descending - an `array` is shuffled in descending order.
 * Some links:
 * - https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * - https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * - https://jsperf.com/array-shuffle-comparator/5
 * - https://blog.codinghorror.com/the-danger-of-naivete/
 */
function shuffle(array, descending) {

  if (descending) {
    for (var index = array.length - 1; index > 0; index--)
    {
      var random = ~~(Math.random() * (index + 1));
      swap(array, index, random);
    }
  } else { // ascending shuffling
    for (var index = 0; index < array.length - 1; index++) {
      var random = ~~(Math.random() * (index + 1));
      swap(array, index, random);
    }
  }
}

module.exports.shuffle = shuffle;