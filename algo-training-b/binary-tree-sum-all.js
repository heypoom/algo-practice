const {TreeNode, make, log} = require('../tree-helper')

function sum(node) {
	if (!node) return 0

	let val = node.val
	let left = sum(node.left)
	let right = sum(node.right)

	return val + left + right
}

console.log(sum(make(1, 2, 3))) // 6
console.log(sum(make(-10, 9, 20, null, null, 15, 7))) // 42
console.log(sum(make(1, 2, 3, 4, 5, 6))) // 21

