
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