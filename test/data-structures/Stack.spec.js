const StackOnSinglyLinkedList
  = require('../../dist/data-structures/Stack').StackOnSinglyLinkedList;
const StackOnResizingArray
  = require('../../dist/data-structures/Stack').StackOnResizingArray;
const expect = require('chai').expect;

describe('Stack', function() {
  const stacks = [StackOnResizingArray, StackOnSinglyLinkedList];
  const stackClassNames = ['StackOnResizingArray', 'StackOnSinglyLinkedList'];
  stacks.forEach((Stack, index) => {
    describe(stackClassNames[index], () => {
      describe('#constructor', () => {
        const stack = new Stack();
        it('should create an instance of object', () => {
          expect(stack).to.be.an('object');
        });
        it('should create an empty stack', () => {
          expect(stack.length()).to.be.equal(0);
        });
      });
      describe('#push', () => {
        const stack = new Stack();
        const returnedValue = stack.push(1);
        it('should return `undefined`', () => {
          expect(returnedValue).to.be.undefined;
        });
        it('should increment quantity of elements in stack', () => {
          for (let i = 2; i < 100; i++) {
            stack.push(i);
            const result = stack.length();
            expect(result).to.be.equal(i);
          }
        });
      });
      describe('#pop', () => {
        const stack = new Stack();
        it('should return `undefined` if stack is empty', () => {
          const result = stack.pop();
          expect(result).to.be.undefined;
        });
        it('should return items in reversed order they were inserted in a stack', () => {
          for (let i = 0; i < 100; i++) {
            stack.push(i);
          }
          for (let i = 0; i < 100; i++) {
            const result = stack.pop();
            expect(result).to.be.equal(99-i);
          }
        });
      });
    });
  });
});

