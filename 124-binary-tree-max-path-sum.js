const {TreeNode, make, log} = require('../tree-helper')

// Time Complexity: O(N) where N is amount of node in the tree.
// Space Complexity: O(1), no additional space required.

function maxPathSum(root) {
  let max = null

  function sumOf(node) {
    if (!node) return 0

    let left = sumOf(node.left)
    let right = sumOf(node.right)

    // เทียบว่าระหว่างรวม node ฝั่งซ้ายหรือขวา กับไม่รวม อะไรมากกว่ากัน
    let maxChild = Math.max(Math.max(left, right) + node.val, node.val)

    // เทียบว่าระหว่างรวมหมด กับเอาแค่บางฝั่ง อะไรมากกว่ากัน
    let maxSum = Math.max(maxChild, left + node.val + right)

    // เก็บค่า maxSum ที่มากที่สุด
    max = Math.max(max, maxSum)

    // ส่งฝั่งที่มากที่สุดไป
    return maxChild
  }

  sumOf(root)

  return max
}

console.log(maxPathSum(make(1, 2, 3))) // 6
console.log(maxPathSum(make(-10, 9, 20, null, null, 15, 7))) // 42
console.log(maxPathSum(make(1, 2, 3, 4, 5, 6))) // 21
console.log(maxPathSum(make(-10, 3, 5, null, null, 8, 9)))
