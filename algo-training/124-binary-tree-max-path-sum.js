const {TreeNode, make, log} = require('../tree-helper')

// Time Complexity: O(N) where N is amount of node in the tree.
// Space Complexity: O(1), no additional space required.

function maxPathSum(root) {
	let max = null

	function sumOf(node) {
		if (!node) return 0

		let left = sumOf(node.left)
		let right = sumOf(node.right)

		let maxChild = Math.max(
			Math.max(left, right) + node.val,
			node.val
		)

		let maxSum = Math.max(
			maxChild,
			left + node.val + right
		)

		max = Math.max(max, maxSum)

		return maxChild
	}

	sumOf(root)

	return max
}

console.log(maxPathSum(make(-10, 3, 5, null, null, 8, 9)))

