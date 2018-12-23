const StackOnLinkedList
  = require('../../dist/data-structures/Stack').StackOnLinkedList;
const expect = require('chai').expect;

describe('StackOnLinkedList', function() {
  describe('StackOnLinkedList', () => {
    it('constructor should create an instance of an object', () => {
      const result = new StackOnLinkedList();
      expect(result).to.be.an('object');
    })
  });
});
