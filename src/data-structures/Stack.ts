import { Node } from './LinkedList';

/**
 * Stack based on singly linked list
 * LIFO bag.
 */
export class StackOnLinkedList {
  private _first: Node;
  /**
   * Create a new empty stack.
   */
  constructor() {
    this._first = null;
  }

  /**
   * Check if a stack is empty.
   * @returns `true` - stack is empty.
   * @returns `false` - stack is not empty.
   */
  isEmpty = () : boolean => {
    return (this._first == null);
  }

  /**
   * Push a new `item` at the top of a stack.
   * @param item - data to store in a stack.
   * @returns nothing
   */
  push = (item : any) : void => {
    let oldFirst : Node = this._first;
    this._first = new Node(item);
    this._first.next = oldFirst;
  }

  /**
   * Take a top `item` and remove it from a stack.
   * @returns `item` - data, that was stored at the top.
   * @return `undefined` - if a stack is empty.
   */
  pop = () : any => {
    if (this.isEmpty) return undefined;
    let item : any = this._first.data;
    this._first = this._first.next;
    return item;
  }

  /**
   * Take a top `item` without removing it from a stack.
   * @returns `item` - data, that was stored at the top.
   * @return `undefined` - if a stack is empty.
   */
  peek = () : any => {
    if (this.isEmpty) return undefined;
    return this._first.data;
  }
}

/**
 * Stack based on array
 * LIFO bag.
 */
export class StackOnArray {
  private _items : any[];
  private _n : number;

  /**
   * Create a new empty stack.
   */
  constructor() {
    this._n = 0;
  }

  /**
   * Check if a stack is empty.
   * @returns `true` - stack is empty.
   * @returns `false` - stack is not empty.
   */
  isEmpty = () : boolean => {
    return (this._n == 0);
  }

  /**
   * Push a new `item` at the top of a stack.
   * @param item - data to store in a stack.
   * @returns nothing
   */
  push = (item: any) : void => {
    this._items[this._n++] = item;
  }

  /**
   * Take a top `item` and remove it from a stack.
   * @returns `item` - data, that was stored at the top.
   * @return `undefined` - if a stack is empty.
   */
  pop = () : any => {
    if (this.isEmpty) return null;
    let item = this._items.pop();
    this._n--;
    return item;
  }

  /**
   * Take a top `item` without removing it from a stack.
   * @returns `item` - data, that was stored at the top.
   * @return `undefined` - if a stack is empty.
   */
  peek = () : any => {
    if (this.isEmpty) return undefined;
    return this._items[this._n-1].data;
  }
}

