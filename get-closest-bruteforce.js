const {TreeNode, make, log} = require('./tree-helper')

function getClosest(root, target) {
  let list = []

  function inOrder(node) {
    if (!node) return

    inOrder(node.left)
    list.push(node.val)
    inOrder(node.right)
  }

  inOrder(root)

  console.log(list)

  let min = Infinity
  let minIndex = -1

  for (let i = 0; i < list.length; i++) {
    let diff = Math.abs(list[i] - target)

    if (diff < min) {
      min = diff
      minIndex = i
    }
  }

  return list[minIndex]
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
