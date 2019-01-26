// /////////////////////////////////////////
// Count triple geometrical progression (3, 9, 27) in O(n).
// get description from
// https://www.hackerrank.com/challenges/count-triplets-1/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function countTriplets(arr, r) {
  let count = 0;
  let mapOf3Power = {};
  let mapOf2Power = {};

  for (let i = 0; i < arr.length; i++) {
      let key = arr[i];
      if (mapOf3Power[key]) {
          count += mapOf3Power[key];
      }

      if (mapOf2Power[key]) {
          if (mapOf3Power[key * r]) mapOf3Power[key * r] += mapOf2Power[key];
          else mapOf3Power[key * r] = mapOf2Power[key];
      }

      if (mapOf2Power[key * r]) mapOf2Power[key * r]++;
      else mapOf2Power[key * r] = 1;
  }
  return count;
}

// /////////////////////////////////////////
// Calculate number of anagrams among all possible substrings of a string

// get description from
// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem

// rewrite a solution and find a way to get a unique string signature
// depending on included characters

// abda --> [1,1,0,1] (0 index corresponds `a`, 25th index corresponds `z`).
// or check if 2 arrays in a map will be deep compared. (Yes = they are deeply compared = array can be used as a key (object[property]))

let map = {};
// undefined
let arr1 = [0,1,0];
// undefined
map[arr1] = 'g';
// "g"
map
// {0,1,0: "g"}
let arr2 = [0,1,0];
// undefined
map[arr2] = 'not g';
// "not g"
map
// {0,1,0: "not g"}


// /////////////////////////////////////////
// Build Histogram

// get description from
// https://www.hackerrank.com/challenges/frequency-queries/problem?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D%5B%5D=dictionaries-hashmaps

// Complete the freqQuery function below.
function freqQuery(queries, ws) {

  let map = new Histogram();
  let outArr = [];
  for (let i = 0; i < queries.length; i++) {
      let q = queries[i];
      if (q[0] == 1) {
          map.inc(q[1]);
      } else if (q[0] == 2) {
          map.dec(q[1]);
      } else if (q[0] == 3) {
          let matchFound = 0;
          if (map.hasFrequency(q[1])) matchFound = 1;
          outArr.push(matchFound);
      }
  }
  return outArr;
}

/**
 * Class represents a histogram where occurrences of keys can
 * be incremented or decremented.
 * Also method `hasFrequency` provide O(1) access to check if
 * any value in histogram is presented exactly `n` times.
 *
 * Class can b easily updated to return exact keys which have
 * certain frequencies.
 */
class Histogram {
  constructor() {
      this._keys = {};
      this._freq = {};
  }
  /**
   * Increment a number of occurrences of a certain `key`
   * and update frequency of occurrences.
   * @param {any} key
   */
  inc(key) {
      if (this._keys[key]) {
          this._dec(this._freq, this._keys[key]);
          this._keys[key]++;
          this._inc(this._freq, this._keys[key]);
      } else {
          this._keys[key] = 1;
          this._inc(this._freq, 1);
      }
  }
  /**
   * Decrement a number of occurrences of a certain `key`.
   * and update frequency of occurrences.
   * @param {any} key
   */
  dec(key) {
      if (this._keys[key] == 1) {
          this._dec(this._freq, 1);
          delete this._keys[key];
      }
      else if (this._keys[key]) {
          this._dec(this._freq, this._keys[key]);
          this._keys[key]--;
          this._inc(this._freq, this._keys[key]);
      }
  }
  /**
   * Increment a number of occurrences of a certain `key`
   * in a `map`.
   * @param {object} map - plain JS object.
   * @param {any} key
   */
  _inc(map, key) {
      if (map[key]) map[key]++;
      else map[key] = 1;
  }
  /**
   * Decrement a number of occurrences of a certain `key`
   * in a `map`.
   * @param {object} map - plain JS object.
   * @param {any} key
   */
  _dec(map, key) {
      if (map[key] == 1) delete map[key];
      else if (map[key]) map[key]--;
  }
  /**
   * Get a number of occurrences of a certain `key`.
   * @param {*} key
   */
  value(key) {
      return this._keys[key];
  }
  /**
   * Check if some key has occurred exactly `n` times.
   * @param {*} n
   */
  hasFrequency(n) {
      return this._freq[n] != undefined;
  }
}