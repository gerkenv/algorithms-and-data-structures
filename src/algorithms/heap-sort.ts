import { swap, Comparator } from "../../src/algorithms/utilities";

/**
 * In-place heap-sort.
 * @param array - an `array` to sort.
 * @param compare - a comparator function for a custom sorting.
 * default comparator is `less`. So an array is sorted in ascending order.
 *
 * Time complexity O(n lg n)
 * Extra space complexity O(1)
 * Sorting is not stable.
 */
export function heapSort( array : number[], compare = less ) {
  let indexOfLast = array.length - 1;
  for (let k = ~~((indexOfLast - 1) / 2); k >= 0; k--) {
    sink(array, k, indexOfLast, compare);
  }
  while(indexOfLast > 0) {
    swap(array, 0, indexOfLast--);
    sink(array, 0, indexOfLast, compare);
  }
}

/**
 * Function checks if an element of a heap is faulty-compared to its
 * child and then swaps them, then the same repeats for all further
 * children.
 * @param array - an `array` with elements.
 * @param index - `index` of element to compare.
 * @param indexOfLast - position of last element in array.
 * @param compare - a comparator interface.
 */
function sink(
  array : number[],
  index : number,
  indexOfLast : number,
  compare : Comparator
  ) {
  // check if left child of `index` is within `array`
  while(2 * index + 1 <= indexOfLast) {
    // get left child
    let child = 2 * index + 1;
    // check if right child is presented and less than left one
    if ((child < indexOfLast) && (compare(array[child], array[child + 1])))
      child++;
    // check if parent is not smaller than a larger child
    if (!compare(array[index], array[child])) break;
    // exchange parent with a child
    swap(array, index, child);
    // continue to sink
    index = child;
  }
}

/**
 * Check if `a` is less than `b`.
 * @param a 
 * @param b 
 */
function less(a : any, b : any) : boolean {
  return a < b;
}