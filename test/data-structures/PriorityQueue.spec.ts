import { BinaryHeapMax } from '../../src/data-structures/PriorityQueue';
import { expect } from 'chai';
import { isSortedInAscendingOrder } from '../../dist/algorithms/utilities';

describe('Interface behavior of priority queues should match.', function() {
  let classNames = ['BinaryHeapMax'];
  let classes = [BinaryHeapMax];
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
            let max = 0;
            for (let i = 0; i < 10; i++) {
              let random = Math.floor(Math.random() * 1000);
              priorityQueue.insert(random);
            }
            let array = [];
            while (true) {
              let max = priorityQueue.removeTop();
              if (max == undefined) break;
              array.unshift(max);
            }
            expect(array.length).to.be.equal(10);
            const result = isSortedInAscendingOrder(array);
            expect(result).to.be.true;
        });
      });
    });
  });
});