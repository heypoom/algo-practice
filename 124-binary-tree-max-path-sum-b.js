const {TreeNode, make, log} = require('../tree-helper')

// Time Complexity: O(N) where N is amount of node in the tree.
// Space Complexity: O(1), no additional space required.

function maxPathSum(root) {
  let answer = -1

  function sumOf(node) {
    if (!node) return 0

    let val = node.val
    if (!node.left && !node.right) return val

    let l = sum(node.left)
    let r = sum(node.right)

    if (node.left && node.right) {
      answer = Math.max(answer, val + l + r)

      return val + Math.max(l, r)
    }

    if (!node.left) return r + val

    return l + val
  }

  sumOf(root)

  return answer
}

console.log(maxPathSum(make(1, 2, 3))) // 6
console.log(maxPathSum(make(-10, 9, 20, null, null, 15, 7))) // 42
console.log(maxPathSum(make(1, 2, 3, 4, 5, 6))) // 21
