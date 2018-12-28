const mergeSort
  = require('../../src/algorithms/merge-sort-bottom-up').mergeSort;
const expect = require('chai').expect;
const isSortedInAscendingOrder
  = require('../../src/algorithms/utilities').isSortedInAscendingOrder;

describe('mergeSort (bottom-up)', function() {
  it('should sort a random array in ascending order', () => {
    let array = [];
    for (let i = 0; i < 10; i++) {
      array[i] = Math.floor(100 * Math.random());
    }
    mergeSort(array);
    const result = isSortedInAscendingOrder(array);
    expect(result).to.be.true;
  });
});