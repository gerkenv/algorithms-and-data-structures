import { SinglyLinkedList } from '../../src/data-structures/LinkedList';
import { ResizingArray } from '../../src/data-structures/ResizingArray';
import { expect } from 'chai';

describe('Interface behaviour of `SinglyLinkedList` and `ResizingArray` should match.', function() {
  let classNames = ['SinglyLinkedList', 'ResizingArray'];
  let containers = [SinglyLinkedList, ResizingArray];
  containers.forEach((container, index) => {
    describe(classNames[index], () => {
      describe('#push', () => {
        it('should increment amount of elements in array', () => {
          let array = new container();
          for (let i = 1; i < 8; i++) {
            array.push(null);
            const result = array.length();
            expect(result).to.be.equal(i);
          }
        })
      });
      describe('#shift', () => {
        describe('should return first element of array', () => {
          it('Test case 1: `push` a bunch of elements then `shift` them all back', () => {
            let array = new container();
            for (let i = 1; i < 8; i++) {
              array.push(i);
            }
            for (let i = 1; i < 8; i++) {
              const result = array.shift();
              expect(result).to.be.equal(i);
            }
          });
          it('Test case 2: `push` an item and immediately `shift` it back many times.', () => {
            let array = new container();
            for (let i = 1; i < 8; i++) {
              array.push(i);
            }
            for (let i = 8; i < 100; i++) {
              array.push(i);
              const result = array.shift();
              expect(result).to.be.equal(i-7);
              expect(array.length()).to.be.equal(7);
            }
          });
        });
      });
    });
  });
});