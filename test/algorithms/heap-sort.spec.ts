import { expect } from 'chai';
import { heapSort } from '../../src/algorithms/heap-sort';
import { isSortedInAscendingOrder, less } from '../../src/algorithms/utilities';


function useCallback(a: any, b: any, compare = less) : boolean {
  return compare(a, b);
}

describe('heapSort', function() {
  it('should sort a random array in ascending order with default comparator', () => {

    useCallback(1, 2);

    let array = [];
    for (let i = 0; i < 10; i++) {
      array[i] = Math.floor(100 * Math.random());
    }
    heapSort(array);
    const result = isSortedInAscendingOrder(array);
    expect(result).to.be.true;
  });
});