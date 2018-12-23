const Node = require('../../dist/data-structures/LinkedList').Node;
const ResizingArray = require('../../dist/data-structures/ResizingArray').ResizingArray;
const SinglyLinkedList = require('../../dist/data-structures/LinkedList').SinglyLinkedList;

/**
 * Queue collection (FIFO bag) based on nodes with single link.
 */
class QueueOnSinglyLinkedList {
  /**
   * Create a new empty queue.
   */
  constructor() {
    this._items = new SinglyLinkedList();
  }
  /**
   * Returns the number of element in a queue.
   */
  length() {
    return this._items.length();
  }
  /**
   * Add an `item` to the end of a queue.
   * @param {*} item - an `item` to add to the end of a queue.
   * @returns nothing.
   */
  enqueue(item) {
    this._items.push(item);
  }
  /**
   * Takes an `item` and removes it from a beginning of a queue.
   * @returns {*} `item` - an item that was first in a queue.
   * @returns {undefined} - if a queue is empty.
   */
  dequeue() {
    return this._items.shift();
  }
}

module.exports.QueueOnSinglyLinkedList = QueueOnSinglyLinkedList;

/**
 * Queue collection (FIFO bag) based on nodes with single link.
 */
class QueueOnResizingArray {
  /**
   * Create a new empty queue.
   */
  constructor() {
    this._items = new ResizingArray();
  }
  /**
   * Returns the number of element in a queue.
   */
  length() {
    return this._items.length();
  }
  /**
   * Add an `item` to the end of a queue.
   * @param {*} item - an `item` to add to the end of a queue.
   * @returns nothing.
   */
  enqueue(item) {
    this._items.push(item);
  }
  /**
   * Takes an `item` and removes it from a beginning of a queue.
   * @returns {*} `item` - an item that was first in a queue.
   */
  dequeue() {
    return this._items.shift();
  }
}

module.exports.QueueOnResizingArray = QueueOnResizingArray;