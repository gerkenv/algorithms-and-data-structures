const QueueOnLinkedList
  = require('../../src/data-structures/Queue').QueueOnLinkedList;
const QueueOnArray
  = require('../../src/data-structures/Queue').QueueOnArray;
 const expect = require('chai').expect;

describe('QueueOnArray', function() {
  describe('#constructor', () => {
    const queue1 = new QueueOnArray();
    it('should create an instance of object', () => {
      expect(queue).to.be.an('object');
    });

    queue1.enqueue('0');
    queue1.enqueue('1');
    queue1.enqueue('2');
    queue1.enqueue('3');
    console.log(queue1.dequeue());
    queue1.enqueue('0');

    const queue2 = new QueueOnArray();

    // they share `_this` object
    // QueueOnArray has a reference to associated closure where `_this` is stored

    queue2.enqueue('0');
    queue2.enqueue('1');
    queue2.enqueue('2');
    queue2.enqueue('3');
    console.log(queue2.dequeue());
    console.log(queue2.dequeue());



  });
});

describe('QueueOnLinkedList', function() {
  describe('#constructor', () => {
    const queue = new QueueOnLinkedList();
    it('should create an instance of object', () => {
      expect(queue).to.be.an('object');
    });
  });
  describe('#isEmpty', () => {
    const queue = new QueueOnLinkedList();
    it('should return `true` after construction of an object', () => {
      expect(queue.isEmpty()).to.be.true;
    });
  });
  describe('#enqueue', () => {
    const queue = new QueueOnLinkedList();
    const returnedValue = queue.enqueue(1);
    it('should return `undefined`', () => {
      expect(returnedValue).to.be.undefined;
    });
    it('should increment quantity of elements in queue', () => {
      const result = queue.isEmpty();
      expect(result).to.be.false;
    });
  });
  describe('#dequeue', () => {
    const queue = new QueueOnLinkedList();
    it('should return `undefined` if queue is empty', () => {
      const result = queue.dequeue();
      expect(result).to.be.undefined;
    });
    const firstItem = 1;
    queue.enqueue(firstItem);
    const returnedValue = queue.dequeue();
    it('should return first inserted item after one `enqueue` operation', () => {
      expect(returnedValue).to.be.equal(firstItem);
    });
    it('should return `undefined` after one `enqueue` and one `dequeue` operations', () => {
      const result = queue.dequeue();
      expect(result).to.be.undefined;
    });
    it('should be empty after after one `enqueue` and one `dequeue` operations', () => {
      const result = queue.isEmpty();
      expect(result).to.be.true;
    });
  });
});

