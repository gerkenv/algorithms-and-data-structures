const binarySearch
 = require('../../src/algorithms/binary-search').binarySearch;

const expect = require('chai').expect;

describe('binarySearch', function() {
  it('should return an index of an existing number in array', () => {
    let array = [];
    for (let i = 1; i < 11; i++) { array[i-1] = i*2; }

    const result = binarySearch(array, 2);
    expect(result).to.be.equal(0);
  });
  it('should return `-1` for non-existing array element', () => {
    let array = [];
    for (let i = 1; i < 11; i++) { array[i-1] = i*2; }

    const result = binarySearch(array, 3);
    expect(result).to.be.equal(-1);
  });
});