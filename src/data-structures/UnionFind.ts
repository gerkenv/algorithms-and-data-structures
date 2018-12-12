/**
 * Union-find class with quick `find` function.
 */
export class UnionFindQuickFind {
  private _array: number[];
  /**
   * Create a union-find structure.
   * @param n - quantity of elements in a structure.
   */
  constructor(n : number) {
    for (let i : number = 0; i < n; n++) {
      this._array[i] = i;
    }
  }

  /**
   * Check if two structure elements are connected.
   * @param p - certain element of structure.
   * @param q - certain element of structure.
   */
  connect = (p : number, q : number) : boolean => {
    return this._array[p] === this._array[q];
  }

  /**
   * Connect two elements in a structure.
   * @param p - certain element of a structure.
   * @param q - certain element of a structure.
   */
  union = (p : number, q : number) : void => {
    let pid : number = this._array[p];
    let qid : number = this._array[q];
    for (let i : number = 0; i < this._array.length; i++) {
      if (this._array[i] == pid) this._array[i] = qid;
    }
  }
}

