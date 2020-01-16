const {ListNode, make, log} = require('./ll-helper')

function intersect(rootA, rootB) {
  let nodeA = rootA
  let nodeB = rootB
  let $iter = 0

  let resultRoot = new ListNode(-1)
  let resultNode = resultRoot

  while (nodeA !== null || nodeB !== null) {
    $iter++

    if (nodeA === null) break

    if (nodeB === null) {
      nodeA = nodeA.next
      nodeB = rootB

      continue
    }

    if (nodeA.val === nodeB.val && resultNode.val !== nodeA.val) {
      resultNode.next = new ListNode(nodeA.val)
      resultNode = resultNode.next
    }

    nodeB = nodeB.next
  }

  console.log('//', $iter, 'iterations.')

  if (resultRoot.next) return resultRoot.next

  return -1
}

// -> [20, 21, 22]
log(intersect(make(10, 20, 21, 22, 23), make(1, 2, 3, 4, 20, 21, 22, 30, 50)))

// -> -1
log(intersect(make(1, 2, 3), make(4, 5, 6)))

log(
  intersect(
    make(0, 0, 0, 11, 12, 13, 5, 9, 8, 14),
    make(11, 12, 13, 14, 3, 2, 1),
  ),
)

log(
  intersect(
    make(0, 0, 5, 0, 0, 20, 0, 0, 10, 0, 0, 5),
    make(1, 5, 1, 10, 1, 15, 1, 20, 1, 5, 8, 5),
  ),
)
