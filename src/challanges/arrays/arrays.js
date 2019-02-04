/**
 * Count pairs of duplicates in array using `Set` object.
 */
function countDuplicatePairs(array) {
  let pairsCounter = 0;
  let elementSet = new Set();         // O(1)
  array.forEach(element => {          // O(n)
    if (elementSet.has(element)) {      // O(1)
      elementSet.delete(element);         // O(1)
      pairsCounter++;                     // O(1)
    } else {
      elementSet.add(element);            // O(1)
    }
  });
  return pairsCounter;
}

/**
 * Count pairs of duplicates in array using `Object`.
 */
function countDuplicatePairs(array) {
  let pairsCounter = 0;
  let obj = new Object();
  array.forEach(element => {
    if (obj[element]) {
      obj[element] = undefined;
      pairsCounter++;
    } else {
      obj[element] = true;
    }
  });
  return pairsCounter;
}


// /////////////////////////////////////////
// Minimum Bribes

//https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

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


// /////////////////////////////////////////
// Minimum Swaps

// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

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

// /////////////////////////////////////////
// Array Manipulation

// https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

/**
 * Function adds an offset `a` to all element in array between `b` and `c-1`
 * and returns the maximum of an array.
 * @param {number} n - size of an array.
 * @param {*} queries - in format `[a,b,c]`.
 */
function arrayManipulation(n, queries) {
  // Initialize array with zeros
  let arr = Array(n+1).fill(0);

  queries.forEach((element, index) => {
    // set positive offset to a first index
    arr[element[0]] += element[2];
    // check if an element after a last index exists
    if (element[1] + 1 <= n) {
      // set negative offset to an element after a last index
      arr[element[1] + 1] -= element[2];
    }
  });
  let max = 0;
  let value = 0;
  arr.forEach(element => {
    // add current offset to the value
    value += element;
    if (value > max) max = value;
  });

  return max;
}

// /////////////////////////////////////////
// Another Histogram

// https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=sorting

/**
 * Function returns a quantity of cases, where some digit
 * is at least 2 times higher than a moving median of `d` digits
 * period before that digit.
 *
 * Example:
 * d = 3
 * expenditure = [10, 20, 10, 30, 20]
 * Function returns `1` only when `30` is checked.
 * Median of `3` previous digits `[10, 20, 10]` is middle element of
 * ascending version of the same array `[10, 10, 20]`. So median is
 * `10`. Since digit is higher or equal to double median `30 >= 10 * 2`
 * count is incremented.
 *
 * @param {number[]} expenditure - array with numbers
 * @param {number} d -
 */
function countNumbersExceedingMovingMedian(expenditure, d) {
  if (expenditure.length <= d) return 0;
  let counter = 0;
  let hist = getHistogram(expenditure, 0, d);
  if (expenditure[d] >= median(hist, d) * 2) counter++;
  for (let i = 1; i < expenditure.length - d; i++) {
      updateHistogram(hist, expenditure[i + d - 1], expenditure[i - 1]);
      if (expenditure[i + d] >= median(hist, d) * 2) counter++;
  }
  return counter;
}

function updateHistogram(hist, add, remove) {
  hist[add]++;
  hist[remove]--;
}

function getHistogram(array, start, length) {
  let hist = new Array(201).fill(0);
  for (let i = start; i < start + length; i++) {
      hist[array[i]]++;
  }
  return hist;
}

function median(hist, length) {
  let medianIndex = (length - 1) >> 1;

  let i = 0;
  for (; i < hist.length; i++) {
      if (hist[i] > medianIndex) break;
      else medianIndex -= hist[i];
  }
  if (length % 2 != 0) {
      return i;
  } else {
      if (hist[i] > medianIndex + 1) {
          return i;
      } else {
          let j = i + 1;
          while (hist[j] == 0) { j++; }
          return (i + j) / 2;
      }
  }
}