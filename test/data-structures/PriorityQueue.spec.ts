import { BinaryHeapMax, BinaryHeap } from '../../src/data-structures/PriorityQueue';
import { expect } from 'chai';
import { isSortedInAscendingOrder, isSorted } from '../../src/algorithms/utilities';

describe('Interface behavior of priority queues should match.', function() {
  let classNames = ['BinaryHeapMax', 'BinaryHeap'];
  let classes = [BinaryHeapMax, BinaryHeap];
  classes.forEach((PriorityQueue, index) => {
    describe(classNames[index], () => {
      describe('#insert', () => {
        it('should increment amount of elements in container', () => {
          let priorityQueue = new PriorityQueue();
          for (let i = 0; i < 100; i++) {
            priorityQueue.insert(i+10);
            const result = priorityQueue.length();
            expect(result).to.be.equal(i+1);
          }
        })
      });
      describe('#getTop', () => {
        it('should return the top most element from container', () => {
            let priorityQueue = new PriorityQueue();
            let max = 0;
            for (let i = 0; i < 100; i++) {
              let random = Math.floor(Math.random() * 1000);
              priorityQueue.insert(random);
              if (max < random) max = random;
              const result = priorityQueue.getTop();
              expect(result).to.be.equal(max);
            }
        });
      });
      describe('#removeTop', () => {
        it('should return the top most element from container', () => {
            let priorityQueue = new PriorityQueue();
            for (let i = 0; i < 100; i++) {
              let random = Math.floor(Math.random() * 1000);
              priorityQueue.insert(random);
            }
            let array = [];
            while (true) {
              let max = priorityQueue.removeTop();
              if (max == undefined) break;
              array.unshift(max);
            }
            expect(array.length).to.be.equal(100);
            const result = isSortedInAscendingOrder(array);
            expect(result).to.be.true;
        });
      });
    });
  });
});

describe('Binary heap with custom comparator should hold min at the top', () => {
  describe('#insert', () => {
    it('should increment amount of elements in container', () => {
      let priorityQueue = new BinaryHeap((a, b) => (a > b));
      for (let i = 0; i < 100; i++) {
        priorityQueue.insert(i+10);
        const result = priorityQueue.length();
        expect(result).to.be.equal(i+1);
      }
    })
  });
  describe('#getTop', () => {
    it('should return the top most element from container', () => {
      let priorityQueue = new BinaryHeap((a, b) => (a > b));
      let min = 1000;
      for (let i = 0; i < 100; i++) {
        let random = Math.floor(Math.random() * 1000);
        priorityQueue.insert(random);
        if (min > random) min = random;
        const result = priorityQueue.getTop();
        expect(result).to.be.equal(min);
      }
    });
  });
  describe('#removeTop', () => {
    it('should return the top most element from container', () => {
      let priorityQueue = new BinaryHeap((a, b) => (a > b));
      for (let i = 0; i < 100; i++) {
        let random = Math.floor(Math.random() * 1000);
        priorityQueue.insert(random);
      }
      let array = [];
      while (true) {
        let min = priorityQueue.removeTop();
        if (min == undefined) break;
        array.unshift(min);
      }
      expect(array.length).to.be.equal(100);
      const result = isSorted(array, (a, b) => (a >= b));
      expect(result).to.be.true;
    });
  });
});
