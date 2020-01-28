const {TreeNode, log} = require('./tree-helper')
const {prettyPrint} = require('./tree-pretty-print')

// Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.

function createBinarySearchTree(list) {
  if (!list) return

  let mid = Math.floor(list.length / 2)
  if (mid <= 0) return

  let root = new TreeNode(list[mid])

  root.left = createBST(list.slice(0, mid))
  root.right = createBST(list.slice(mid + 1))

  return root
}

let tree = createBinarySearchTree([1, 2, 3, 4, 5, 6, 7, 8, 9])

log(tree)
prettyPrint(tree)
