const binarySearch = require('./BinarySearch').binarySearch;

let array = [];
for (let i = 1; i < 11; i++) { array[i-1] = i*2; }

let result = binarySearch(array, 7);
