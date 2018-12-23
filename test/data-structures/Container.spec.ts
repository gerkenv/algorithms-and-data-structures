import { SinglyLinkedList } from '../../src/data-structures/LinkedList';
import { ResizingArray } from '../../src/data-structures/ResizingArray';
import { expect } from 'chai';

describe('Interface behaviour of `SinglyLinkedList` and `ResizingArray` should match.', function() {
  let classNames = ['SinglyLinkedList', 'ResizingArray'];
  let containers = [SinglyLinkedList, ResizingArray];
  containers.forEach((Container, index) => {
    describe(classNames[index], () => {
      describe('#push', () => {
        it('should increment amount of elements in container', () => {
          let container = new Container();
          for (let i = 1; i < 100; i++) {
            container.push(null);
            const result = container.length();
            expect(result).to.be.equal(i);
          }
        })
      });
      describe('#unshift', () => {
        it('should increment amount of elements in container', () => {
          let container = new Container();
          for (let i = 1; i < 100; i++) {
            container.unshift(null);
            const result = container.length();
            expect(result).to.be.equal(i);
          }
        })
      });
      describe('#pop', () => {
        describe('should return last element of container', () => {
          it('Test case 1: `push` a bunch of elements then `pop` them all back in reversed order', () => {
            let container = new Container();
            for (let i = 1; i < 100; i++) {
              container.push(i);
            }
            for (let i = 1; i < 100; i++) {
              const result = container.pop();
              expect(result).to.be.equal(100 - i);
            }
          });
          it('Test case 2: `push` an item and immediately `pop` it back many times.', () => {
            let container = new Container();
            for (let i = 1; i < 100; i++) {
              container.push(i);
              const result = container.pop();
              expect(result).to.be.equal(i);
              expect(container.length()).to.be.equal(0);
            }
          });
          it('Test case 3: `unshift` a bunch of elements then `pop` them all back', () => {
            let container = new Container();
            for (let i = 1; i < 100; i++) {
              container.unshift(i);
            }
            for (let i = 1; i < 100; i++) {
              const result = container.pop();
              expect(result).to.be.equal(i);
            }
          });
          it('Test case 4: `unshift` an item and immediately `pop` it back many times.', () => {
            let container = new Container();
            for (let i = 1; i < 100; i++) {
              container.unshift(i);
              const result = container.pop();
              expect(result).to.be.equal(i);
              expect(container.length()).to.be.equal(0);
            }
          });
        });
      });
      describe('#shift', () => {
        describe('should return first element of container', () => {
          it('Test case 1: `push` a bunch of elements then `shift` them all back', () => {
            let container = new Container();
            for (let i = 1; i < 100; i++) {
              container.push(i);
            }
            for (let i = 1; i < 100; i++) {
              const result = container.shift();
              expect(result).to.be.equal(i);
            }
          });
          it('Test case 2: `push` an item and immediately `shift` it back many times.', () => {
            let container = new Container();
            for (let i = 1; i < 8; i++) {
              container.push(i);
            }
            for (let i = 8; i < 100; i++) {
              container.push(i);
              const result = container.shift();
              expect(result).to.be.equal(i-7);
              expect(container.length()).to.be.equal(7);
            }
          });
          it('Test case 3: `unshift` a bunch of elements then `shift` them all back in reversed order', () => {
            let container = new Container();
            for (let i = 1; i < 100; i++) {
              container.unshift(i);
            }
            for (let i = 1; i < 100; i++) {
              const result = container.shift();
              expect(result).to.be.equal(100 - i);
            }
          });
          it('Test case 4: `unshift` an item and immediately `shift` it back many times.', () => {
            let container = new Container();
            for (let i = 1; i < 100; i++) {
              container.unshift(i);
              const result = container.shift();
              expect(result).to.be.equal(i);
              expect(container.length()).to.be.equal(0);
            }
          });
        });
      });
    });
  });
});