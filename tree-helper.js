function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}

function make(...list) {
  function _insert(root = null, i = 0) {
    if (i < list.length) {
      root = new TreeNode(list[i])

      // insert left child
      root.left = _insert(root.left, 2 * i + 1)

      // insert right child
      root.right = _insert(root.right, 2 * i + 2)
    }

    return root
  }

  let result = _insert()

  return result
}

function printInOrder(root) {
  let str = ''

  function _print(node) {
    if (node === null) return

    _print(node.left)
    str += `${node.val} `
    _print(node.right)
  }

  _print(root)

  console.log(str.trim())
}

function printBfs(root) {
  if (!root) return

  let queue = [root]
  let str = ''

  while (queue.length > 0) {
    let node = queue.shift()

    str += `${node.val} `

    if (!node.left && !node.right) continue

    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }

  console.log(str)
}

//       1
//      / \
//     2   3
//    / \ / \
//   4  5 6  6
//  / \ /
// 6  6 6

// printBfs(make(1, 2, 3, 4, 5, 6, 6, 6, 6))

exports.make = make
exports.TreeNode = TreeNode

exports.log = printBfs
exports.print = printBfs
exports.printBfs = printBfs

exports.printInOrder = printInOrder
exports.inOrder = printInOrder
