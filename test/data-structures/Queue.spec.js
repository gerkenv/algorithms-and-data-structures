const QueueOnSinglyLinkedList
  = require('../../src/data-structures/Queue').QueueOnSinglyLinkedList;
const QueueOnResizingArray
  = require('../../src/data-structures/Queue').QueueOnResizingArray;
const expect = require('chai').expect;

describe('Queue', function() {
  const queues = [QueueOnResizingArray, QueueOnSinglyLinkedList];
  const queueClassNames = ['QueueOnResizingArray', 'QueueOnSinglyLinkedList'];
  queues.forEach((Queue, index) => {
    describe(queueClassNames[index], () => {
      describe('#constructor', () => {
        const queue = new Queue();
        it('should create an instance of object', () => {
          expect(queue).to.be.an('object');
        });
        it('should create an empty queue', () => {
          expect(queue.length()).to.be.equal(0);
        });
      });
      describe('#enqueue', () => {
        const queue = new Queue();
        const returnedValue = queue.enqueue(1);
        it('should return `undefined`', () => {
          expect(returnedValue).to.be.undefined;
        });
        it('should increment quantity of elements in queue', () => {
          for (let i = 2; i < 100; i++) {
            queue.enqueue(i);
            const result = queue.length();
            expect(result).to.be.equal(i);
          }
        });
      });
      describe('#dequeue', () => {
        const queue = new Queue();
        it('should return `undefined` if queue is empty', () => {
          const result = queue.dequeue();
          expect(result).to.be.undefined;
        });
        it('should return items in the same order they were inserted in a queue', () => {
          for (let i = 0; i < 100; i++) {
            queue.enqueue(i);
          }
          for (let i = 0; i < 100; i++) {
            const result = queue.dequeue();
            expect(result).to.be.equal(i);
          }
        });
      });
    });
  });
});

