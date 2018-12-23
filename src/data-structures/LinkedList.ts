/**
 * Class that keeps some data and reference to next node.
 */
export class Node {
  // public data : any; // public by default
  data : any;
  next : Node;
  // get next() : Node { return this._next; }
  // set next(node : Node) { this._next = node; }

  /**
   * Create a new node.
   * @param data - a data to keep in new node.
   */
  constructor(data : any) {
    this.data = data;
    this.next = undefined;
  }
}

/**
 * Linked list with single link (one direction iteration).
 */
export const SinglyLinkedList = class {
  private _head : Node;
  private _tail : Node;
  private _size : number;

  /**
   * Create a new linked list with single direction links
   */
  constructor() {
      this._head = undefined;
      this._tail = undefined;
      this._size = 0;
  }

  length() : number {
    return this._size;
  }

  isEmpty() : boolean {
    return (this._head === undefined);
  }

  peekFirst = () : any => {
    if (this.isEmpty()) return undefined;
    return this._head.data;
  }

  /**
   * Get a data from the end of a linked list.
   * @returns undefined - if list is empty
   * @returns `data` - a data that was stored at the end of list
   */
  peekLast = () : any => {
    if (this.isEmpty()) return undefined;
    return this._tail.data;
  }

  /**
   * Insert a node at the end of a linked list
   * @param data - a data to keep in at the end.
   */
  push = (data : any) : void => {
    let node = new Node(data);
    if (!this.isEmpty()) {
      this._tail.next = node;
    } else {
    this._head = node;
    }
    this._tail = node;
    this._size++;
  }

  /**
   * Get a data from the end of a linked list and remove it from list
   * @returns undefined - if list is empty
   * @returns `data` - a data that was stored at the end of list
   */
  pop = () : any => {
    if (this.isEmpty()) return undefined;
    let node = this._head;
    this._size--;
    if (this._head.next === undefined) {
      this._head = undefined;
      this._tail = undefined;
      return node.data;
    }
    while(node.next.next !== undefined) { node = node.next; }
    let removed = node.next;
    node.next = undefined;
    return removed.data;
  }

  /**
   * Insert a data at the beginning of a linked list
   * @param data - a data to keep at the beginning of a list.
   */
  unshift = (data : any) : void => {
    let node = new Node(data);
    node.next = this._head;
    this._head = node;
    if (undefined === this._tail) {
      this._tail = this._head;
    }
    this._size++;
  }

  /**
   * Get a data from the the beginning of a linked list and remove it from list
   * @returns undefined - if list is empty
   * @returns `data` - a data that was stored at the beginning of list
   */
  shift = () : any => {
    if (this.isEmpty()) return undefined;
    let node = this._head;
    this._head = this._head.next
    if (this._head === undefined) {
      this._tail = undefined;
    }
    this._size--;
    return node.data;
  }
};
