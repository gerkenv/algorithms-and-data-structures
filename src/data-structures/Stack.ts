import { SinglyLinkedList } from './LinkedList';
import { ResizingArray } from './ResizingArray';

/**
 * Stack interface
 */
interface IStack {
  length() : number;
  push(item : any) : void;
  pop() : any;
  peek() : any;
}

/**
 * Stack based (LIFO bag) on singly linked list.
 */
export class StackOnSinglyLinkedList implements IStack {
  private _items : SinglyLinkedList;
  /**
   * Create a new empty stack.
   */
  constructor() {
    this._items = new SinglyLinkedList();
  }

  /**
   * Returns a size of an array;
   */
  length() : number {
    return this._items.length();
  }

  /**
   * Push a new `item` at the top of a stack.
   * @param item - data to store in a stack.
   * @returns nothing
   */
  push = (item : any) : void => {
    this._items.unshift(item);
  }

  /**
   * Take a top `item` and remove it from a stack.
   * @returns `item` - data, that was stored at the top.
   * @return `undefined` - if a stack is empty.
   */
  pop = () : any => {
    return this._items.shift();
  }

  /**
   * Take a top `item` without removing it from a stack.
   * @returns `item` - data, that was stored at the top.
   * @return `undefined` - if a stack is empty.
   */
  peek = () : any => {
    return this._items.peekFirst();
  }
}

/**
 * Stack based (LIFO bag) on resizing array.
 */
export class StackOnResizingArray implements IStack{
  private _items : ResizingArray;
  /**
   * Create a new empty stack.
   */
  constructor() {
    this._items = new ResizingArray();
  }

  /**
   * Returns a size of an array;
   */
  length() : number {
    return this._items.length();
  }

  /**
   * Push a new `item` at the top of a stack.
   * @param item - data to store in a stack.
   * @returns nothing
   */
  push = (item : any) : void => {
    this._items.unshift(item);
  }

  /**
   * Take a top `item` and remove it from a stack.
   * @returns `item` - data, that was stored at the top.
   * @return `undefined` - if a stack is empty.
   */
  pop = () : any => {
    return this._items.shift();
  }

  /**
   * Take a top `item` without removing it from a stack.
   * @returns `item` - data, that was stored at the top.
   * @return `undefined` - if a stack is empty.
   */
  peek = () : any => {
    return this._items.peekFirst();
  }
}
