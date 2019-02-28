
// Debug function
function some(s) {
  console.log(s);
}

some('debug on air');


class Dict {
  constructor() {
      this.map = {};
      this.size = 0;
  }
  add(key, value) {
      if (undefined === this.map[key]) {
          this.map[key] = [];
          this.size++;
      }
      this.map[key].push(value);
  }
  remove(key, value) {
      if (!(undefined === this.map[key])) {
          this.map[key] = this.map[key].filter(element => element != value);
          if (this.map[key].length == 0) {
              delete this.map[key];
              this.size++;
          }
      }
  }
  get(key) {
      return this.map[key];
  }
  getMin(key) {
      if (!(undefined === this.map[key])) {
          return this.map[key].reduce((a, b) => {
              if (a < b) return a;
              else return b;
          });
      }
  }
  getMax(key) {
    if (!(undefined === this.map[key])) {
        return this.map[key].reduce((a, b) => {
            if (a > b) return a;
            else return b;
        });
    }
  }
}

// Complete the reverseShuffleMerge function below.
function reverseShuffleMerge(s) {

  // Part 1. Get help structures

  // convert to array
  s = s.split('');
  // get map / dictionary of char indexes
  let dict = new Dict();
  // fill up the dictionary
  for (let i = 0; i < s.length; i++) {
      dict.add(s[i], i);
  }

  // get map / dictionary of required amount of chars
  let amountOfChar = {};
  // set required amount
  for (let key in dict.map) {
    amountOfChar[key] = dict.get(key).length / 2;
  }

  // Part 2. Find minimal characters iteratively

  let result = [];
  let minChar = undefined;
  // iterate back
  for (let i = s.length - 1; i >= 0; i--) {
    // skip removed letters
    if (s[i] === undefined) continue;
    // get new minChar value (reverted logic to handle `undefined`)
    if (!(s[i] >= minChar)) minChar = s[i];
    // check if that is a last occurrence of a char in a string
    if (dict.getMin(s[i]) == i) {
        // add found minChar to result array
        result.push(minChar);
        // decrement amount of left chars
        amountOfChar[minChar]--;
        // get highest index of minChar
        let higherIndex = dict.getMax(minChar);
        // check if there are more occurences of minChar then we need
        if (dict.get(minChar).length > amountOfChar[minChar]) {
          // remove entry from index dictionary
          dict.remove(minChar, higherIndex);
          // clean up all on the right side of the higher index of minChar
          for (let j = higherIndex; j < s.length; j++ ) {
            if (s[j] === undefined) break;
            dict.remove(s[j], j);
            s[j] = undefined;
          }
        }
        // check if there are more occurrences of minChar then we need
        let minCharIndexes = dict.get(minChar);
        if ((minCharIndexes !== undefined)
        && (minCharIndexes.length > amountOfChar[minChar])) {
          // get index of lowest char
          let lowerIndex = dict.getMin(minChar);
          // delete occurence of lowest letter with lower index
          s[lowerIndex] = undefined;
          dict.remove(minChar, lowerIndex);
        }
        // set current position to higher index
        i = higherIndex;
        // reset min
        minChar = undefined;
    } else {
        // search minimum further
        continue;
    }
  }

  return result.join('');
}

// my result
// aaaaaaaacddeeeecbdbb
// aaaaaabaaceededecbdb
// should be

// var str = reverseShuffleMerge('ddeggggegg');
var str = reverseShuffleMerge('bdabaceadaedaaaeaecdeadababdbeaeeacacaba');



