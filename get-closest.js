const {TreeNode, make, log} = require('./tree-helper')

function getClosest(root, target) {
  let minDiff = Infinity
  let answer = -1

  function scan(node) {
    if (!node) return

    console.log(node.val)

    if (node.val === target) {
      answer = target
      return
    }

    if (minDiff > Math.abs(node.val - target)) {
      minDiff = Math.abs(node.val - target)
      answer = node.val
    }

    if (target < node.val) scan(node.left)
    else scan(node.right)
  }

  scan(root)

  return answer
}

let Node = TreeNode

let root = new Node(9)
root.left = new Node(4)
root.right = new Node(17)
root.left.left = new Node(3)
root.left.right = new Node(6)
root.left.right.left = new Node(5)
root.left.right.right = new Node(7)
root.right.right = new Node(22)
root.right.right.left = new Node(20)

console.log(getClosest(root, 18)) // 17
