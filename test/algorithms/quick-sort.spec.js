const quickSort
  = require('../../src/algorithms/quick-sort').quickSort;
const expect = require('chai').expect;
const isSortedInAscendingOrder
  = require('../../src/algorithms/utilities').isSortedInAscendingOrder;

describe('quickSort', function() {
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