const {TreeNode, make, log} = require('../tree-helper')

function mps(root) {
  let answer = -1

  function sum(node) {
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

  sum(root)

  return answer
}

console.log(mps(make(1, 2, 3))) // 6
console.log(mps(make(-10, 9, 20, null, null, 15, 7))) // 42
console.log(mps(make(1, 2, 3, 4, 5, 6))) // 21
