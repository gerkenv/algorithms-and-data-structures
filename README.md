# Algorithms And Data Structures
Based on resources of
* [Algorithms, 4th Edition](https://algs4.cs.princeton.edu/home/) book.
  * Related code in java can be found in [github repository](https://github.com/kevin-wayne/algs4/tree/master/src/main/java/edu/princeton/cs/algs4)
* https://www.hackerrank.com/

## 1.1 Union-find
The structure is designed to contain many components (unions) of entries. It helps to figure out if 2 entries are belong to the same component (union) or not.

### 1.1.1 Rate Of Growth g(n)
| Class                   | Initialization | Connect | Find |
|-------------------------|----------------|---------|------|
| UnionFindQuickFind      | N              | N       | 1    |
| UnionFindQuickUnion     | N              | N       | N    |