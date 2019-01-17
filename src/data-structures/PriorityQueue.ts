import { ResizingArray } from './ResizingArray';
import { Comparator } from '../algorithms/utilities';

/**
 * Priority queue interface
 */
interface IPriorityQueue {
  length() : number;
  insert(item : any) : void;
  removeTop() : any;
  getTop() : any;
}

/**
 * Priority queue holding maximal element at the top.
 * Based on binary heap.
 * 1- based implementation.
 */
export class BinaryHeapMax implements IPriorityQueue{
  private _items : ResizingArray;
  /**
   * Create a new empty heap from index 1.
   */
  constructor() {
    this._items = new ResizingArray();
    this._items.push(undefined);
  }

  /**
   * Get a quantity of elements in container.
   * @returns size of container.
   */
  length() : number {
    return this._items.length() - 1;
  }

  /**
   * Insert a new `item` in container.
   * @param item - a data to store in container.
   */
  insert (item : any) : void {
    this._items.set(this.length() + 1, item);
    this._swim(this.length());
  }

  /**
   * Swim up the child node at `index` if it is larger than its parents.
   * @param index - an `index` of a node to swim up.
   */
  private _swim(index : number) : void {
    while(index > 1) {
      // get index of parent node
      let parent = ~~(index/2);
      // check if parent is larger than child
      if (false == this._items.less(parent, index)) break;
      // swap a parent node with a child node
      this._items.exchange(parent, index);
      // continue swim up
      index = parent;
    }
  }

  /**
   * Sink down the parent node at `index` if it is smaller than its larger child.
   * @param index - an `index` of a node to sink down.
   */
  private _sink(index : number) : void {
    while (2 * index <= this.length()) {
      // get left child
      let child = 2 * index;
      // check if right child exists and it is larger than lef one
      if ((child < this.length()) &&  (this._items.less(child, child + 1)))
        child++;
      // check if parent is not smaller than a larger child
      if (false == this._items.less(index, child)) break;
      // swap parent and larger child
      this._items.exchange(index, child);
      // continue to sink
      index = child;
    }
  }

  /**
   * Take a top `item` and remove it from a heap.
   * @returns `item` - data, that was stored at the top.
   * @return `undefined` - if a heap is empty.
   */
  removeTop () : any {
    if (this.length() == 0) return undefined;
    let top = this._items.get(1);
    this._items.exchange(1, this.length());
    this._items.pop();
    this._sink(1);
    return top;
  }

  /**
   * Take a top `item` without removing it from a heap.
   * @returns `item` - data, that was stored at the top.
   * @return `undefined` - if a heap is empty.
   */
  getTop () : any {
    if (this.length() == 0) return undefined;
    return this._items.get(1);
  }
}


/**
 * Priority queue holding maximal element at the top. \
 * Based on binary heap. \
 * 0 - based implementation.
 */
export class BinaryHeap implements IPriorityQueue{
  private _items : ResizingArray;
  private _comparator : Comparator;
  /**
   * Create a new empty heap from index 0.
   * @param comparator - a callback to compare a child with a parent.
   * `a` represents child, `b` represents parent. The `top` element is
   * a parent that fulfills a compare condition better then any other heap
   * element. \
   * Example: \
   * So if comparator is `(a, b) => (a < b)` then a `top` element is a
   * largest element of a heap.
   */
  constructor(comparator = less) {
    this._items = new ResizingArray();
    this._comparator = comparator;
  }

  /**
   * Get a quantity of elements in container.
   * @returns size of container.
   */
  length() : number {
    return this._items.length();
  }

  /**
   * Insert a new `item` in container.
   * @param item - a data to store in container.
   */
  insert (item : any) : void {
    this._items.set(this.length(), item);
    this._swim(this.length()-1);
  }

  /**
   * Swim up the child node at `index` if it is larger than its parents.
   * @param index - an `index` of a node to swim up.
   */
  private _swim(index : number) : void {
    while(index > 0) {
      // get index of parent node
      let parent = ~~((index - 1)/2);
      // check if compare condition is faulty (parent is not less than a child)
      if (!this._compare(parent, index)) break;
      // swap a parent node with a child node
      this._items.exchange(parent, index);
      // continue swim up
      index = parent;
    }
  }

  /**
   * Sink down the parent node at `index` if it is smaller than its larger child.
   * @param index - an `index` of a node to sink down.
   */
  private _sink(index : number) : void {
    while (2 * index + 1 < this.length()) {
      // get left child
      let child = 2 * index + 1;
      // check if right child exists and it is faulty-compared to a left child
      // (the right is larger than the left one)
      if ((child + 1 < this.length()) && (this._compare(child, child + 1)))
        child++;
      // check if compare condition is faulty (parent is not less than a child)
      if (!this._compare(index, child)) break;
      // swap parent and larger child
      this._items.exchange(index, child);
      // continue to sink
      index = child;
    }
  }

  /**
   * Take a top `item` and remove it from a heap.
   * @returns `item` - data, that was stored at the top.
   * @return `undefined` - if a heap is empty.
   */
  removeTop () : any {
    if (this.length() == 0) return undefined;
    let top = this._items.get(0);
    this._items.exchange(0, this.length()-1);
    this._items.pop();
    this._sink(0);
    return top;
  }

  /**
   * Take a top `item` without removing it from a heap.
   * @returns `item` - data, that was stored at the top.
   * @return `undefined` - if a heap is empty.
   */
  getTop () : any {
    if (this.length() == 0) return undefined;
    return this._items.get(0);
  }

  /**
   * Compare to elements of heap
   * @param indexA - an index of element A
   * @param indexB - and index of element B
   */
  private _compare(indexA : number, indexB: number) {
    return this._comparator(this._items.get(indexA), this._items.get(indexB));
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