# Algorithms And Data Structures
Based on resources of
* [Algorithms, 4th Edition](https://algs4.cs.princeton.edu/home/) book.
  * Related code in java can be found in [github repository](https://github.com/kevin-wayne/algs4/tree/master/src/main/java/edu/princeton/cs/algs4)
* https://www.hackerrank.com/

## 1.1 Union-find
The structure was designed to solve dynamic connectivity problems. It contains unions (groups) of elements that are connected within a group.
 * Initially each element represents its own group.
 * `union` operation combines groups together.
 * `find` operation returns a unique group identifier (group root).
 * `connected` operation returns `true` if elements belong to the same group.

### 1.1.1 Rate Of Growth g(n)
| Class                                        | Initialize | Union   | Find  |
|----------------------------------------------|------------|---------|-------|
| UnionFindQuickFind                           | N          | N       | 1     |
| UnionFindQuickUnion                          | N          | N       | N     |
| WeightedUnionFindQuickUnion                  | N          | lg N    | lg N  |
| WeightedUnionFindQuickUnionWithPathCompression | N        | lg* N   | lg* N |

where `lg* N` is a log function iterated to 0.