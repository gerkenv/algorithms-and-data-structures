/**
 * Union-find class with quick `find`.
 * Class represents 'Union-find' data type also known as 'disjoint data set'.
 *
 * The union–find data type models connectivity among a set of `n`
 * elements, named `0` through `n–1`.
 * All elements that are connected with each other represent one group.
 *
 * Initially each element represents its own group.
 * - `union` operation combines groups together.
 * - `find` operation returns a unique group identifier (group root).
 * - `connected` operation returns `true` if elements belong to the same group.
 *
 * Time complexity:
 * - Initialization - linear time.
 * - `union` - linear time.
 * - `find` - constant time.
 * - `connected` - constant time.
 */
export class UnionFindQuickFind {
  private _array: number[];
  /**
   * Create a union-find structure.
   * @param size - quantity of elements in a structure.
   */
  constructor(size : number) {
    for (let i : number = 0; i < size; i++) {
      this._array[i] = i;
    }
  }

  /**
   * Find out to which group belongs element.
   * @param element - element to search.
   * @returns - union / component unique identifier.
   */
  find = (element : number) : number => {
    return this._array[element];
  }

  /**
   * Check if two elements are connected.
   * @param elementA - some element of structure.
   * @param elementB - another element of structure.
   * returns - `true` if elements belong to the same group.
   */
  connected = (elementA : number, elementB : number) : boolean => {
    return this._array[elementA] === this._array[elementB];
  }

  /**
   * Unite groups of 2 elements together.
   * @param elementA - some element of structure.
   * @param elementB - another element of structure.
   */
  union = (elementA : number, elementB : number) : void => {
    let idA : number = this._array[elementA];
    let idB : number = this._array[elementB];
    for (let i : number = 0; i < this._array.length; i++) {
      if (this._array[i] == idA) this._array[i] = idB;
    }
  }
}


/**
 * Union-find class with quick `union`.
 * Class represents 'Union-find' data type also known as 'disjoint data set'.
 *
 * The union–find data type models connectivity among a set of `n`
 * elements, named `0` through `n–1`.
 * All elements that are connected with each other represent one group.
 *
 * Initially each element represents its own group.
 * - `union` operation combines groups together.
 * - `find` operation returns a unique group identifier (group root).
 * - `connected` operation returns `true` if elements belong to the same group.
 *
 * Time complexity:
 * - Initialization - linear time.
 * - `union` - linear time.
 * - `find` - linear time.
 * - `connected` - linear time.
 */
export class UnionFindQuickUnion {
  private _array: number[];
  /**
   * Create a union-find structure.
   * @param size - quantity of elements in a structure.
   */
  constructor(size : number) {
    for (let i : number = 0; i < size; i++) {
      this._array[i] = i;
    }
  }

  /**
   * Find out to which group belongs element.
   * @param element - element to search.
   * @returns - union / component unique identifier.
   */
  find = (element : number) : number => {
    return this.root(element);
  }

  /**
   * Get group root
   * @param element - element to examine.
   * @returns - union / component unique identifier.
   */
  private root = (element : number) : number => {
    while (element !== this._array[element]) element = this._array[element];
    return element;
  }

  /**
   * Check if two elements are connected.
   * @param elementA - some element of structure.
   * @param elementB - another element of structure.
   * returns - `true` if elements belong to the same group.
   */
  connected = (elementA : number, elementB : number) : boolean => {
    return this.root(elementA) === this.root(elementB);
  }

  /**
   * Unite groups of 2 elements together.
   * @param elementA - some element of structure.
   * @param elementB - another element of structure.
   */
  union = (elementA : number, elementB : number) : void => {
    let idA : number = this.root(elementA);
    let idB : number = this.root(elementB);
    this._array[idA] = idB;
  }
}
