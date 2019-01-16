const selectionSort
  = require('../../src/algorithms/selection-sort').selectionSort;
const expect = require('chai').expect;
const isSortedInAscendingOrder
  = require('../../dist/algorithms/utilities').isSortedInAscendingOrder;

describe('selectionSort', function() {
  it('should sort a random array in ascending order', () => {
    let array = [];
    for (let i = 0; i < 100; i++) {
      array[i] = Math.floor(100 * Math.random());
    }
    selectionSort(array);
    const result = isSortedInAscendingOrder(array);
    expect(result).to.be.true;
  });
});