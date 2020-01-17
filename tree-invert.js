const {TreeNode, make, log} = require('./tree-helper')

function invert(node) {
  if (!node) return

  if (node.left) invert(node.left)
  if (node.right) invert(node.right)

  let temp = node.right

  node.right = node.left
  node.left = temp

  return node
}

log(invert(make(1, 2, 3, 4, 5, 6)))
