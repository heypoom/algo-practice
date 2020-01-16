var rightSideView = function(root) {
  let result = []
  dfs(root, result, 0)
  return result
}

var dfs = function(node, result, level) {
  if (node === null) return
  result[level] = node.val
  dfs(node.left, result, level + 1)
  dfs(node.right, result, level + 1)
}
