### Count number pairs in array
```js
/**
 * Count pairs of duplicates in array using `Set` object.
 */
function countDuplicatePairs(array) {
  let pairsCounter = 0;
  let elementSet = new Set();         // O(1)
  array.forEach(element => {          // O(n)
    if (elementSet.has(element)) {      // O(1)
      elementSet.delete(element);         // O(1)
      pairsCounter++;                     // O(1)
    } else {
      elementSet.add(element);            // O(1)
    }
  });
  return pairsCounter;
}

/**
 * Count pairs of duplicates in array using `Object`.
 */
function countDuplicatePairs(array) {
  let pairsCounter = 0;
  let obj = new Object();
  array.forEach(element => {
    if (obj[element]) {
      obj[element] = undefined;
      pairsCounter++;
    } else {
      obj[element] = true;
    }
  });
  return pairsCounter;
}
```

### Iterate Through String
```js
var text = 'uololooo';

// With ES6
[...text].forEach(c => console.log(c))

// With ES5
for (var index = 0; index < text.length ; index++) {
    console.log(text.charAt(index));
}

// ES5 without the for loop:
text.split('').forEach(function(c) {
    console.log(c);
});
```

### Count The Occurrence Of A Character In A String
[Top methods to count the occurrence of a character in a string](https://stackoverflow.com/questions/881085/count-the-number-of-occurrences-of-a-character-in-a-string-in-javascript)
```js
let matches = (s.match(/a/g) || []).length;
```

## Wat?
```
j = max(0, q[i] - 2);
```
## Explanation:
### Example 1:
We will use following array:
```
[1 2 3 4 5]
```
We will examine element `3` from position `2`.

We have a rule, that element can bribe maximally 2 times.

Let's move element `5` twice on the left - array has changed to
```
[1 2 5 3 4]
```
Interesting thing now, that element `5` cannot go further to position `1` and it stays to position `2`.

### Example 2
We will the same initial array:
```
[1 2 3 4 5]
```
We will examine element `3` from position `2`.

We have the same rule - element can bribe maximally 2 times.

Let's move element `4` twice on the left - array has changed to
```
[1 4 2 3 5]
```
From here element `4` cannot go further to position `0` and it stays at position `1`.
Element `4` is the closest right element of element `3` and if the rule of "2 bribes" is not broken it cannot be moved further than index `1` what is
```
3 - 2
```
what is
```
q[i] - 2
```
So it is minimally possible index of an element that possibly can be greater that `q[i]`.
Elelements from all other indexes on the left like `q[i] - 3, q[i] - 4, ...` will be always less than `q[i]` because of the "double bribe" rule.
(If you don't believe it - check the examples).

### And why we need it?
So the thing is that this inner `for (int j = max(0, q[i] - 2); j < i; j++)` loop
comparing an element `q[i]` with every other element on the left side. And basically it is counting all elements that are bigger than `q[i]`, all elements that have brided the `q[i]`. And it is starting from the minimal index where possibly can be a greater element than `q[i]`.

You can also use `for (int j = 0; j < i; j++)` as inner loop, then it will be like clean bubble sorting ( but without sorting ). **In scope this challege algorithm will fail because of timeout.** But actually it will work, just a bit longer, but result would be the same.

As i said before, because of "double bribe" rule there is no need to compare any `q[i]` element with elements located on the left from index `q[i] - 2`. The result will not change, but running time will be shorter.

### P.S.
There are also cases, when `q[i] - 2` can be less than zero, that is why boundary condition
```
max(0, q[i] - 2)
```
is used.