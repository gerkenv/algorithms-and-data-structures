// /////////////////////////////////////////
// Multiplies of # or 5

// https://projecteuler.net/problem=1

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

/**
 * Get a factorial `n!` of a `n`.
 * @param {number} n
 * @returns {number} A factorial `n!` of `n`.
 */
function factorial(n) {
  if (n === 0 || n === 1)
      return 1;
  for (let i = n; i > 1; i--) {
      n *= i;
  }
  return n;
}

/**
 * Calculate a result of factorial division `n1! / n2!`;
 * @param {number} n1
 * @param {number} n2
 * @returns {number} returns a result of factorial division `n1! / n2!`;
 */
function divideFactorials(n1, n2) {
  let value = 1;
  if (n1 == n2) return value;
  let min = n2;
  let max = n1;
  let fraction = false;
  if (n2 > n1) {
      min = n1;
      max = n2;
      fraction = true;
  }
  for (let i = min + 1; i <= max; i++) {
      value *= i;
  }
  if (fraction) return 1 / value;
  return value;
}

/**
 * Combinations are a way to calculate the total outcomes of an event
 * where order of the outcomes does not matter. To calculate combinations,
 * we will use the formula `nCr = n! / (r! * (n - r)!)`, where `n` represents
 * the total number of items, and `r` represents the number of items being
 * chosen at a time.
 * @param {number} n - the total number of items.
 * @param {number} k - the number of items being chosen at a time.
 * @returns {number} A number of possible different outcomes.
 */
function unorderedCombination(n, k) {
  if (n - k > k) {
      return divideFactorials(n, n - k) / factorial(k);
  } else {
      return divideFactorials(n, k) / factorial(n - k);
  }
}