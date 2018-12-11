/**
 * Linked list with single link (one direction iteration).
 */
const LinkedList = class {
  constructor() {
      this.head = null;
      this.tail = null;
  }

  insertNodeAtTail = (data) => {
    let node = new LinkedListNode(data);
    if (null !== this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
    if (null === this.head) {
      this.head = this.tail;
    }
  }

  insertNodeAtHead = (data) => {
    let node = new LinkedListNode(data);
    node.next = this.head;
    this.head = null;
    if (null === this.tail) {
      this.tail = this.head;
    }
  }

};

/**
 * A node of a singly linked list.
 * @param {any} nodeData
 */
const LinkedListNode = class {
  constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
  }
};