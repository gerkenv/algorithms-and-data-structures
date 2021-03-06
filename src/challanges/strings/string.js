// /////////////////////////////////////////
// Count The Occurrence Of `A` Character In A String

// https://stackoverflow.com/questions/881085/count-the-number-of-occurrences-of-a-character-in-a-string-in-javascript)

function countsOccurrencesOfCharA(s) {
  return matches = (s.match(/a/g) || []).length;
}

// /////////////////////////////////////////
// Iterate Through String

(function(){
  var text = 'uololooo';

  // With ES6
  [...text].forEach(c => console.log(c))

  // With ES5
  for (var index = 0; index < text.length ; index++) {
      console.log(text.charAt(index));
  }

  // ES5 without the for loop:
  text.split('').forEach(function(c) {
      console.log(c);
  });

  // With ES5 (fastest)
  let l = text.length;
  while(l--) {
    console.log(text.charAt(index));
  }

})();

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


// /////////////////////////////////////////
// Making Anagram

// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D%5B%5D=strings

/**
 * Count how many characters have to be deleted in both string
 * in order to get anagrams.
 * @param {string} a
 * @param {string} b
 */
function makeAnagram(a, b) {
  let lettersToDelete = 0;
  let hist = new Histogram();
  for (let i = 0; i < a.length; i++) hist.inc(a[i]);
  for (let i = 0; i < b.length; i++) hist.dec(b[i]);
  for (let key in hist.map) {
    lettersToDelete += Math.abs(hist.map[key]);
  }
  return lettersToDelete;
}

class Histogram {
  constructor() {
    this.map = {};
  }
  inc(key) {
    if (this.map[key]) this.map[key]++;
    else this.map[key] = 1;
  }
  dec(key) {
    if (this.map[key]) this.map[key]--;
    else this.map[key] = -1;
  }
}

// /////////////////////////////////////////
// Alternating Characters

// https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D%5B%5D=strings

/**
 * Function counts how many pairs of equal adjacent characters
 * there are in a string.
 * @param {string} s
 */
function countPairsOfEqualAdjucentCharacters(s) {
  let l = s.length;
  if ((l == 0) || (l == 1)) return 0;
  l -= 1;
  let duplicates = 0;
  while (l--) {
      if (s.charAt(l) == s.charAt(l + 1)) duplicates++;
  }
  return duplicates;
}

// /////////////////////////////////////////
// Check if string contain char with the same frequencies

// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

/**
 * Function check if a string fulfils the condition
 * "string contains a same amount of different characters"
 *
 * 2 violation is allowed to be
 * - single character may be presented once.
 * - some character may be presented one time more than all others.
 *
 * @param {string} s
 */
function isStringValidWithViolation(s) {
  let hist = new HistogramOfHistogram();

  for (let i = s.length; i--;) {
      hist.incFreq(s.charAt(i));
  }
  let freqs = [];
  for (let freq in hist.freqsOfFreqs) {
      freqs.push(freq);
  }
  if (freqs.length == 1) return 'YES';
  else if (freqs.length > 2) return 'NO';
  else {
      let alone;
      if (hist.freqsOfFreqs[freqs[0]] == 1) {
          alone = 0;
      } else if (hist.freqsOfFreqs[freqs[1]] == 1) {
          alone = 1;
      } else {
          return 'NO';
      }
      if (Math.abs(freqs[0] - freqs[1]) == 1) return 'YES';
      if (freqs[alone] == 1) return 'YES';
      return 'NO';
  }
}

class HistogramOfHistogram {
  constructor() {
      this.freqs = {}; // occurrences of a key (char)
      this.freqsOfFreqs = {}; // occurencies of occurrences
  }
  incFreq(key) {
      if (this.freqs[key]) {
          this.decFreqOfFreq(this.freqs[key]);
          this.freqs[key]++;
          this.incFreqOfFreq(this.freqs[key]);
      } else {
          this.freqs[key] = 1;
          this.incFreqOfFreq(1);
      }
  }
  decFreq(key) {
      if (this.freqs[key] == 1) {
          this.decFreqOfFreq(1);
          delete this.freqs[key];
      }
      else if (this.freqs[key]) {
          this.decFreqOfFreq(this.freqs[key]);
          this.freqs[key]--;
          this.incFreqOfFreq(this.freqs[key]);
      }
  }
  incFreqOfFreq(key) {
      if (this.freqsOfFreqs[key]) this.freqsOfFreqs[key]++;
      else this.freqsOfFreqs[key] = 1;
  }
  decFreqOfFreq(key) {
      if (this.freqsOfFreqs[key] == 1) delete this.freqsOfFreqs[key];
      else if (this.freqsOfFreqs[key]) this.freqsOfFreqs[key]--;
  }
}

// /////////////////////////////////////////
// Count possible palindroms

// https://www.hackerrank.com/challenges/special-palindrome-again/problem?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D%5B%5D=strings

/**
 * Function searches all possible palindroms in a string
 * and returns their amount.
 * Palindrom is
 * - `a`, `aaaaa` - string containing the same characters.
 * - `aca`, `ddadd` - string containing the same characters with
 * one exception in a middle.
 *
 * @param {string} s - string to check.
 * @returns {number} Count of possible palindroms.
 */
function countSubstringPalindroms(s) {
  if ((s.length == 1) || (s.length == 0)) return s.length;
  let count = 0;

  // fill up character occurrences
  let i = s.length - 1;
  let pairs = [new Pair(s[i], 1), undefined, undefined];
  while (i--) {
      if (pairs[0].key == s[i]) {
          pairs[0].value++;
      } else {
          // count up possible palindroms for a compressed char0
          // if a string is `aaa` then it has 3 `a`, 2 `aa` and 1 `aaa`
          // substring, so if string.length is 3 then amount of polindroms
          // is `1 + 2 + 3`, same like a sum from 1 up to 3.
          // Any sequence from 1 to N has sum of `N * (N + 1) / 2`.
          count += pairs[0].value * (pairs[0].value + 1) / 2;
          // check if strings like `aba` (with extra character in a middle)
          // are presented
          if (pairs[2]) {
              if ((pairs[0].key == pairs[2].key) && (pairs[1].value == 1)) {
                  count += Math.min(pairs[0].value, pairs[2].value);
              }
          }
          // save old and new character
          pairs[2] = pairs[1];
          pairs[1] = pairs[0];
          pairs[0] = new Pair(s[i], 1);
      }
  }
  // count up possible palindroms for a compressed char (pair[0])
  count += pairs[0].value * (pairs[0].value + 1) / 2;
  // check if strings like `aba` (with extra character in a middle)
  // are presented
  if (pairs[2]) {
      if ((pairs[0].key == pairs[2].key) && (pairs[1].value == 1)) {
          count += Math.min(pairs[0].value, pairs[2].value);
      }
  }

  return count;
}

// /////////////////////////////////////////
// Longest common subsequence

// https://www.hackerrank.com/challenges/common-child/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

/**
 * Function returns the length of a longest common subsequence (LCS)
 * of 2 strings.
 * https://en.wikipedia.org/wiki/Longest_common_subsequence_problem
 *
 * Example:
 * LCS of 'ABCD' and 'BDAC' are `BD` && `AC`.
 * @param {string} s1
 * @param {string} s2
 * @returns {number} Length of a LCS.
 */
function lengthOfLongestCommonSubsequence(s1, s2) {
  let table = new Array(s1.length + 1).fill()
      .map(() => new Array(s2.length + 1).fill(0));

  for (let i = 1; i <= s1.length; i++) {
      for (let j = 1; j <= s2.length; j++) {
          if (s1[i-1] == s2[j-1]) {
              table[i][j] = table[i - 1][j - 1] + 1;
          } else {
              table[i][j] = Math.max(table[i][j - 1], table[i - 1][j]);
          }
      }
  }
  return table[s1.length][s2.length];
}

/**
 * Function returns the length of a longest common subsequence (LCS)
 * of 2 strings.
 * https://en.wikipedia.org/wiki/Longest_common_subsequence_problem
 *
 * Example:
 * LCS of 'ABCD' and 'BDAC' are `BD` && `AC`.
 *
 * Optimization:
 * Function uses 2D Array with only 2 rows and `s2.length` columns.
 *
 * @param {string} s1
 * @param {string} s2
 * @returns {number} Length of a LCS.
 */
function lengthOfLongestCommonSubsequenceOptimized(s1, s2) {
  let table = new Array(2).fill()
      .map(() => new Array(s2.length + 1).fill(0));

  for (let i = 1; i <= s1.length; i++) {
      let row = i % 2;
      let oldRow = (i - 1) % 2;
      for (let j = 1; j <= s2.length; j++) {
          if (s1[i-1] == s2[j-1]) {
              table[row][j] = table[oldRow][j - 1] + 1;
          } else {
              table[row][j] = Math.max(table[row][j - 1], table[oldRow][j]);
          }
      }
  }
  return table[s1.length % 2][s2.length];
}

/**
 * Function returns a longest common subsequence (LCS)
 * of 2 strings.
 * https://en.wikipedia.org/wiki/Longest_common_subsequence_problem
 *
 * Example:
 * LCS of 'ABCD' and 'BDAC' are `BD` && `AC`.
 * @param {string} s1
 * @param {string} s2
 * @returns {string} LCS.
 */
function longestCommonSubsequence(s1, s2) {
  let table = new Array(2).fill()
      .map(() => new Array(s2.length + 1).fill(""));

  for (let i = 1; i <= s1.length; i++) {
      let row = i % 2;
      let oldRow = (i - 1) % 2;
      for (let j = 1; j <= s2.length; j++) {
          if (s1[i-1] == s2[j-1]) {
              table[row][j] = table[oldRow][j - 1] + s2[j-1];
          } else {
              if (table[row][j - 1].length > table[oldRow][j].length) {
                  table[row][j] = table[row][j - 1];
              } else {
                  table[row][j] = table[oldRow][j];
              }
          }
      }
  }
  return table[s1.length % 2][s2.length];
}

