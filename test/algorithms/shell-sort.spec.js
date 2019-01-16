const shellSort
  = require('../../src/algorithms/shell-sort').shellSort;
const expect = require('chai').expect;
const isSortedInAscendingOrder
  = require('../../dist/algorithms/utilities').isSortedInAscendingOrder;

describe('shellSort', function() {
  it('should sort a random array in ascending order', () => {
    let array = [];
    for (let i = 0; i < 100; i++) {
      array[i] = Math.floor(100 * Math.random());
    }
    shellSort(array);
    const result = isSortedInAscendingOrder(array);
    expect(result).to.be.true;
  });
});