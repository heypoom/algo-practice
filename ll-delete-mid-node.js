const {ListNode, make, log} = require('./ll-helper')

function removeMid(root, targetNode) {
  let node = root
  let prev = root

  while (node !== null) {
    if (node.val === targetNode.val) {
      prev.next = prev.next.next
      break
    }

    prev = node
    node = node.next
  }

  return root
}

log(removeMid(make(0, 1, 2, 3, 4, 5), make(3))) // [0, 1, 2, 4, 5]
log(removeMid(make(0, 1, 2, 3, 4, 5), make(1))) // [0, 2, 3, 4, 5]
log(removeMid(make(0, 1, 2, 3, 4, 5), make(4))) // [0, 1, 2, 3, 5]
