
## Analysis Of Algorithms
### Commonly-used Notations
| notation  | provides               | example  | used to                   |
|-----------|------------------------|----------|---------------------------|
| Tilde     | leading term           | ~ 10 N^2 | provide approximate model |
| Big Theta | asymptotic growth rate | Θ(N^2)   | classify algorithm        |
| Big Oh    | Θ(N^2) and smaller     | O(N^2)   | develop upper bound       |
| Big Omega | Θ(N^2) and larger      | Ω(N^2)   | develop lower bound       |

## Sorting

| Name             | Worst   | Average | Best     | Extra Space | Stable | Inplace | Remarks                                               |
|------------------|---------|---------|----------|-------------|--------|---------|-------------------------------------------------------|
| Selection sort   | n^2/2   | n^2/2   | n^2/2    | O(1)        | no     | yes     | N exchanges                                           |
| Insertion sort   | n^2/2   | n^2/4   | n        | O(1)        | yes    | yes     | use for small N or partially ordered                  |
| Shell sort       | ?       | ?       | n log3 n | O(1)        | no     | yes     | tight code, subquadratic                              |
| Merge sort       | n lg n  | n lg n  | n lg n   | O(n)        | yes    | no      | n lg(n) guarantee                                     |
| 2-way quick sort | n^2/2   | 2n ln n | n lg n   | O(1)        | no     | yes     | n lg(n) probabilistic guarantee (fastest in practice) |
| 3-way quick sort | n^2/2   | 2n ln n | n        | O(1)        | no     | yes     | improves quick sort in presence of duplicate keys     |
| Heap sort        | 2n lg n | n ln n  | n lg n   | O(1)        | no     | yes     | O(n) with equal keys                                  |


### Stability
Is a property of sorting algorithm which defines that all items which have a same sorting key will remain their initial position relative to each other.

#### Hint
If an algorithm exchanging elements on a long distance, then it may move some item beyond the equal item.

#### Examples
1. So, if we have an unsorted table...

| digit | letter |
|-------|--------|
| 4     | a      |
| 2     | a      |
| 5     | a      |
| 3     | b      |
| 1     | b      |

... and we sort it first by digit...

| __digit__ | letter |
|-----------|--------|
| 1         | b      |
| 2         | a      |
| 3         | b      |
| 4         | a      |
| 5         | a      |

... and then we sort it by letter...

| digit | __letter__ |
|-------|------------|
| 2     | a          |
| 4     | a          |
| 5     | a          |
| 1     | b          |
| 3     | b          |

... then all digits with the same __letter__ hold the previous sorted order.

2. Otherwise if a sorting algorithm is unstable then elements are mixed in a such way, that previous sorting is discarded (table below).

| digit | __letter__ |
|-------|------------|
| 4     | a          |
| 2     | a          |
| 5     | a          |
| 3     | b          |
| 1     | b          |


## Data Structures
### Priority Queue vs. Binary Heap
If we need to process a huge amount of data that we cannot store and we need only to keep track of the maximal (minimal) M elements, then we can try to use the priority queue that is able to remove (dequeue) the minimal element from itself.

We can build such queue on top of array or linked list, in both cases we end up choosing between operation costs.

| implementation        | insert | deleteMin | getMin |
|-----------------------|--------|-----------|--------|
| unordered array       | 1      | N         | N      |
| unordered linked list | 1      | N         | N      |
| ordered array         | N      | 1         | 1      |
| ordered linked list   | N      | 1         | 1      |

But actually we can use binary heap.

| implementation        | insert | deleteMin | getMin |
|-----------------------|--------|-----------|--------|
| unordered array       | lg N   | lg N      | lg N   |

#### Heap Structure
There are 2 ways to implement a heap based on an array.
| implementation        | left child | right child | parent      |
|-----------------------|------------|-------------|-------------|
| 0 - based array       | i * 2 + 1  | i * 2 + 2   | (i - 1) / 2 |
| 1 - based array       | i * 2      | i * 2 + 1   | i / 2       |

### Symbol Tables

| implementation                     | guarantee search | guarantee insert | avg. search | avg. insert | ordered ops. | key ops.    |
|------------------------------------|------------------|------------------|-------------|-------------|--------------|-------------|
| sequential search (unordered list) | N                | N                | N/2         | N           | no           | equals()    |
| binary search (ordered array)      | lg N             | N                | lg N        | N/2         | yes          | compareTo() |
| binary search tree (BST)           | N                | N                | 1.39 lg N   | 1.39 lg N   |              | compareTo() |

