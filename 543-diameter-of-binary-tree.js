const {make, log} = require('./tree-helper')

// Time Complexity: O(N) where N is count of nodes in the tree.
// Space Complexity: O(1)
// Edge Case: Tree with a Single Node

function diameterOfBinaryTree(root) {
  let longest = 0

  function depthOf(node) {
    if (!node) return 0

    let left = depthOf(node.left)
    let right = depthOf(node.right)

    longest = Math.max(longest, left + right)

    return Math.max(left, right) + 1
  }

  depthOf(root)

  return longest
}

console.log(diameterOfBinaryTree(make(0))) // 0
console.log(diameterOfBinaryTree(make(1, 2, 3, 4, 5))) // 3
