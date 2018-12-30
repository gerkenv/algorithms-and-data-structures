const quickSelect
  = require('../../src/algorithms/quick-select').quickSelect;
const quickSort
  = require('../../src/algorithms/quick-sort-2-way').quickSort;
const expect = require('chai').expect;
const isSortedInAscendingOrder
  = require('../../src/algorithms/utilities').isSortedInAscendingOrder;

describe('quickSelect', function() {
  it('should get n-th lowest element from array as if it would be sorted in ascending order', () => {
    let array = [];
    for (let i = 0; i < 100; i++) {
      array[i] = Math.floor(100 * Math.random());
    }
    let sorted = [...array];
    quickSort(sorted);
    for (let i = 0; i < 100; i++) {
      const result = quickSelect(array, i);
      expect(result).to.be.equal(sorted[i]);
    }
  });
});