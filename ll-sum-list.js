const {ListNode, make, log} = require('./ll-helper')

function sum(rootA, rootB) {
  let nodeA = rootA
  let nodeB = rootB

  let carry = 0
  let resultRoot = new ListNode(-1)
  let resultNode = resultRoot

  while (nodeA !== null || nodeB !== null) {
    let sum = nodeA.val + nodeB.val + carry
    if (sum > 9) carry = 1
    sum %= 10

    resultNode.next = new ListNode(sum)
    resultNode = resultNode.next

    nodeA = nodeA.next
    nodeB = nodeB.next
  }

  if (carry > 0) resultNode.next = new ListNode(1)

  return resultRoot.next
}

// 123 + 123 = 246 -> [6 4 2]
log(sum(make(3, 2, 1), make(3, 2, 1)))

// 999 + 999 = 1998 -> [8, 9, 9, 1]
log(sum(make(9, 9, 9), make(9, 9, 9)))

// 1024 + 1024 = 2048 -> [8, 4, 2, 0]
log(sum(make(1, 0, 2, 4), make(1, 0, 2, 4)))
