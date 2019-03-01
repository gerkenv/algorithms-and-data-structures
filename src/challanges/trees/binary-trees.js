// Swap Nodes [Algo]

// https://www.hackerrank.com/challenges/swap-nodes-algo/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search

/**
 * Function swaps nodes stored in array if a specified query is a multiple
 * of a node height.
 * After each swap it makes the in-order traversal of a tree.
 * @param {Array(Array(2))} indexes
 * @param {number[]} queries
 * @returns {Array(Node.data[])} All in-order traversals of a tree.
 */
function swapNodesAtMultipliesOfQueries(indexes, queries) {
  // define a root node
  let tree = new Node(1);
  // fill up a tree
  tree = addNodeToTree(tree, indexes);
  // declare result array
  let result = [];
  // perform swap for each multiple of quiries[n]
  for (let query of queries) {
      tree = swapNodeAtMultipliesOfQuery(tree, query, 1);
      result.push(inOrderTraversal(tree));
  }
  // return result array of arrays with indexes
  return result;
}

/**
 * Binary tree node.
 */
class Node {
  /**
   * Create a new node.
   * @param {any} data - a `data` to store in node.
   */
  constructor(data) {
      this.data = data;
      this.left = undefined;
      this.right = undefined;
  }
}

/**
 * Function converts an array of node children stored in
 * specific format to usual binary tree.
 * Array format:
 * `[[2,3], [4,5], [6,7], [-1,-1], [-1,-1], [-1,-1], [-1,-1]]`.
 * Each child stores an index, where its child is located.
 * Root node stores index `1` and not presented in array.
 * @param {Node} node - a root of a tree.
 * @param {Array(Array(2))} childrenArray
 * @returns {Node} A root of a binary tree.
 */
function addNodeToTree(node, childrenArray) {
  if (node === undefined) return undefined;
  let index = node.data - 1;
  if (index < childrenArray.length) {
      let leftChildData = childrenArray[index][0];
      if (leftChildData !== -1) {
          node.left = new Node(leftChildData);
          node.left = addNodeToTree(node.left, childrenArray);
      }
      let rightChildData = childrenArray[index][1];
      if (rightChildData !== -1) {
          node.right = new Node(rightChildData);
          node.right = addNodeToTree(node.right, childrenArray);
      }
  }
  return node;
}

/**
 * If a node height is a multiple of a `query` number, then node children are     swapped.
 * @param {Node} node - a root of a tree.
 * @param {number} query - a number which multiplies `1 * query`, `2 * query`,  * etc are compared with a height of a node, and if they matching then children
 * are swapped.
 * @param {number} height - current height of node in a tree in range [1..n].
 * @returns {Node} A root of modified binary tree.
 */
function swapNodeAtMultipliesOfQuery(node, query, height) {
  if (node === undefined) return undefined;
  if (isXMultipleOfY(height, query)) {
      let value = node.left;
      node.left = node.right;
      node.right = value;
  }
  if (node.left)  node.left  = swapNodeAtMultipliesOfQuery(node.left, query, height + 1);
  if (node.right) node.right = swapNodeAtMultipliesOfQuery(node.right, query, height + 1);
  return node;
}

/**
 * In-order traversal of a binary tree to collect all stored node data into
 * an array.
 * @param {Node} node - a root of a tree.
 * @returns {Node.data[]} Array with nodes data.
 */
function inOrderTraversal(node) {
  if (node === undefined) return [];
  let indexes = inOrderTraversal(node.left);
  indexes.push(node.data);
  indexes = indexes.concat(inOrderTraversal(node.right));
  return indexes;
}

/**
 * Function checks if `x` is a multiple of `y`.
 * Example: `3, 6, 9, 12` are multiples of `3` => `3 * 1`, `3 * 2`, etc.
 * @param {number} x
 * @param {number} y
 */
function isXMultipleOfY(x, y) {
  if ((x !== 0) && (y !== 0) && (x % y === 0)) return true;
  return false;
}

// var output = swapNodes([[2, 3], [-1, -1], [-1, -1]], [1, 1]);