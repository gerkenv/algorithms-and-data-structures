// Reverse Shuffle Merge

// https://www.hackerrank.com/challenges/reverse-shuffle-merge/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

/**
 * Let's imagine that we have string `a` and it was used to build a string `s`
 * in following manner:
 * s = merge(reverse(a), shuffle(a));
 * This function will return the lexicographically smallest possible `a`.
 * @param {string} s
 */
function reverseShuffleMerge(s) {

  // Part 1. Get help structures

  // convert to array
  s = s.split('');
  // get dynamic map / dictionary of char indexes
  let dict = new Dict();
  // fill up the dictionary
  for (let i = 0; i < s.length; i++) {
      dict.add(s[i], i);
  }

  // get dynamic map / dictionary with required amount for each chars
  let requiredChars = {};
  // set required amount
  for (let key in dict.map) {
    let charAmount = dict.get(key).length / 2;
    requiredChars[key] = charAmount;
  }

  // Part 2. Find minimal characters iteratively

  let result = [];
  let minChar = undefined;
  let lastHigherIndex = s.length;
  // iterate back
  for (let i = s.length - 1; i >= 0; i--) {
    // delete me
    console.log('searched:   ' + s.slice(i, lastHigherIndex).join(''));
    // check if a string was assembled completely
    if (dict.size === 0) break;
    // skip removed letters
    if (s[i] === undefined) continue;
    // get new minChar value (reverted logic to handle `undefined`)
    if (!(s[i] >= minChar)) minChar = s[i];
    // get highest index of the one of required characters
    let reqIndex = dict.rank(s[i], (requiredChars[s[i]] - 1));
    // check if that is required occurrence of a char in a string
    if (reqIndex == i) {
        // add found minChar to result array
        result.push(minChar);
        // decrement amount of left chars
        requiredChars[minChar]--;
        // get highest index of minChar
        let higherIndex = dict.getMax(minChar);
        // remove entry from index dictionary
        dict.remove(minChar, higherIndex);
        // clean up all on the right side of the higher index of minChar
        for (let j = higherIndex; j < lastHigherIndex; j++ ) {
          dict.remove(s[j], j);
          s[j] = undefined;
        }
        // if all required characters are found - clean up the rest in a string
        if (0 === requiredChars[minChar]) {
          let arrayToRemove = dict.get(minChar);
          if (arrayToRemove !== undefined) {
            for (let j = 0; j < arrayToRemove.length; j++) {
              s[arrayToRemove[j]] = undefined;
            }
            delete dict.map[minChar];
          }
        }
        // set current position to higher index
        i = higherIndex;
        // save last higher index
        lastHigherIndex = higherIndex;
        // print out result
        console.log("found   " + result.join(''));
        // reset min
        minChar = undefined;
    } else {
        // search minimum further
        continue;
    }
  }

  return result.join('');
}

// my result
// aaaaa bccig icgji hidfi ejfij gidgb hhehg fhjgi ibggj ddjjd
// aaaaa bccig icgji hidfi ejfij gidgb hhehg fhjgi ibggj ddjjd
// should be

// var str = reverseShuffleMerge('zzaazzzzzz'); // --> zzazz
// var str = reverseShuffleMerge('djjcddjggbiigjhfghehhbgdigjicafgjcehhfgifadihiajgciagicdahcbajjbhifjiaajigdgdfhdiijjgaiejgegbbiigida');

/**
 * Dictionary that stores an array corresponding to a key.
 * All elements in array are sorted in ascending order.
 */
class Dict {
  /**
   * Create a new dictionary.
   */
  constructor() {
    this.map = {};
    this.size = 0;
  }
  /**
   * Add a `value` to a number array corresponding to a `key`.
   * @param {string} key
   * @param {number} value
   */
  add(key, value) {
    let array = this.map[key];
    if (undefined === array) {
      this.map[key] = [value];
      this.size++;
    } else {
      // insert a value to a proper place
      if (value > array[array.length - 1]) {
        array.push(value);
      } else {
        for (let i = 0; i < array.length; i++) {
          if (value < array[i]) {
            array.splice(i, 0, value);
            break;
          }
        }
      }
      this.map[key] = array;
    }
  }
  /**
   * Remove a `value` from a number array corresponding to a `key`.
   * If value is not presented in the array then nothing happens.
   * @param {string} key
   * @param {number} value
   */
  remove(key, value) {
    if (!(undefined === this.map[key])) {
      this.map[key] = this.map[key].filter(element => element != value);
      if (this.map[key].length == 0) {
        delete this.map[key];
        this.size--;
      }
    }
  }
  /**
   * Get a number array corresponding to a `key`.
   * @param {string} key
   */
  get(key) {
    return this.map[key];
  }
  /**
   * Get a smallest number from a number array corresponding to a `key`.
   * @param {string} key
   */
  getMin(key) {
    let array = this.map[key];
    if (undefined !== array) {
      return array[0];
    } else {
      return undefined;
    }
  }
  /**
   * /**
   * Get the n-th smallest number from a number array corresponding to a `key`.
   * @param {string} key
   * @param {number} rank - zero based element index in ascending array.
   */
  rank(key, rank) {
    let array = this.map[key];
    if ((undefined === array)
    ||  (array.length <= rank)) {
      return undefined;
    } else {
      return array[rank];
    }
  }
  /**
   * Get a largest number from a number array corresponding to a `key`.
   * @param {string} key
   */
  getMax(key) {
    let array = this.map[key];
    if (undefined !== array) {
      return array[array.length-1];
    } else {
      return undefined;
    }
  }
}