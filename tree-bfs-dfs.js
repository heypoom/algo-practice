const {TreeNode, make, log} = require('./tree-helper')

//     1
//  2     3
// 4 5

// Breadth First Traversal: 1 2 3 4 5
//
// Depth First Traversals
//   Pre-order Traversal:   1 2 4 5 3
//   In-order Traversal:    4 2 5 1 3
//   Post-order Traversal:  4 5 2 3 1

// Depth First Search (Post-order)
function bfs(root) {
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

// Depth First Search (Pre-order)
function dfs(root) {
  let str = ''

  function _traverse(node) {
    if (!node) return

    str += `${node.val} `

    _traverse(node.left)
    _traverse(node.right)
  }

  _traverse(root)

  console.log(str)
}

let tree = make(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)

bfs(tree)
dfs(tree)
