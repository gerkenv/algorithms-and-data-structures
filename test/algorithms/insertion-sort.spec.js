const insertionSort
  = require('../../src/algorithms/insertion-sort').insertionSort;
const expect = require('chai').expect;
const isSortedInAscendingOrder
  = require('../../src/algorithms/utilities').isSortedInAscendingOrder;

describe('insertionSort', function() {
  it('should sort a random array in ascending order', () => {
    let array = [];
    for (let i = 0; i < 100; i++) {
      array[i] = Math.floor(100 * Math.random());
    }
    insertionSort(array, false);
    const result = isSortedInAscendingOrder(array);
    expect(result).to.be.true;
  });
});