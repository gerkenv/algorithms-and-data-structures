const expect = require('chai').expect;
const heapSort = require('../../dist/algorithms/heap-sort').heapSort;
const isSorted =
  require('../../dist/algorithms/utilities').isSorted;

describe('heapSort', function() {
  it('should sort a random array in ascending order with default comparator', () => {
    let array = [];
    for (let i = 0; i < 100; i++) {
      array[i] = Math.floor(100 * Math.random());
    }
    heapSort(array);
    const result = isSorted(array);
    expect(result).to.be.true;
  });
  it('should sort a random array in descending order with specified comparator', () => {
    let array = [];
    for (let i = 0; i < 100; i++) {
      array[i] = Math.floor(100 * Math.random());
    }
    const larger = (a, b) => (a >= b);
    heapSort(array, larger);
    const result = isSorted(array, larger);
    expect(result).to.be.true;
  });
});