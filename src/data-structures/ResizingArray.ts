
export class ResizingArray {
  private _capacity : number;
  private _size : number;
  private _indexOfFirst : number;
  private _array: any[];

  constructor() {
    this._capacity = 2;
    this._size = 0;
    this._indexOfFirst = 0;
    this._array = new Array(this._capacity);
  }

  /**
   * Check if a array is full.
   * @returns `true` - queue is empty.
   * @returns `false` - queue is not empty.
   */
  private _isFull() : boolean {
    if (this._size == this._capacity) return true;
    else return false;
  }

  /**
   * Returns a size of an array;
   */
  length() : number {
    return this._size;
  }

  /**
   * Create a new internal storage and copy elements
   * @param capacity - new capacity of items array
   */
  private _resizeArray(capacity : number) : void {
    if (capacity == 0)
      throw new Error('New capacity of an array should be bigger than 0');
    let array = new Array(capacity);
    let newIndex = 0;
    let leftElements = this._size;
    let index = this._indexOfFirst;
    while (leftElements--) {
      let circularIndex = index % this._capacity;
      array[newIndex++] = this._array[circularIndex];
      index++;
    }
    this._capacity = capacity;
    this._indexOfFirst = 0;
    this._array = array;
  }

  /**
   * Check size of internal array (extend / shrink if necessary)
   */
  private _checkSize() : void {
    if (this._isFull()) this._resizeArray(this._capacity * 2);
    else if ((this._size > 0) && (this._size * 4 <= this._capacity)) {
      this._resizeArray(this._capacity / 2);
    }
  }

  /**
   * Check if a queue is empty.
   * @returns `true` - queue is empty.
   * @returns `false` - queue is not empty.
   */
  isEmpty() : boolean {
    return (this._size == 0);
  }

  /**
   * Add an `item` to the end of an array.
   * @param data - a `data` to add to the end of an arry.
   * @returns nothing.
   */
  push(data : any) : void {
    this._checkSize();
    let newIndex = (this._indexOfFirst + this._size) % this._capacity;
    this._array[newIndex] = data;
    this._size++;
  }

  /**
   * Removes a `data` from a beginning of an array.
   * @returns `data` - an item that was first in an array.
   */
  shift() {
    if (this.isEmpty()) return undefined;
    this._checkSize();
    let data = this._array[this._indexOfFirst];
    this._array[this._indexOfFirst] = undefined;
    this._indexOfFirst = (this._indexOfFirst + 1) % this._capacity;
    this._size--;
    return data;
  }

}