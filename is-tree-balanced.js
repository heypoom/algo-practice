const {make, log} = require('./tree-helper')

function depthOf(node) {
  if (!node) return 0

  let left = depthOf(node.left)
  let right = depthOf(node.right)

  if (left == -1 || right == -1 || Math.abs(left - right) > 1) return -1

  return 1 + Math.max(left, right)
}

function isBalanced(root) {
  return depthOf(root) !== -1
}

console.log(isBalanced(make(1, 2, 3, 4, 5, 6)))
console.log(isBalanced(make(1, 2)))
