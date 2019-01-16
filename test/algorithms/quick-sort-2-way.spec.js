const quickSort
  = require('../../src/algorithms/quick-sort-2-way').quickSort;
const expect = require('chai').expect;
const isSortedInAscendingOrder
  = require('../../dist/algorithms/utilities').isSortedInAscendingOrder;

describe('quickSort (2-way)', function() {
  it('should sort a random array in ascending order', () => {
    let array = [];
    for (let i = 0; i < 100; i++) {
      array[i] = Math.floor(100 * Math.random());
    }
    quickSort(array);
    const result = isSortedInAscendingOrder(array);
    expect(result).to.be.true;
  });
});