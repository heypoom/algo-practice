const {make, log, TreeNode} = require('./tree-helper')

function sortedArrayToBST(nums) {
  function dfs(left, right) {
    if (left >= right) return null

    let mid = Math.floor((left + right) / 2)
    let root = new TreeNode(nums[mid])

    root.left = dfs(left, mid)
    root.right = dfs(mid + 1, right)

    return root
  }

  return dfs(0, nums.length)
}

log(sortedArrayToBST([-10, -3, 0, 5, 9]))
log(sortedArrayToBST([1, 2, 3, 4, 5, 6]))
