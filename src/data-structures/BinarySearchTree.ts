import { ResizingArray } from './ResizingArray';
import { Comparator } from '../algorithms/utilities';



/**
 * A node of a binary tree.
 */
export class Node<Key> {
  left : Node<Key>;
  right : Node<Key>;
  key : Key;
  value : any;
  /**
   * Create a new binary tree node.
   * @param value - a `value` to store in a node.
   * @param key - a `key` to keep a `value`s sorted.
   * @param left - reference to a left child node.
   * @param right - reference to a right child node.
   */
  constructor(key: Key, value : any, left? : Node<Key>, right? : Node<Key>) {
    this.key = key;
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/**
 * Priority queue holding maximal element at the top.
 * Based on binary heap.
 * 1- based implementation.
 */
export class BinarySearchTree<Key> {
  private _root : Node<Key>;

  /**
   * Create a new empty heap from index 1.
   */
  constructor() {
    this._root = undefined;
  }

  /**
   * Get a `value` associated with `key`.
   */
  get(key : Key) : any {
    let node = this._root;
    while (node != undefined) {
      if      (key < node.key) node = node.left;
      else if (key > node.key) node = node.right;
      else  /*key = node.key*/ return node.value;
    }
    return undefined;
  }

  /**
   * Insert a `key` with a `value` to a tree.
   * @param key - a `key` associated with `value`.
   * @param value - a `value` to store in a tree.
   */
  insert(key : Key, value : any) : void {
    this._root = this._insert(this._root, key, value);
  }

  /**
   * Returns a root node of a tree with a new node
   * containing a `key` with a `value` to a tree.
   * @param node - a root `node` of a tree to insert a new `key`.
   * @param key - a new `key` to add in a tree.
   * @param value - a `value` to store with a `key`.
   */
  private _insert(node : Node<Key>, key : Key, value : any) : Node<Key> {
    if (node == undefined) return new Node<Key>(key, value);
    if      (key < node.key) node.left = this._insert(node.left, key, value);
    else if (key > node.key) node.right = this._insert(node.right, key, value);
    else /*key = node.key*/  node.value = value;
    return node;
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