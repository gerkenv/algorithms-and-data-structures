/**
 * Union-find class with quick `find` function.
 */
export class UnionFindQuickFind {
  ids: number[];
  /**
   * Create a union-find structure.
   * @param n - quantity of elements in a structure.
   */
  constructor(n : number) {
    for (let i : number = 0; i < n; n++) {
      this.ids[i] = i;
    }
  }

  /**
   * Check if two structure elements are connected.
   * @param p - certain element of structure.
   * @param q - certain element of structure.
   */
  connect = (p : number, q : number) : boolean => {
    return this.ids[p] === this.ids[q];
  }

  /**
   * Connect two elements in a structure.
   * @param p - certain element of a structure.
   * @param q - certain element of a structure.
   */
  union = (p : number, q : number) : void => {
    let pid : number = this.ids[p];
    let qid : number = this.ids[q];
    for (let i : number = 0; i < this.ids.length; i++) {
      if (this.ids[i] == pid) this.ids[i] = qid;
    }
  }
}

