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
