/**
 * Class that keeps some data and reference to next node.
 */
export class Node {
  // public data : any; // public by default
  data : any;
  next : Node;
  // private _next : Node;
  // get next() : Node { return this._next; }
  // set next(node : Node) { this._next = node; }

  /**
   * Create a new node.
   * @param data - a data to keep in new node.
   */
  constructor(data : any) { this.data = data; }
}

/**
 * Linked list with single link (one direction iteration).
 */
const SinglyLinkedList = class {
  private _head : Node;
  private _tail : Node;
  private _count : number;

  /**
   * Create a new linked list with single direction links
   */
  constructor() {
      this._head = null;
      this._tail = null;
      this._count = 0;
  }

  isEmpty() : boolean {
    return (this._head === null);
  }

  Head = () : Node => {
    return this._head;
  }

  Tail = () : Node => {
    return this._tail;
  }

  /**
   * Insert a node at the end of a linked list
   * @param data - a data to keep in new node.
   * @returns node - inserted node
   */
  insertNodeAtTail = (data : any) : Node => {
    let node = new Node(data);
    if (!this.isEmpty()) {
      this._tail.next = node;
    } else {
    this._head = node;
    }
    this._tail = node;
    this._count++;
    return this._tail;
  }

  /**
   * Remove a node from the end of a linked list
   * @param data - a data to keep in new node.
   * @returns null - if list is empty
   * @returns node - removed node
   */
  removeNodeAtTail = () : Node => {
    if (this.isEmpty) return null;
    let node = this._head;
    this._count--;
    if (this._head.next === null) {
      this._head = null;
      this._tail = null;
      return node;
    }
    while(node.next.next !== null) { node = node.next; }
    let removed = node.next;
    node.next = null;
    return removed;
  }

  /**
   * Insert a node at the beginning of a linked list
   * @param data - a data to keep in new node.
   * @returns node - inserted node
   */
  insertNodeAtHead = (data : any) : Node => {
    let node = new Node(data);
    node.next = this._head;
    this._head = node;
    if (null === this._tail) {
      this._tail = this._head;
    }
    this._count++;
    return this._head;
  }

  /**
   * Remove a node from the beginning of a linked list
   * @param data - a data to keep in new node.
   * @returns null - if list is empty
   * @returns node - removed node
   */
  removeNodeAtHead = () : Node => {
    if (this.isEmpty) return null;
    let node = this._head;
    this._head = this._head.next
    if (this._head === null) {
      this._tail = null;
    }
    this._count--;
    return node;
  }
};
