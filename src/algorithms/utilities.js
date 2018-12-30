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

/**
 * Compares values of 3 array elements and returns the index of median (middle) one.
 * @param {any[]} array
 * @param {number} indexA
 * @param {number} indexB
 * @param {number} indexC
 * @returns {number} index of median (middle) element.
 */
function median3Index(array, indexA, indexB, indexC) {
  let a = array[indexA];
  let b = array[indexB];
  let c = array[indexC];
  if (a < b) {
    if (b < c) {
      return indexB;
    } else { // c <= b && a < b
      if (a < c) {
        return indexC;
      } else {
        return indexA;
      }
    }
  } else { // b <= a
    if (c < b) {
      return indexB;
    } else { // b <= c && b <= a
      if (c < a) {
        return indexC;
      }
      else {
        return indexA;
      }
    }
  }
}

module.exports.median3Index = median3Index;

/**
 * Compares 3 values and returns the median (middle) one.
 * Restrictions:
 * - all 3 arguments - `a`, `b` and `c` should have the same type.
 * @param {any} a
 * @param {any} b
 * @param {any} c
 * @returns {any} median (middle) element.
 */
function median3(a, b, c) {
  if (a < b) {
    if (b < c) {
      return b;
    } else { // c <= b && a < b
      if (a < c) {
        return c;
      } else {
        return a;
      }
    }
  } else { // b <= a
    if (c < b) {
      return b;
    } else { // b <= c && b <= a
      if (c < a) {
        return c;
      }
      else {
        return a;
      }
    }
  }
}

module.exports.median3 = median3;