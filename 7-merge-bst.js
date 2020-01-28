const {TreeNode, make, log} = require('../tree-helper')

function mergeTree(a, b) {
  if (!a && !b) return
  if (!a) return b
  if (!b) return a

  let left = mergeTree(a.left, b.left)
  let right = mergeTree(a.right, b.right)

  console.log(left, right)

  let node = new TreeNode()
  node.left = a.left.val + b.left.val
  node.right = a.right.val + b.right.val

  return node
}

log(mergeTree(make(1, 2, 3), make(1, 2, 3)))
