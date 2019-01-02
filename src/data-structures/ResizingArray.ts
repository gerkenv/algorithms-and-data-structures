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
   * Get a data from the beginning of a linked list.
   * @returns undefined - if list is empty
   * @returns `data` - a data that was stored at the beginning of a list
   */
  peekFirst () : any {
    if (this.isEmpty()) return undefined;
    return this._array[this._indexOfFirst];
  }

  /**
   * Get a data from the end of a linked list.
   * @returns undefined - if list is empty
   * @returns `data` - a data that was stored at the end of a list
   */
  peekLast () : any {
    if (this.isEmpty()) return undefined;
    let indexOfLast = (this._indexOfFirst + this._size - 1) % this._capacity;
    return this._array[indexOfLast];
  }

  /**
   * Add an `item` to the end of an array.
   * @param data - a `data` to add to the end of an array.
   * @returns nothing.
   */
  push(data : any) : void {
    this._checkSize();
    let newIndex = (this._indexOfFirst + this._size) % this._capacity;
    this._array[newIndex] = data;
    this._size++;
  }

  /**
   * Removes a `data` from the end of an array.
   * @returns `data` - an item that was last in an array.
   */
  pop() : any {
    if (this.isEmpty()) return undefined;
    let indexOfLast = (this._indexOfFirst + this._size - 1) % this._capacity;
    let data = this._array[indexOfLast];
    this._array[indexOfLast] = undefined;
    this._size--;
    this._checkSize();
    return data;
  }

  /**
   * Add an `item` to the beginning of an array.
   * @param data - a `data` to add to the beginning of an array.
   * @returns nothing.
   */
  unshift(data : any) : void {
    this._checkSize();
    let newIndex = (this._indexOfFirst - 1 + this._capacity) % this._capacity;
    this._array[newIndex] = data;
    this._indexOfFirst = newIndex;
    this._size++;
  }

  /**
   * Removes a `data` from the beginning of an array.
   * @returns `data` - an item that was first in an array.
   */
  shift() {
    if (this.isEmpty()) return undefined;
    let data = this._array[this._indexOfFirst];
    this._array[this._indexOfFirst] = undefined;
    this._indexOfFirst = (this._indexOfFirst + 1) % this._capacity;
    this._size--;
    this._checkSize();
    return data;
  }

  /**
   * Get a data from a certain `index`.
   * @param index - a certain positive `index` in array (starting from 0).
   * @returns undefined - if `index` is not presented in array.
   * @returns `data` - a data that was stored at certain `index`.
   */
  get (index : number) : any {
    if (index == null) return undefined;
    if ((index < 0) || (index >= this._size)) return undefined;
    let circularIndex = (this._indexOfFirst + index) % this._capacity;
    return this._array[circularIndex];
  }

  /**
   * Set a data to a certain `index`.
   * @param index - a certain positive `index` in array (starting from 0).
   * @param data - a data that will be set to a certain `index`.
   */
  set(index : number, data : any) : void {
    if (index == null) return;
    if (index < 0) return;

    if (index >= this._capacity) {
      let newCapacity = this._capacity;
      while (index + 1 > newCapacity) { newCapacity *= 2;}
      this._resizeArray(newCapacity);
    }
    // if (index >= this._size) {
    //   this._size = index + 1;
    // }
    while (index > this._size) {
      let undefinedIndex = (this._indexOfFirst + this._size) % this._capacity;
      this._array[undefinedIndex] = undefined;
      this._size++;
    }
    let circularIndex = (this._indexOfFirst + index) % this._capacity;
    this._array[circularIndex] = data;
    this._size++;
  }

  /**
   * Exchange the position (indexes) of array elements.
   * @param indexA - an index of element A
   * @param indexB - an index of element B
   * @throws `Error` if some index is out of valid range [0, this.length()].
   */
  exchange(indexA : number, indexB : number) {
    if ((indexA < 0) || (indexA >= this._size))
      throw new Error(`Index A is out of range [0, ${this._size - 1}]`);
    if ((indexB < 0) || (indexB >= this._size))
      throw new Error(`Index B is out of range [0, ${this._size - 1}]`);

    let value = this._array[indexA];
    this._array[indexA] = this._array[indexB];
    this._array[indexB] = value;
  }

  /**
   * Check if element A is less than element B in array.
   * @param indexA - an index of element A
   * @param indexB - an index of element B
   * @throws `Error` if some index is out of valid range [0, this.length()].
   */
  less(indexA : number, indexB : number) {
    if ((indexA < 0) || (indexA >= this._size))
      throw new Error(`Index A is out of range [0, ${this._size - 1}]`);
    if ((indexB < 0) || (indexB >= this._size))
      throw new Error(`Index B is out of range [0, ${this._size - 1}]`);

      return this._array[indexA] < this._array[indexB];
  }
}