const {log, make} = require('./tree-helper')

function mergeTrees(a, b) {
  if (!a) return b
  if (!b) return a

  let t = new TreeNode(a.val + b.val)

  t.left = mergeTrees(a.left, b.left)
  t.right = mergeTrees(a.right, b.right)

  return t
}
