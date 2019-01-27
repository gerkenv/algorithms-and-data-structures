// /////////////////////////////////////////
// Count The Occurrence Of A Character In A String

// https://stackoverflow.com/questions/881085/count-the-number-of-occurrences-of-a-character-in-a-string-in-javascript)

(function(){
  let matches = (s.match(/a/g) || []).length;
})();

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
  let l = text.length - 1;
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
