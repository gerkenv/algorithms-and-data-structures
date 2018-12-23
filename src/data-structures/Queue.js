const Node = require('../../dist/data-structures/LinkedList').Node;
const ResizingArray = require('../../dist/data-structures/ResizingArray').ResizingArray;

/**
 * Queue collection (FIFO bag) based on nodes with single link.
 */
class QueueOnLinkedList {
  /**
   * Create a new empty queue.
   */
  constructor() {
    this._first = undefined;
    this._last = undefined;
  }

  /**
   * Check if a queue is empty.
   * @returns `true` - queue is empty.
   * @returns `false` - queue is not empty.
   */
  isEmpty() {
    return (this._first == undefined);
  }

  /**
   * Add an `item` to the end of a queue.
   * @param {*} item - an `item` to add to the end of a queue.
   * @returns nothing.
   */
  enqueue(item) {
    let oldLast = this._last;
    this._last = new Node(item);
    if (this.isEmpty()) {
      this._first = this._last;
    } else {
      oldLast.next = this._last;
    }
  }

  /**
   * Takes an `item` and removes it from a beginning of a queue.
   * @returns {*} `item` - an item that was first in a queue.
   */
  dequeue() {
    if (this.isEmpty()) return undefined;
    let item = this._first.data;
    this._first = this._first.next;
    if (this.isEmpty()) this._last = undefined;
    return item;
  }
}

module.exports.QueueOnLinkedList = QueueOnLinkedList;

/**
 * Queue collection (FIFO bag) based on nodes with single link.
 */
class QueueOnArray {
  /**
   * Create a new empty queue.
   */
  constructor() {
    this._items = new ResizingArray();
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
    return this._items.unshift;
  }
}

module.exports.QueueOnArray = QueueOnArray;