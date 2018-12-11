/**
 * Functions count minimum of possible bribes, that happened in an array.
 * Array should initially contain only consecutive digits starting from
 * `1` - [1, 2, 3 .. N].
 * Then each element may bribe (swap with the previous element) maximally
 * 2 times.
 * @param {*} array - array with bribed elements.
 * @returns Number - minimal count of bribes.
 * @returns 'Too chaotic' - if one element bribed more than 2 times.
 */
function minimumBribes(array) {
  let bribes = 0;
  for (let id0 = array.length - 1; id0 >= 0; id0--) {
    // check how far element was moved
    let disposition = (array[id0] - 1) - id0;
    // check if it was moved more than 2 times forward
    if (disposition > 2) {
      console.log('Too chaotic');
      return;
    }
    // get index of an element that was initially located before
    // the current element `array[id0]`
    let indexOfPreviousElement = array[id0] - 2;
    // apply boundary condition
    let startIndex = Math.max(0, indexOfPreviousElement);
    // count all elements that are higher that current element `array[id0]`
    // starting from position where possibly can be a higher element
    // than the current element
    // Ex: In array [1, 2, 3, 4] if we checking element `3` than
    // we have to check index `1` of element `2` where could possibly
    // bribe element `4` - [1, 4, 2, 3].
    for (let id1 = startIndex; id1 < id0; id1++) {
      if (array[id1] > array[id0]) bribes++;
    }
  }
  console.log(bribes);
}

// minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);


/**
 * Function defines minimal count of swaps in array.
 * Time complexity O(n) - where n is a size of array.
 * Array should initially contain only consecutive digits starting from
 * `1` - [1, 2, 3 .. N].
 * Then any elements in the array may be swapped.
 *
 * @param {*} array - array filled with swapped digits.
 * @returns Number - minimal count of swaps.
 */
function minimumSwaps(array) {
  let swaps = 0;
  let id = 0;
  // find next mismatch
  while (id < array.length) {
    // check if element is on its place
    if ((array[id] == (id + 1))
    // or was checked already (belongs to some group)
    ||  (array[id] == -1)) {
      id++;
      continue;
    }
    let groupSwaps = 0;
    // id of a first element of a group
    let startId = id;
    // id to iterate over the displaced group
    let tempId = id;
    while (array[tempId] != (startId + 1)) {
      let prevId = tempId;
      // get index of a next element in chain of swapped elements
      tempId = array[tempId] - 1;
      // mark previous element to skip it later in the main loop
      array[prevId] = -1;
      // count swap between `array[tempId]` & `array[array[tempId] - 1]`
      groupSwaps++;
    }
    // mark element to skip it later
    array[tempId] = -1;
    // accumulate
    swaps += groupSwaps;
  }
  return swaps;
}

// let array = [];
// for (let i=0; i<10; i++) { array[i] = 10-i; }
// let swaps = minimumSwaps(array);
// console.log(swaps);


/**
 * Function checks if two strings share a common character.
 * Time complexity: O(n), where n - length of longest string.
 * @param {string} s1 - first string.
 * @param {string} s2 - second string.
 * @returns {boolean} true - common character exists.
 * @returns {boolean} false - no common character.
 */
function twoStrings(s1, s2) {
  let obj = {};

  let i = 0;
  while (i < s1.length) {
    obj[s1[i]] = true;
    i++;
  }
  i = 0;
  while (i < s2.length) {
    if (obj[s2[i]] !== undefined) {
      return true;
    }
    i++;
  }

  return false;
}

// twoStrings('hi', 'world');

/**
 * Function returns sum of all multiplies of `3` or `5`
 * from `1` up to the `n-1`.
 * @param {number} n - exclusive sequence limit
 */
const sumOfMultipliesOf3Or5 = (n) => {
  let sum = 0;
  // find all multiplies of 3
  let sum_of_3 = sumOfDigitMultiplies(3, n-1);
  // find all multiplies of 5
  let sum_of_5 = sumOfDigitMultiplies(5, n-1);
  // find all multiplies of 15
  let sum_of_15 = sumOfDigitMultiplies(15, n-1);
  //
  return sum_of_3 + sum_of_5 - sum_of_15;
};

/**
 * Function calculates sum of all whole `digit` multiplies from `1` to `n`.
 * @param {number} digit
 * @param {number} n - inclusive limit of a sequence
 * @returns {number} Sum of all multiplies
 */
const sumOfDigitMultiplies = (digit, n) => {
  if ((!digit) || (typeof digit !== 'number')
  ||  (!n)     || (typeof n !== 'number')) { return 0; }
  // for example
  // find all multiplies of 3
  // 1 + 2 + 3 + ... + n = n (n + 1) / 2
  // 3 + 6 + 9 + ... + n = 3 * (1 + 2 + 3 + ... + n/3) = 3 * n/3 (n/3 + 1) / 2
  let maxMultiply = Math.floor(n / digit);
  let sum = digit * maxMultiply * (maxMultiply + 1) / 2;
  return sum;
}

// console.log(sumOfMultipliesOf3Or5(1000));
