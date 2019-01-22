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
  size : number;
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
    this.size = 1;
    if (right != undefined) this.size += right.size;
    if (left  != undefined) this.size += left.size;
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
   * Check if a tree is empty.
   * @returns `true` - a tree has no nodes.
   * @returns `false` - a tree has nodes. -
   */
  isEmpty() : boolean {
    return this.size() == 0;
  }

  /**
   * Get quantity of nodes in a tree.
   * @returns - quantity of nodes in a tree.
   */
  size() : number {
    return this._size(this._root);
  }
  private _size(node : Node<Key>) : number {
    if (node == undefined) return 0;
    return node.size;
  }

  /**
   * Check if a BST contains a `key`.
   * @param key - the `key` to search.
   * @returns `true` - the `key` is found.
   * @returns `false` - the `key` is not found.
   */
  contains(key : Key) : boolean {
    if (key == undefined) throw new Error('Key is null or undefined');
    return this.get(key) != undefined;
  }

  /**
   * Get a `value` associated with `key`.
   * @throws {Error} If `key` is null or undefined.
   */
  get(key : Key) : any {
    if (key == undefined) throw new Error('Key is null or undefined');
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
   * @throws {Error} If `key` or `value` is null or undefined.
   */
  insert(key : Key, value : any) : void {
    if (key == undefined) throw new Error('Key is null or undefined');
    if (value == undefined) throw new Error('Value is null or undefined');

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
    node.size = 1 + this._size(node.left) + this._size(node.left);
    return node;
  }

  /**
   * Get a node with a smallest key from a tree.
   * @returns node with minimal available key.
   */
  min() : Node<Key> {
    if (this.isEmpty()) throw new Error("Underflow error - a tree is empty.");
    return this._min(this._root);
  }
  _min(node : Node<Key>) : Node<Key> {
    if (node.left == undefined) return node;
    return this._min(node.left);
  }

  /**
   * Get a node with a smallest key from a tree.
   * @returns node with minimal available key.
   */
  max() : Node<Key> {
    if (this.isEmpty()) throw new Error("Underflow error - a tree is empty.");
    return this._max(this._root);
  }
  _max(node : Node<Key>) : Node<Key> {
    if (node.right == undefined) return node;
    return this._max(node.right);
  }

  /**
   * Deletes a node with a smallest key from a tree.
   * @throws {Error} If a tree is empty.
   */
  deleteMin() : void {
    if (this.isEmpty()) throw new Error("Underflow error - a tree is empty.");
    this._root = this._deleteMin(this._root);
  }
  _deleteMin(node : Node<Key>) : Node<Key> {
    if (node.left == undefined) return node.right;
    node.left = this._deleteMin(node.left);
    node.size = 1 + this._size(node.left) + this._size(node.left);
    return node;
  }

  /**
   * Deletes a node with a largest key from a tree.
   * @throws {Error} If a tree is empty.
   */
  deleteMax() : void {
    if (this.isEmpty()) throw new Error("Underflow error - a tree is empty.");
    this._root = this._deleteMax(this._root);
  }
  _deleteMax(node : Node<Key>) : Node<Key> {
    if (node.right == undefined) return node.left;
    node.right = this._deleteMax(node.right);
    node.size = 1 + this._size(node.left) + this._size(node.left);
    return node;
  }

  /**
   * Delete a node from a tree by its `key`.
   * @param key - a `key` to search.
   * @throws {Error} If a tree is empty.
   */
  delete(key : Key) : void {
    if (this.isEmpty()) throw new Error("Underflow error - a tree is empty.");
    this._root = this._delete(this._root, key);
  }
  _delete(node : Node<Key>, key : Key) : Node<Key> {
    if      (key < node.key) node.left  = this._delete(node.left,  key);
    else if (key > node.key) node.right = this._delete(node.right, key);
    else /*key = node.key*/  {
      if      (node.left  == undefined) return node.right;
      else if (node.right == undefined) return node.left;
      else {
        let minFromRight = this._min(node.right);
        minFromRight.right = this._deleteMin(node.right);
        minFromRight.left = node.left;
        node = minFromRight;
      }
    }
    node.size = 1 + this._size(node.left) + this._size(node.left);
    return node;
  }

  /**
   * Get the largest key in the symbol table less than or equal to `key`.
   * @param key - a `key` to search.
   * @return the largest key in the symbol table less than or equal to `key`.
   * @throws {Error} If a tree is empty.
   * @throws {Error} If `key` is null or undefined.
   */
  floor(key : Key) : Key {
    if (key == undefined) throw new Error('Key is null or undefined');
    if (this.isEmpty()) throw new Error("Underflow error - a tree is empty.");
    let node = this._floor(this._root, key);
    if (node == undefined) return undefined;
    else return node.key;
  }
  _floor(node : Node<Key>, key : Key) : Node<Key> {
    if (node == undefined) return undefined;
    if (key == node.key) return node;
    if (key < node.key) return this._floor(node.left, key);
    let rightFloor = this._floor(node.right, key);
    if (rightFloor != undefined) return rightFloor;
    return node;
  }

  /**
   * Get the largest key in the symbol table less than or equal to `key`.
   * @param key - a `key` to search.
   * @return the largest key in the symbol table less than or equal to `key`.
   * @throws {Error} If a tree is empty.
   * @throws {Error} If `key` is null or undefined.
   */
  floor2(key : Key) : Key {
    if (key == undefined) throw new Error('Key is null or undefined');
    if (this.isEmpty()) throw new Error("Underflow error - a tree is empty.");
    return this._floor2(this._root, key, undefined);
  }
  _floor2(node : Node<Key>, key: Key, floor: Key) : Key {
    if (node == undefined) return floor;
    if      (key < node.key) return this._floor2(node.left, key, floor);
    else if (key > node.key) return this._floor2(node.right, key, node.key);
    else                     return node.key;
  }

  /**
   * Get the smallest key in the symbol table greater than or equal to `key`.
   * @param key - a `key` to search.
   * @return the smallest key in the symbol table greater than or equal to `key`.
   * @throws {Error} If a tree is empty.
   * @throws {Error} If `key` is null or undefined.
   */
  ceiling(key : Key) : Key {
    if (key == undefined) throw new Error('Key is null or undefined');
    if (this.isEmpty()) throw new Error("Underflow error - a tree is empty.");
    let node = this._ceiling(this._root, key);
    if (node == undefined) return undefined;
    else return node.key;
  }
  _ceiling(node : Node<Key>, key : Key) : Node<Key> {
    if (node == undefined) return undefined;
    if (key == node.key) return node;
    if (key > node.key) return this._ceiling(node.right, key);
    let leftCeiling = this._ceiling(node.left, key);
    if (leftCeiling != undefined) return leftCeiling;
    return node;
  }

  /**
   * Get the smallest key in the symbol table greater than or equal to `key`.
   * @param key - a `key` to search.
   * @return the smallest key in the symbol table greater than or equal to `key`.
   * @throws {Error} If a tree is empty.
   * @throws {Error} If `key` is null or undefined.
   */
  ceiling2(key : Key) : Key {
    if (key == undefined) throw new Error('Key is null or undefined');
    if (this.isEmpty()) throw new Error("Underflow error - a tree is empty.");
    return this._ceiling2(this._root, key, undefined);
  }
  _ceiling2(node : Node<Key>, key: Key, ceiling: Key) : Key {
    if (node == undefined) return ceiling;
    if      (key > node.key) return this._ceiling2(node.right, key, ceiling);
    else if (key < node.key) return this._ceiling2(node.left, key, node.key);
    else                     return node.key;
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