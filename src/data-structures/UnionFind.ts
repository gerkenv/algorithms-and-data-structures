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
  private _nodes: number[];
  /**
   * Create a union-find structure.
   * @param size - quantity of elements in a structure.
   */
  constructor(size : number) {
    for (let i : number = 0; i < size; i++) {
      this._nodes[i] = i;
    }
  }

  /**
   * Find out to which group belongs element.
   * @param element - element to search.
   * @returns - union / component unique identifier / root element.
   */
  find = (element : number) : number => {
    this.validateIndex(element);
    return this._nodes[element];
  }

  /**
   * Check index boundaries
   * @param element - element to search.
   */
  private validateIndex = (element : number) : void => {
    if ((element < 0) || (element >= this._nodes.length)) {
      throw `Index ${element} is out of valid range [0, ${this._nodes.length}]`;
    }
  }

  /**
   * Check if two elements are connected.
   * @param elementA - some element of structure.
   * @param elementB - another element of structure.
   * returns - `true` if elements belong to the same group.
   */
  connected = (elementA : number, elementB : number) : boolean => {
    return this.find(elementA) === this.find(elementB);
  }

  /**
   * Unite groups of 2 elements together.
   * @param elementA - some element of structure.
   * @param elementB - another element of structure.
   */
  union = (elementA : number, elementB : number) : void => {
    let idA : number = this.find(elementA);
    let idB : number = this.find(elementB);
    for (let i : number = 0; i < this._nodes.length; i++) {
      if (this._nodes[i] == idA) this._nodes[i] = idB;
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
  private _nodes: number[];
  /**
   * Create a union-find structure.
   * @param size - quantity of elements in a structure.
   */
  constructor(size : number) {
    for (let i : number = 0; i < size; i++) {
      this._nodes[i] = i;
    }
  }

  /**
   * Find out to which group belongs element.
   * @param element - element to search.
   * @returns - union / component unique identifier / root element.
   */
  find = (element : number) : number => {
    this.validateIndex(element);
    while (element !== this._nodes[element]) element = this._nodes[element];
    return element;
  }

  /**
   * Check index boundaries
   * @param element - element to search.
   */
  private validateIndex = (element : number) : void => {
    if ((element < 0) || (element >= this._nodes.length)) {
      throw `Index ${element} is out of valid range [0, ${this._nodes.length}]`;
    }
  }

  /**
   * Check if two elements are connected.
   * @param elementA - some element of structure.
   * @param elementB - another element of structure.
   * returns - `true` if elements belong to the same group.
   */
  connected = (elementA : number, elementB : number) : boolean => {
    return this.find(elementA) === this.find(elementB);
  }

  /**
   * Unite groups of 2 elements together.
   * @param elementA - some element of structure.
   * @param elementB - another element of structure.
   */
  union = (elementA : number, elementB : number) : void => {
    let idA : number = this.find(elementA);
    let idB : number = this.find(elementB);
    this._nodes[idA] = idB;
  }
}


/**
 * Weighted union-find class with quick `union`.
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
 * - `union` - logarithmic time.
 * - `find` - logarithmic time.
 * - `connected` - logarithmic time.
 */
export class WeightedUnionFindQuickUnion {
  private _nodes: number[];
  private _size: number[];

  /**
   * Create a union-find structure.
   * @param size - quantity of elements in a structure.
   */
  constructor(size : number) {
    for (let i : number = 0; i < size; i++) {
      this._nodes[i] = i;
      this._size[i] = 1;
    }
  }

  /**
   * Find out to which group belongs element.
   * @param element - element to search.
   * @returns - union / component unique identifier / root element.
   */
  find = (element : number) : number => {
    this.validateIndex(element);
    while (element !== this._nodes[element]) element = this._nodes[element];
    return element;
  }

  /**
   * Check index boundaries
   * @param element - element to search.
   */
  private validateIndex = (element : number) : void => {
    if ((element < 0) || (element >= this._nodes.length)) {
      throw `Index ${element} is out of valid range [0, ${this._nodes.length}]`;
    }
  }

  /**
   * Check if two elements are connected.
   * @param elementA - some element of structure.
   * @param elementB - another element of structure.
   * returns - `true` if elements belong to the same group.
   */
  connected = (elementA : number, elementB : number) : boolean => {
    return this.find(elementA) === this.find(elementB);
  }

  /**
   * Unite groups of 2 elements together.
   * @param elementA - some element of structure.
   * @param elementB - another element of structure.
   */
  union = (elementA : number, elementB : number) : void => {
    let idA : number = this.find(elementA);
    let idB : number = this.find(elementB);
    if (idA === idB) return;
    // Pack smaller tree under the bigger tree of nodes
    if (this._size[idA] < this._size[idB]) {
      this._nodes[idA] = idB; this._size[idB] += this._size[idA];
    } else {
      this._nodes[idB] = idA; this._size[idA] += this._size[idB];
    }
  }
}


/**
 * Weighted union-find class with quick `union`.
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
 * - `union` - logarithmic time.
 * - `find` - logarithmic time.
 * - `connected` - logarithmic time.
 */
export class WeightedUnionFindQuickUnionWithPathCompressions {
  private _nodes: number[];
  private _size: number[];

  /**
   * Create a union-find structure.
   * @param size - quantity of elements in a structure.
   */
  constructor(size : number) {
    for (let i : number = 0; i < size; i++) {
      this._nodes[i] = i;
      this._size[i] = 1;
    }
  }

  /**
   * Find out to which group belongs element.
   * @param element - element to search.
   * @returns - union / component unique identifier / root element.
   */
  find = (element : number) : number => {
    this.validateIndex(element);
    while (element !== this._nodes[element]) {
      this._nodes[element] = this._nodes[this._nodes[element]];
      element = this._nodes[element];
    }
    return element;
  }

  /**
   * Check index boundaries
   * @param element - element to search.
   */
  private validateIndex = (element : number) : void => {
    if ((element < 0) || (element >= this._nodes.length)) {
      throw `Index ${element} is out of valid range [0, ${this._nodes.length}]`;
    }
  }

  /**
   * Check if two elements are connected.
   * @param elementA - some element of structure.
   * @param elementB - another element of structure.
   * returns - `true` if elements belong to the same group.
   */
  connected = (elementA : number, elementB : number) : boolean => {
    return this.find(elementA) === this.find(elementB);
  }

  /**
   * Unite groups of 2 elements together.
   * @param elementA - some element of structure.
   * @param elementB - another element of structure.
   */
  union = (elementA : number, elementB : number) : void => {
    let idA : number = this.find(elementA);
    let idB : number = this.find(elementB);
    if (idA === idB) return;
    // Pack smaller tree under the bigger tree of nodes
    if (this._size[idA] < this._size[idB]) {
      this._nodes[idA] = idB; this._size[idB] += this._size[idA];
    } else {
      this._nodes[idB] = idA; this._size[idA] += this._size[idB];
    }
  }
}